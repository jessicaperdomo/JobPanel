import { MongoClient } from 'mongodb';

async function inserirVagas() {
  const client = await MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = client.db('myjobdb');
  const collection = db.collection('Job');

  const vagas = [
    {
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2g7iZQkBbEEfrp27B3qjz-E1iBtqNNzE0CZA5j4A3dA&s",
      "cargo": "Desenvolvedor Front-End",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "requisitos": "Experiência comprovada em desenvolvimento de interfaces web utilizando HTML, CSS e JavaScript",
      "formacao": "Ensino Superior em Ciências da Computação ou áreas relacionadas",
      "conhecimentos": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      "regime": "CLT",
      "jornada": "40",
      "remuneracao": "5.000,00"
    },
    {
      "logo": "https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_tile_logo_icon_170594.png",
      "cargo": "Desenvolvedor Full Stack",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "requisitos": "Experiência sólida com desenvolvimento web, incluindo conhecimentos em front-end e back-end",
      "formacao": "Ciências da Computação ou áreas afins",
      "conhecimentos": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      "regime": "PJ",
      "jornada": "Flexível",
      "remuneracao": "8.000,00"
    },
    {
      "logo": "https://pbs.twimg.com/profile_images/1162026650709757952/peBkHF_M_400x400.jpg",
      "cargo": "Analista de Dados",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "requisitos": "Experiência em análise de dados, modelagem e manipulação de bancos de dados",
      "formacao": "Graduação em Estatística, BCC ou áreas correlatas",
      "conhecimentos": ["SQL", "Python", "R", "Power BI", "Tableau"],
      "regime": "CLT",
      "jornada": "40",
      "remuneracao": "6.000,00"
    },
    {
      "logo": "https://dmwnh9nwzeoaa.cloudfront.net/2020-11/ciandt-logo-thumbnail.png",
      "cargo": "Desenvolvedor Mobile",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "requisitos": "Experiência em desenvolvimento de aplicativos mobile para iOS e Android",
      "formacao": "Ensino Superior em Ciência da Computação ou áreas relacionadas",
      "conhecimentos": ["Swift", "Kotlin", "React Native", "Firebase"],
      "regime": "CLT",
      "jornada": "40",
      "remuneracao": "5.500,00"
    },
    {
      "logo": "https://cdn.dribbble.com/users/1782212/screenshots/16653790/turing_logo.png",
      "cargo": "Analista de Segurança da Informação",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "requisitos": "Experiência em análise de vulnerabilidades, implementação de medidas de segurança e gerenciamento de incidentes",
      "formacao": "Graduação em Segurança da Informação",
      "conhecimentos": ["Segurança de Redes", "Criptografia", "Firewalls", "Ethical Hacking"],
      "regime": "CLT",
      "jornada": "40",
      "remuneracao": "7.000,00"
    }
  ];

  try {
    const result = await collection.insertMany(vagas);
    console.log(`${result.insertedCount} vagas inseridas com sucesso.`);
  } catch (error) {
    console.error('Erro ao inserir vagas:', error);
  } finally {
    await client.close();
  }
}

inserirVagas();
