import JobDAL from "../DAL/JobDAL.js";
import path from 'path';

const dal = new JobDAL();

export default class JobController {

    //http://localhost:8081/insereJobs
    async insereJob(request, response) {
        const { cargo, cidade, estado, requisitos, formacao, conhecimentos, regime, jornada, remuneracao } = request.body;

        if (!request.body.logo && !request.file) {
            return response.status(400).send({ msg: "Nenhuma logo enviada!", sucesso: false });
        }

        const logoUrl =  request.body.logo ? request.body.logo : (request.file ? `http://localhost:8081/uploads/${request.file.filename}` : null);

        const job = {
            logo: logoUrl,
            cargo,
            cidade,
            estado,
            requisitos,
            formacao,
            conhecimentos,
            regime,
            jornada,
            remuneracao,
        };

        try {
            await dal.insereJob(job);
            response.status(201).send({ msg: "Job inserido com sucesso!", sucesso: true });
        } catch (error) {
            response.status(500).send({ msg: "Erro ao salvar o Job!", sucesso: false, error });
        }
    }

    //http://localhost:8081/jobs
    //http://localhost:8081/jobs/pesquisa
    async retornaJob(request,response){
        let filter = request.query.filter;
        let gen;

        if (filter) {
            try {
                const regexFilter = new RegExp(filter, 'i'); 

                filter = {
                    $or: [
                        { cargo: regexFilter }
                    ]
                };
            } catch (e) {
                console.error('Erro ao aplicar o filtro', e);
                return response.status(400).send({ error: 'Filtro inválido' });
            }
        } else {
            filter = {};
        }

        try {
            gen = await dal.retornaJob(filter);
            console.log(gen);
            response.status(200).send(gen);
        } catch (error) {
            console.error('Erro ao buscar os registros', error);
            response.status(500).send({ error: 'Erro ao buscar registros no banco de dados' });
        }
    }

    //http://localhost:8081/jobs/delete/:id
    async deleteJob(request, response) {
        const jobId = request.params.id;

        if (!jobId) {
            return response.status(400).send({ msg: "Job ID é necessário!", sucesso: false });
        }

        try {
            const deleted = await dal.deleteJobById(jobId);
            if (deleted) {
                return response.status(200).send({ msg: "Job deletado com sucesso!", sucesso: true });
            } else {
                return response.status(404).send({ msg: "Job não encontrado!", sucesso: false });
            }
        } catch (error) {
            console.error('Erro ao deletar o job:', error);
            return response.status(500).send({ msg: "Erro ao deletar o Job!", sucesso: false, error });
        }
    }

    //http://localhost:8081/uploads/1731961171503-profile.jpeg
    async retornaLogo(request,response){
        const logoName = request.params.name;
        const logoPath = path.resolve('uploads', logoName);

        response.sendFile(logoPath, err => {
            if (err) {
                response.status(err.status).end();
            }
        });
    }
}