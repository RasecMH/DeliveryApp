const ALL_USERS = [
  {
    id: 1,
    name: 'Lewis Hamilton',
    email: 'lewishamilton@gmail.com',
    password: '123456',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Michael Schumacher',
    email: 'MichaelSchumacher@gmail.com',
    password: '123456',
    role: 'seller',
  }
]

const ALL_USERS_RESPONSE = [
  {
    id: 1,
    name: 'Lewis Hamilton',
    email: 'lewishamilton@gmail.com',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Michael Schumacher',
    email: 'MichaelSchumacher@gmail.com',
    role: 'user',
  }
];

const INVALID_TOKEN = 'INVALID_TOKEN';

const USER_NOT_FOUND = {
  name: 'NOT FOUND',
  email: 'notFound@found.com',
  password: 'xxxxxxxxxx',
  role: 'admin',
}

const LOGIN_BODY = {
	email: "lewishamilton@gmail.com",
	password: "123456",
}

const INVALID_LOGIN_BODY_1 = {
	password: "123456",
};

const INVALID_LOGIN_BODY_2 = {
  email: "lewishamilton@gmail.com",
};

const INVALID_LOGIN_BODY_3 = {
  email: "Lewis Hamilton",
	password: "123456",
}

const INVALID_LOGIN_BODY_4 = {
  email: "lewishamilton@gmail.com",
	password: 123456,
}

const VALID_USER_REGISTER = {
	name: "Richarlyson",
	email: "pombo.09@email.com",
	password: "09doHex@!",
	role: "customer"
}

const INVALID_USER_REGISTER_1 = {
	email: "pombo.09@email.com",
	password: "09doHex@!",
	role: "customer"
}

const INVALID_USER_REGISTER_2 = {
	name: "Richarlyson",
	password: "09doHex@!",
	role: "customer"
}

const INVALID_USER_REGISTER_3 = {
	name: "Richarlyson",
	email: "pombo.09@email.com",
	role: "customer"
}

const INVALID_USER_REGISTER_4 = {
	name: "Richarlyson",
	email: "pombo.09@email.com",
	password: "09doHex@!",
}

const USER_REGISTER_WITH_INVALID_NAME = {
  name: "Rich",
	email: "pombo.09@email.com",
	password: "09doHex@!",
	role: "customer"
}

const USER_REGISTER_WITH_INVALID_PASSWORD = {
name: "Richarlyson",
email: "pombo.09@email.com",
password: "09doH",
role: "customer"
}

module.exports = {
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
}