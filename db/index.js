const { Client } = require('pg')

// const client = new Client({
//   user: 'ssrbworld',
//   password: 'shishiron',
//   host: '178.70.88.224',
//   port: 5432,
//   database: 'ssrbworld',
//   ssl: true
// });
// client.connect()


// const query = {
//   name: 'fetch-user',
//   text: 'SELECT * FROM username WHERE id = $1',
//   values: [1],
// }

// client
//   .query(query)
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))


const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: "ssrbworld",
  username: "ssrbworld",
  password: "shishiron",
  host: "178.70.88.224",
  port: 5432,
  dialect: "postgres",
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

sequelize.authenticate();
