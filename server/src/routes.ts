import { Express, Request, Response, NextFunction } from "express";
import {log, errorLogger} from './logger/'
import {show_bad_message, show_good_message } from "./functions/utils";
import { requireUser } from "./middleware/requireUser";
import {register_a_new_user, login_this_user, logout_this_user} from './controllers/users.controller'
import { create_a_new_prompt } from "./controllers/prompts.controller";

interface CustomRequest extends Request {
    loggedInDts: {}; // Replace YourType with the actual type of loggedInDts
}

const routes = (app: Express) => {
    // checks to see if our servers are running as they should
    app.get('/healthCheck', (req, res) => {
        const currentFilename = __filename;
        log.info({currentFilename}, 'checking my log')
        res.json('its all good')
    })

    // healthCheck for accessToken and refreshToken
    app.post('/healthCheck/accessToken', requireUser, (req, res) => {
        //@ts-ignore
        const new_token = req.body.loggedInDts.new_token || ''
        let returnMsg = {}

        if (new_token === 'yes') {
            returnMsg = {...show_good_message(), new_token, dts:req.body.loggedInDts}
        } else {
            returnMsg = show_good_message()
        }

        res.json(returnMsg)
    })

    //--START-- routes for users
    //#region users
    // this route registers a new user
    app.post('/users/new_user', async (req: Request, res: Response) => {
        const dts = await register_a_new_user(req.body)
        res.json(dts)
    })

    // this route logsIn a new user
    app.post('/users/login', async (req: Request, res: Response) => {
        const dts = await login_this_user(req.body)
        res.json(dts)
    })

    // this route logout the user
    app.post('/users/logout', async (req: Request, res: Response) => {
        const dts = await logout_this_user(req.body)
        res.json(dts)
    })
    //#endregion
    //--END--

    //--START-- routes for prompts
    // this route creates a new prompt
    app.post('/prompts/new', async (req: Request, res: Response) => {
        const dts = await create_a_new_prompt(req.body)
        res.json(dts)
    })
    //--END--
}

export default routes