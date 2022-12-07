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
  LOGIN_BODY,
  INVALID_LOGIN_BODY_1,
  INVALID_LOGIN_BODY_2,
  INVALID_LOGIN_BODY_3,
  INVALID_LOGIN_BODY_4,
  VALID_USER_REGISTER,
  INVALID_USER_REGISTER_1,
  INVALID_USER_REGISTER_2,
  INVALID_USER_REGISTER_3,
  INVALID_USER_REGISTER_4,
  USER_REGISTER_WITH_INVALID_NAME,
  USER_REGISTER_WITH_INVALID_PASSWORD,
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

    it('A rota GET /users/all/sellers retorna todos os vendedores cadastrados', async function() {
      sinon.stub(User, 'findAll').resolves([ALL_USERS_RESPONSE[1]]);
  
      chaiHttpResponse = await chai
         .request(app)
         .get('/users/all/sellers');
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq([ALL_USERS_RESPONSE[1]]);
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
      sinon.stub(User, 'findOne').returns(ALL_USERS[0]);

      chaiHttpResponse = await chai
         .request(app)
         .get('/users/validate')
         .set({ "Authorization": 'VALID_TOKEN' });
  
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.deep.eq({ role: 'admin' });
    });
  });

  describe('Rota /users/login', function() {
    let chaiHttpResponse;
    
    afterEach(() => {
      sinon.restore();
    });

    it('A rota POST /users/login retorna um erro caso o corpo da requisição não for preenchido corretamente', async function() {
      chaiHttpResponse = await chai
         .request(app)
         .post('/users/login')
         .send(INVALID_LOGIN_BODY_1);
      
      expect(chaiHttpResponse.status).to.be.eq(422);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'field invalid' });

      chaiHttpResponse = await chai
         .request(app)
         .post('/users/login')
         .send(INVALID_LOGIN_BODY_2);
      
      expect(chaiHttpResponse.status).to.be.eq(422);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'field invalid' });

      chaiHttpResponse = await chai
         .request(app)
         .post('/users/login')
         .send(INVALID_LOGIN_BODY_3);
      
      expect(chaiHttpResponse.status).to.be.eq(422);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'field invalid' });

      chaiHttpResponse = await chai
         .request(app)
         .post('/users/login')
         .send(INVALID_LOGIN_BODY_4);
      
      expect(chaiHttpResponse.status).to.be.eq(422);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'field invalid' });

      
    });

    it('Testa resposta com e-mail ou senha inválida', async function (){
      sinon.stub(User, 'findOne').resolves(null);

      chaiHttpResponse = await chai
      .request(app)
      .post('/users/login')
      .send(LOGIN_BODY);

      expect(chaiHttpResponse.status).to.be.eq(404);
      expect(chaiHttpResponse.body).to.be.deep.eq({ message: "Incorrect username or password" });
    });

    it('Testa resposta se login foi feito corretamente', async function (){
      const userTest = {
        name: ALL_USERS[0].name,
        email: ALL_USERS[0].email,
        role: ALL_USERS[0].role,
      };

      sinon.stub(User, 'findOne').resolves(userTest);

      chaiHttpResponse = await chai
      .request(app)
      .post('/users/login')
      .send(LOGIN_BODY);

      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.have.property('name', userTest.name);
      expect(chaiHttpResponse.body).to.have.property('email', userTest.email);
      expect(chaiHttpResponse.body).to.have.property('role', userTest.role);
      expect(chaiHttpResponse.body).to.have.property('token');
      expect(chaiHttpResponse.body).to.not.have.property('password');
    });
  });

  describe('Rota /users/register', function (){
    let chaiHttpResponse;
    
    afterEach(() => {
      sinon.restore();
    });

    it('A rota POST /users/register retorna um erro caso o corpo da requisição não for preenchido corretamente', async function (){
      chaiHttpResponse = await Promise.all([
        INVALID_USER_REGISTER_1,
        INVALID_USER_REGISTER_2,
        INVALID_USER_REGISTER_3,
        INVALID_USER_REGISTER_4,
      ].map((body) => chai
        .request(app)
        .post('/users/register')
        .send(body)
      ));

      chaiHttpResponse.forEach((res) => {
        expect(res.status).to.be.eq(422);
        expect(res.body).to.be.deep.eq({ message: "field invalid" });
      });
    });

    it('Um novo usuário precisa ter uma SENHA com PELO MENOS 6 caracteres', async function (){
      chaiHttpResponse = await chai
        .request(app)
        .post('/users/register')
        .send(USER_REGISTER_WITH_INVALID_PASSWORD);


        expect(chaiHttpResponse.status).to.be.eq(422);
        expect(chaiHttpResponse.body).to.be.deep.eq({ message: "field invalid" });
    });

    it('Um novo usuário precisa ter um NOME com PELO MENOS 8 caracteres', async function (){
      chaiHttpResponse = await chai
        .request(app)
        .post('/users/register')
        .send(USER_REGISTER_WITH_INVALID_NAME);


        expect(chaiHttpResponse.status).to.be.eq(422);
        expect(chaiHttpResponse.body).to.be.deep.eq({ message: "field invalid" });
    });

    it('Não é possível registrar um usuário já existente', async function (){
      sinon.stub(User, 'findOne').resolves(VALID_USER_REGISTER);
      sinon.stub(User, 'create').resolves(VALID_USER_REGISTER);

      chaiHttpResponse = await chai
        .request(app)
        .post('/users/register')
        .send(VALID_USER_REGISTER);
    
        expect(chaiHttpResponse.status).to.be.eq(409);
        expect(chaiHttpResponse.body).to.be.deep.eq({ message: "user not available" });
    });

    it('Testa resposta se registro de usuário foi feito corretamente', async function (){
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(VALID_USER_REGISTER);

      chaiHttpResponse = await chai
        .request(app)
        .post('/users/register')
        .send(VALID_USER_REGISTER);
    
      expect(chaiHttpResponse.statusCode).to.eq(201);
      expect(chaiHttpResponse.body).to.have.property('name', VALID_USER_REGISTER.name);
      expect(chaiHttpResponse.body).to.have.property('email', VALID_USER_REGISTER.email);
      expect(chaiHttpResponse.body).to.have.property('role', VALID_USER_REGISTER.role);
      expect(chaiHttpResponse.body).to.have.property('token');
      expect(chaiHttpResponse.body).to.not.have.property('password');
    });
  });
});