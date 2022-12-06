const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const chaiHttp = require('chai-http');

const app = require ('../../api/app');

const { User } = require('../../database/models');

const {
  ALL_USERS,
  ALL_USERS_RESPONSE,
  INVALID_TOKEN,
  USER_NOT_FOUND,
} = require('./mocks/user.mock.js');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste /users', function() {
  describe('Rota /users/all', function() {
    let chaiHttpResponse;
    
    afterEach(() => {
      sinon.restore();
    });

    it('A rota GET /users/all retorna todos os usuários cadastrados corretamente', async function() {
      sinon.stub(User, 'findAll').resolves(ALL_USERS_RESPONSE);
  
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/all');
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq(ALL_USERS_RESPONSE);
    });
  });

  describe('Rota /users/validate', function() {
    let chaiHttpResponse;

    afterEach(() => {
      sinon.restore();
    });

    it('A rota GET /users/validate retorna mensagem de erro quando token não for enviado na requisição', async function() {
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/validate');
  
      expect(chaiHttpResponse.status).to.be.eq(401);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'Token not found' });
    });

    it('A rota GET /users/validate retorna mensagem de erro quando token for inválido', async function() {
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/validate')
         .set({ "Authorization": INVALID_TOKEN });
  
      expect(chaiHttpResponse.status).to.be.eq(401);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'Expired or invalid token' });
    });

    it('A rota GET /users/validate retorna mensagem de erro quando usuário não encontrado', async function() {
      sinon.stub(jwt, 'verify').returns(USER_NOT_FOUND);

      chaiHttpResponse = await chai
         .request(app)
         .get('/users/validate')
         .set({ "Authorization": 'VALID_TOKEN' });
  
      expect(chaiHttpResponse.status).to.be.eq(401);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'Expired or invalid token' });
    });

    it('A rota GET /users/validate retorna a role do usuário', async function() {
      sinon.stub(jwt, 'verify').returns(ALL_USERS[0]);

      chaiHttpResponse = await chai
         .request(app)
         .get('/users/validate')
         .set({ "Authorization": 'VALID_TOKEN' });
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq({ role: 'admin' });
    });
  });
});