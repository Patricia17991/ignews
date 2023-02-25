import { Client } from 'faunadb'


export const fauna = new Client({
    secret: process.env.FAUNADB_KEY //isso dá o acesso aobanco de dados
})
