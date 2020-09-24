let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect
chai.use(chaiHttp)

describe('Product API', () => {
    it('Get all products', () => {
        return chai.request('http://localhost:8000/productapi')
        .get('/products')
        .then(res => {
            expect(res).to.have.status(200)
        })
        .catch(err => {
            throw err
        })
    })

    it('Create a product', () => {
        return chai.request('http://localhost:8000/productapi')
        .post('/products')
        .send({"name":"Motorola", "price":120})
        .then(res => {
            expect(res).to.have.status(200)
        })
        .catch(err => {
            throw err
        })
    })

    it('Get a single product', () => {
        return chai.request('http://localhost:8000/productapi')
        .get('/products/5f6b72f587f7e167465edcc3')
        .then(res => {
            expect(res).to.have.status(200)
        })
        .catch(err => {
            throw err
        })
    })
})