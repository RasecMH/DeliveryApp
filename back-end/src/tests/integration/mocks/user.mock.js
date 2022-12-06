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
    role: 'user',
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

module.exports = {
  ALL_USERS,
  ALL_USERS_RESPONSE,
  INVALID_TOKEN,
  USER_NOT_FOUND,
}