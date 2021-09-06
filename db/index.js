require('dotenv').config();
const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");

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
  logging: false,
});


const Country = sequelize.define('country', {
  location: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  user_count: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
});

const Tweet = sequelize.define('tweet', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  tweet: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
}, {
  timestamps: false
});

Country.hasMany(Tweet);
Tweet.belongsTo(Country);

Country.sync();
Tweet.sync();

exports.Country = Country;
exports.Tweet = Tweet;
