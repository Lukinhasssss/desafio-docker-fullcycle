import express from 'express'
import { faker } from '@faker-js/faker'
import { createConnection } from 'mysql'

const app = express()

const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const connection = createConnection(config)

app.get('/', (request, response) => {
  const randomName = faker.name.findName()

  connection.query(`INSERT INTO people (nome) VALUES ('${randomName}')`)

  connection.query(`SELECT nome FROM people`, (error, results, fields) => {
    response.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Server is running on port:', port)
})