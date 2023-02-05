const sinon = require("sinon");
const chai = require("chai");
const jwt = require("jsonwebtoken");
const chaiHttp = require("chai-http");

const app = require("../../api/app");

const { Sale } = require("../../database/models");

const {
  SALES_LIST,
  SALE_RESPONSE,
  SALE_TO_CREATE,
  RESPONSE_SALE_CREATED,
} = require("./mocks/sales.mock");

chai.use(chaiHttp);

const { expect } = chai;

describe("Teste /sales", function () {
  afterEach(() => {
    sinon.restore();
  });

  it("Retorna todas as vendas corretamente", async function () {
    sinon.stub(Sale, "findAll").resolves(SALES_LIST);

    chaiHttpResponse = await chai.request(app).get("/sales");

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(SALES_LIST);
  });

  it("Retorna um erro caso algo dê errado", async function () {
    sinon.stub(Sale, "findAll").throws(new Error("any error"));

    chaiHttpResponse = await chai.request(app).get("/sales");

    expect(chaiHttpResponse.status).to.be.eq(500);
    expect(chaiHttpResponse.body.message).to.be.eq("any error");
  });

  it("Retorna uma venda pelo id caso exista", async function () {
    chaiHttpResponse = await chai.request(app).get("/sales/1");

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(SALE_RESPONSE);
  });

  it("Retorna uma mensagem de erro se a venda não existir", async function () {
    chaiHttpResponse = await chai.request(app).get("/sales/9999");

    expect(chaiHttpResponse.status).to.be.eq(404);
    expect(chaiHttpResponse.body.message).to.be.eq("Sale not found");
  });

  it("Cria uma nova venda corretamente", async function () {
    chaiHttpResponse = await chai
      .request(app)
      .post("/sales/create")
      .send(SALE_TO_CREATE);

    expect(chaiHttpResponse.status).to.be.eq(201);
    expect(chaiHttpResponse.body).to.have.property(
      "userId",
      RESPONSE_SALE_CREATED.userId
    );
    expect(chaiHttpResponse.body).to.have.property(
      "sellerId",
      RESPONSE_SALE_CREATED.sellerId
    );
    expect(chaiHttpResponse.body).to.have.property(
      "totalPrice",
      RESPONSE_SALE_CREATED.totalPrice
    );
    expect(chaiHttpResponse.body).to.have.property(
      "deliveryAddress",
      RESPONSE_SALE_CREATED.deliveryAddress
    );
    expect(chaiHttpResponse.body).to.have.property(
      "deliveryNumber",
      RESPONSE_SALE_CREATED.deliveryNumber
    );
    expect(chaiHttpResponse.body).to.have.property(
      "status",
      RESPONSE_SALE_CREATED.status
    );
    expect(chaiHttpResponse.body).to.have.property("saleDate");
    expect(chaiHttpResponse.body.salesProducts).to.have.deep.eq(
      RESPONSE_SALE_CREATED.salesProducts
    );
  });

  it("Retorna uma mensagem de erro caso aconteça algo errado em criar nova venda", async function () {
    sinon.stub(Sale, "create").throws(new Error("any error"));

    chaiHttpResponse = await chai
      .request(app)
      .post("/sales/create")
      .send(SALE_TO_CREATE);

    expect(chaiHttpResponse.status).to.be.eq(500);
    expect(chaiHttpResponse.body.message).to.be.eq("any error");
  });

  it("Atualiza uma venda corretamente", async function () {
    chaiHttpResponse = await chai.request(app).put("/sales/status/att").send({
      id: 3,
      status: "Entregue",
    });

    expect(chaiHttpResponse.body).to.have.property("status", "Entregue");

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.have.property(
      "userId",
      RESPONSE_SALE_CREATED.userId
    );
    expect(chaiHttpResponse.body).to.have.property(
      "sellerId",
      RESPONSE_SALE_CREATED.sellerId
    );
    expect(chaiHttpResponse.body).to.have.property(
      "totalPrice",
      RESPONSE_SALE_CREATED.totalPrice
    );
    expect(chaiHttpResponse.body).to.have.property(
      "deliveryAddress",
      RESPONSE_SALE_CREATED.deliveryAddress
    );
    expect(chaiHttpResponse.body).to.have.property(
      "deliveryNumber",
      RESPONSE_SALE_CREATED.deliveryNumber
    );
    expect(chaiHttpResponse.body).to.have.property("saleDate");
    expect(chaiHttpResponse.body.salesProducts).to.have.deep.eq(
      RESPONSE_SALE_CREATED.salesProducts
    );
  });

  it("Não é possível atualizar uma venda que não existe", async function () {
    chaiHttpResponse = await chai.request(app).put("/sales/status/att").send({
      id: 9999,
      status: "Entregue",
    });

    expect(chaiHttpResponse.status).to.be.eq(404);
    expect(chaiHttpResponse.body.message).to.be.eq("Sale not found");
  });
});
