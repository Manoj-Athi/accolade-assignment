# CRUD operations

This api allows us to do CRUD operations on mongodb atlas using a restful api

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

# REST API

The REST API to the example app is described below.

## Create a record

### Request

`POST /patients/create`

    http://localhost:5000/patients/create

    { 
        "name": "manoj", 
        "email": "manoj@gmail.com",
        "phoneNo": "1234567890", 
        "address": {
            "street": "xyz", 
            "city": "abc", 
            "state": "pqr", 
            "pincode": "123456"
        }
    } 


### Response

    {
        "_id": "635d80b9f15c4139d1014d8a",
        "name": "manoj", 
        "email": "manoj@gmail.com",
        "phoneNo": "1234567890", 
        "address": {
            "street": "xyz", 
            "city": "abc", 
            "state": "pqr", 
            "pincode": "123456"
        }
    }

## Read all record

### Request

`GET /patients/read`

    http://localhost:5000/patients/read

### Response

    [
        {
            "_id": "635d80b9f15c4139d1014d8a",
            "name": "manoj", 
            "email": "manoj@gmail.com",
            "phoneNo": "1234567890", 
            "address": {
                "street": "xyz", 
                "city": "abc", 
                "state": "pqr", 
                "pincode": "123456"
            }
        },
        {
            "_id": "635d80b9f15c4139d1014d8a",
            "name": "kumar", 
            "email": "manoj@gmail.com",
            "phoneNo": "1234567890", 
            "address": {
                "street": "xyz", 
                "city": "abc", 
                "state": "pqr", 
                "pincode": "123456"
            }
        }
    ]

## Update a record

### Request

`PUT /patients/update/:id`

    http://localhost:5000/patients/update/635d80b9f15c4139d1014d8a

    {
        "_id": "635d80b9f15c4139d1014d8a",
        "name": "kumar",
        "email": "manoj@gmail.com",
        "phoneNo": "1234567899", 
        "address": {
            "street": "xyz", 
            "city": "abc", 
            "state": "pqr", 
            "pincode": "123456"
        }
    }

## Delete a record

### Request

`DELETE /patients/delete/:id`

    http://localhost:5000/patients/delete/635d80b9f15c4139d1014d8a