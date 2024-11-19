import express from 'express';
import cors from "cors";
import jroutes from "./routes/routes.js"
import path from 'path';

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.json());
app.use(cors("*"));

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
//app.use('', express.static(path.join(__dirname, 'uploads')));

app.use(jroutes);

app.listen(8081, () => {
    console.log("Servidor na porta 8081");
    console.log(`Arquivos estáticos servidos de: ${path.join(__dirname, 'uploads')}`);
});