const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const chaiHttp = require('chai-http');

const app = require ('../../api/app');

const { Product } = require('../../database/models');


const {
  PRODUCTS_LIST,
} = require('./mocks/products.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste /products', function() {
  let chaiHttpResponse;
  it('A rota products retorna todos os produtos corretamente', async function() {
    sinon.stub(Product, 'findAll').resolves(PRODUCTS_LIST);

    chaiHttpResponse = await chai
         .request(app)
         .get('/products');
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq(PRODUCTS_LIST);
  });
});