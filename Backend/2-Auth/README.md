# Auth

This api provides authentication using Json web tokens

## Install dependencies

```
npm install
```

## Run the app

```
npm run dev
```

## Technologies used
- Node js
- Express js
- Mongoose
- Mongo db
- Json Web Token

# REST API

The REST API to the example app is described below.

## signup

### Request

`POST /auth/signup`

    http://localhost:5000/auth/signup

    {
        "name": "kumar",
        "email": "kumar@gmail.com",
        "password": "kumar",
    }


### Response

    {
        "result": {
            "_id": "635d80b9f15c4139d1014d8a",
            "name": "kumar",
            "email": "kumar@gmail.com",
        },
        "token": "sample-token"
    }

## login

### Request

`POST /auth/login`

    http://localhost:5000/auth/login

    {
        "email": "kumar@gmail.com",
        "password": "kumar"
    }

### Response

    {
        "result": {
            "_id": "635d80b9f15c4139d1014d8a",
            "name": "kumar",
            "email": "kumar@gmail.com",
            "role": "teacher"
        },
        "token": "sample-token"
    }