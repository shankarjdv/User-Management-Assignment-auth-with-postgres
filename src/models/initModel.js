 
import { Sequelize } from 'sequelize';
import userModel from './user.js';
import dotenv from 'dotenv';
dotenv.config();
console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL);


console.log("process.env.DATABASE_URL==>",process.env.DATABASE_URL)

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const User = userModel(sequelize);

export const initDB = async () => {
  await sequelize.sync({ force: false }); // Create tables if not existing
  console.log('Database synced.');
};

export { sequelize, User };
