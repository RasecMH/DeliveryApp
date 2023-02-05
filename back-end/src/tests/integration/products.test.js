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

    sinon.restore();
  });

  it('Retorna a mensagem de erro caso algo dê errado', async function (){
    sinon.stub(Product, 'findAll').throws(new Error('any error'));
    chaiHttpResponse = await chai
      .request(app)
      .get('/products');

    expect(chaiHttpResponse.status).to.be.eq(500);
    expect(chaiHttpResponse.body.message).to.be.eq('any error');
  });

  it('Retorna um produto caso a requisição seja feita com um produto que exista', async function() {
    sinon.stub(Product, 'findOne').resolves(PRODUCTS_LIST[0]);

    chaiHttpResponse = await chai
         .request(app)
         .get('/products/1');
  
     expect(chaiHttpResponse.status).to.be.eq(200);
     expect(chaiHttpResponse.body).to.be.deep.eq(PRODUCTS_LIST[0]);

    sinon.restore();
  });

  it('Retorna um erro caso a requisição seja feita com um produto que não exista', async function() {
    sinon.stub(Product, 'findOne').resolves(null);

    chaiHttpResponse = await chai
         .request(app)
         .get('/products/9999');
  
     expect(chaiHttpResponse.status).to.be.eq(404);
     expect(chaiHttpResponse.body.message).to.be.eq('Product not found');

    sinon.restore();
  });
});