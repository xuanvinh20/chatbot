import  Express  from "express";
import HomeController from "../controller/HomeController";

let router = Express.Router();
let initWebRoutes = (app) =>{
    router.get("/", HomeController.getHomePage);

    router.post('/webhook', HomeController.postWebhook);
    router.get('/webhook', HomeController.getWebhook)

    return app.use('/',router);
}
module.exports = initWebRoutes;