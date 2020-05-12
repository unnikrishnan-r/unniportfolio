const request = require('supertest')
const app = require('../server')
describe('get Endpoints', () => {
  it('Get Projects from DB', async () => {
    const res = await request(app)
      .get('/api/projects')
    expect(res.statusCode).toEqual(200)
    // expect(res).toHaveProperty('projectList')
  });

  it('Check when no API route matches',async () => {
    const res = await request(app)
    .get('/abcd/projects')
  expect(res.statusCode).toEqual(404)

  })
})