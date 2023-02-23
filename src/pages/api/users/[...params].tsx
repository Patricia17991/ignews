import { NextApiRequest, NextApiResponse } from 'next'


export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query
  
    const users = [
        { id: 1, name: 'Diego'},
        { id: 2, name: 'Patrícia'},
        { id: 3, name: 'Djanete'},
    ]
//esta é uma rota puramente back-end, tudo aqui não é acessível ao cliente final
    return response.json(users)
//todas as apis routes são executadas usando o conceito de serveless
}
