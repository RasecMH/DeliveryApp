const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const chaiHttp = require('chai-http');

const app = require ('../../api/app');

const User = require('../../database/models/User');

const {
  allUsers,
  allUsersResponse,
} = require('./mocks/user.mock.js');

// const loginService = require('../../api/services/loginService');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste /users', function() {
  describe('Rota /all', function() {
    let chaiHttpResponse;
    
    afterEach(() => {
      sinon.restore();
    });

    it('A rota GET /users/all retorna todos os usuários cadastrados corretamente', async function() {
      sinon.stub(User.findAll).resolves(allUsers);
  
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/all');
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq(allUsersResponse);
    });
  });

  describe('Rota /validate', function() {
    let chaiHttpResponse;
    
    afterEach(() => {
      sinon.restore();
    });

    it('A rota GET /users/validate retorna todos os usuários cadastrados corretamente', async function() {
      sinon.stub(User.findAll).resolves(allUsers);
  
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/all');
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq(allUsersResponse);
    });
  });
});