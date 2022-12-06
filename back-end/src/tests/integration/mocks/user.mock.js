const allUsers = [
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

const allUsersResponse = [
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
]

module.exports = {
  allUsers,
  allUsersResponse,
}