require('dotenv').config()
import express from 'express'
import cors from 'cors'

import pool from './db' // postgres database
import routes from './routes'
// import deserializeUser from './middleware/deserializeUser'

//* creates an express app
const port = process.env.PORT || 4000
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and HTTP authentication
    optionsSuccessStatus: 204, // Set the status for successful preflight requests
}))

//* Middlewares
// checks to see if the user is a has a valid accessToken or refreshToken
// app.use(deserializeUser);


// app.listen(port, () => {
//     console.log(`now listening to request from port ${port}`)
// })


// connect to the database and then allow express to receive request
pool.connect((err: any, client: any, release: () => void) => {
    if (err) {
        return console.log('Error connecting to the postgresSQL database, because: ', err.stack)
    }

    app.listen(port, () => {
        console.log(`now listening to request from port ${port}`)
        routes(app)
    })

    release()
})