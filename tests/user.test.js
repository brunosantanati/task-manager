const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Bruno',
        email: 'bruno.santana.ti@gmail.com',
        password: 'MyPass777!'
    }).expect(201)
})