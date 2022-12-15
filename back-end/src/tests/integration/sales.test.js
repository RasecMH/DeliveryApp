const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const chaiHttp = require('chai-http');

const app = require ('../../api/app');

const { Sale } = require('../../database/models');


const {
  SALES_LIST,
} = require('./mocks/sales.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste /sales', function() {
  describe('Métodos GET', function() {
    let chaiHttpResponse;

    afterEach(() => {
      sinon.restore();
    });

    it('Retorna todas as vendas corretamente', async function() {
      sinon.stub(Sale, 'findAll').resolves(SALES_LIST);
  
      chaiHttpResponse = await chai
           .request(app)
           .get('/sales');
    
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(SALES_LIST);
    });

    it('Retorna todas as vendas corretamente', async function() {
      sinon.stub(Sale, 'findAll').resolves(SALES_LIST);
  
      chaiHttpResponse = await chai
           .request(app)
           .get('/sales');
    
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(SALES_LIST);
    });
  });
});