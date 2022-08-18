<h1 align="center">Welcome to Typeorm CRUD example with postgres 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Nodejs API with postgres an typeorm

## Clone 
```
git clone https://github.com/Kriz1618/typeorm-crud-example.git
cd typeorm-crud-example
```
## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

## Author

👤 **Kriz**

* Github: [@Kriz1618](https://github.com/Kriz1618)

## Steps
* npm init -y
* npm i -D typescript ts-node-dev @types/express @types/morgan @types/cors
* npm i @types/node --save-dev
* npm i express
* npm i pg --save
* npx tsc --init
* Create database `docker run --name postgres1 -p 5432:5432 -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=ts-database -d postgres`
* Check container `docker exec -it "container_id" bash`
* Login in the database `psql -U posgres`
* List databases `\l`
* Close database connection `\q`
* To test the API install the extension `REST Client`
* Create the file `requests/users.http` and create the requests

**[PSQL docs](https://www.geeksforgeeks.org/postgresql-drop-table/?ref=leftbar-rightbar)**