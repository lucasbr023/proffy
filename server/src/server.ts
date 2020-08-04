//yarn add ts-node-dev -D
import express from 'express'

const app = express();

app.use(express.json())
app.get('/users', (request, response) => {
    return response.json('Test')
})

app.listen(3333);//localhost:3333
