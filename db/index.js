const { Client } = require('pg')

// const client = new Client({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS
//   host: process.env.DB_HOST,
//   port: 5432,
//   database: process.env.DB_DATABASE,
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
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
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
