import express from "express";
import bodyParser from "body-parser";
import { routes } from "./app/index.js";

const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT, () => {
	console.log("Rodando na porta " + process.env.PORT);
});
