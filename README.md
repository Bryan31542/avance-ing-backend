# Instructions

To run the backend is required to use **PostgreSQL**. First we need to pull an image using **Docker** with the following command:

### Postgres 

```
docker pull postgres
```

Now that we already have the PostgreSQL image we can create a container. The name will be `postgres-db` will be running at the port `5432:5432` with username `bryan` and password `random123` and the database will be named `avance`.

### Creating a Postgres container 

```
docker run --name postgres-db -p 5432:5432 -e POSTGRES_USER=bryan -e POSTGRES_PASSWORD=random123 -e POSTGRES_DB=avance -d postgres
```

### Add the enviroments variables 

In the root folder we have to create a file name `.env` and set the following information. Contains the port on which it will be running and some secrets keys to encode the token, and the database url as well.

```
PORT=8080
JWT_SECRET='my-secret-key'
ENCODING_SECRET='my-secret-code'

# This was inserted by prisma init:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL='postgres://bryan:random123@localhost:5432/avance'
```

### Installing dependencies

Run the following command to install all the required packages to use our backend

```
npm install
```

### Running migrations 

Now we have to run the following command so we can create the tables of our database

```
npm run migrate
```

### Running seed

We are almost done, the next step is to run a script that will create a `role` and `user`. So we can access to our system with that information. 

- username: admin
- password: admin


```
npx prisma db seed
```



### Running the backend

And finally run the backend using:

```
npm run dev
```
--- 

## NOTES 

Only the following roles are allowed to be created:

```
export enum RoleName {
  Admin = 'Admin',
  User = 'User',
  Manager = 'Manager',
  Developer = 'Developer',
  Designer = 'Designer',
  Tester = 'Tester',
  DevOps = 'DevOps'
}
```
