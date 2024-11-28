# User-Management-Assignment-auth-with-postgres
to install dependencies run "npm install"
run this project using "npm start" command
---------------------------------------------------------
Pre-requisites
Node.js: v18 or later
PostgreSQL: Installed and running
npm: Node package manager (comes with Node.js)

-----------------------------------------------------------
Database Migration
To create the necessary tables, run the following command:

npx sequelize-cli db:migrate
This will execute the migrations in the migrations/ directory and create the Users table.

----------------------------------------------------------

Available APIs
1. User Management
Register a User (POST /api/users/register)
Login (POST /api/users/login)
Get User by ID (GET /api/users/:id)
Update User (PUT /api/users/:id)
Delete/Disable User (DELETE /api/users/:id)
2. Role Management
Assign Roles to User use Update User (PUT /api/users/:id) API
List Users with Filters (GET /api/users?filter=value)

-------------------------------------------------------------------

Important Notes
Sequelize CLI is used for managing database migrations.
JWT is used for user authentication.
Environment variables are managed using .env.

----------------------------------------------------------------