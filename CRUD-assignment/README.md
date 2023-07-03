# CRUD Assignment

## Setup project
"`<value>` is a place holder,  replace placeholder with required value" 
```
# environment variable to setup before starting server
API_PORT=<prot>
JWT_SECRET_KEY=<yourSecretKey>
MONGODB_URL=<mongodb://hostname:port/db>
```  
```bash
npm i
npm test # test endpoints
#or             
npm start  # run api  server and connect to local mongo server
```
## Endpoints
- /login
    1. login user with payload `{email: <your email id>, password: <your password> }`
    2. required field `email` and `password`

- /register
    1. register user with payload `{name: <your name>, email: <your email>, password: <your password}`
    2. unique field `email` 
    3. required field `email`, `password`
    4. encrypt password automatically

## Packages used
1. express (api server)
2. mongoose (mongodb framework)
3. bcrypt (password encryption)
4. jsonwebtoken (send access token for authorization and access control)
5. dotenv (setup environment variables)
### Dev dependency
1. mocha (manage test cases)
2. chai (test api logic)
3. chai-http (test api request)
4. nodemon (tracking file changes)
