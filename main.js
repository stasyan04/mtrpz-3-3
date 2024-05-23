import fastify from 'fastify'

const port = 3000

const app = fastify()

app.get('/', async (request, reply) => {
    return { content: 'Hello World!' }
})

app.get('/random', async (request, reply) => {
    const min = request.params.min || 1
    const max = request.params.max || 6
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return { value: result }
})

await app.listen({ port })
console.log(`Server listening on port http://localhost:${port}`)