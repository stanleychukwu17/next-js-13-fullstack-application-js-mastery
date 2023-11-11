import { Express, Request, Response, NextFunction } from "express";
// import {register_a_new_user, login_this_user, logout_this_user} from './controllers/users.controller'
import {log, errorLogger} from './logger/'
import {show_bad_message, show_good_message } from "./functions/utils";
// import { requireUser } from "./middleware/requireUser";

const routes = (app: Express) => {
    // checks to see if our servers are running as they should
    app.get('/healthCheck', (req, res) => {
        const currentFilename = __filename;
        log.info({currentFilename}, 'checking my log')
        res.json('its all good')
    })

    // healthCheck for accessToken and refreshToken
    // app.post('/healthCheck/accessToken', requireUser, (req, res) => {
    //     //@ts-ignore
    //     const new_token = req.body.loggedInDts.new_token || ''
    //     let returnMsg = {}

    //     if (new_token === 'yes') {
    //         returnMsg = {...show_good_message(), new_token, dts:req.body.loggedInDts}
    //     } else {
    //         returnMsg = show_good_message()
    //     }

    //     res.json(returnMsg)
    // })
}

export default routes