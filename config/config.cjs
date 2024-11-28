require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "user_management",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "admin",
    database: "user_management_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  }
};
