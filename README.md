# Starter api

## Installation

Create .env file with MONGODB_URI and PORT (if necessaryi) variables. Look in the .env.example for a hint. Then run below commands for installing npm dependencies and running server in development mode.

```bash
    npm install 
    npm run dev
```

If you want to run server for production? then run following command.

```bash
    npm run start
```

## API Reference

#### Just say "Hello!"

```http
  GET /hello
```

#### Create table

```http
  POST /table
  ```
  ```
  Request body eg: 
  {
    "capacity": 4,
  }
```