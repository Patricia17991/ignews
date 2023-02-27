import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],
    //usaremos a chave se formos colocar o projeto em produção
    callbacks: {
        async SignIn(user, account, profile) {
         //fazendso uma inserção no banco de dados
          const { email } = user

          try {
            await fauna.query(
               q.If(
                 q.Not(
                   q.Exists(
                     q.Match(
                        q.Index('user_by_email'),
                        q.Casefold(user.email)
                  )
                 )
                ),
                q.Create(
                    q.Collection('users'),
                    { data: { email }}
                )
               )
              )

            return true
          } catch {
            return false
          }
        },
    }
})
