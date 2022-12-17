import  Express  from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRoutes from "./routes/web";

let app = Express();

viewEngine(app);

webRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.port || 2000;
app.listen(port,()=> {
    console.log("app is running at the port: "+ port);
})