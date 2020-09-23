let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect
chai.use(chaiHttp)

describe('Product API', () => {
    it('Get all products', () => {
        chai.request('http://localhost:8000/productapi')
        .get('/products')
        .then(res => {
            expect(res).to.have.status(200)
        })
        .catch(err => {
            console.log(err.message)
        })
    })
})