# wallet-app-backend

## Install
 
npm init -y

## To install dependencies

npm install <package name>
or
Refer the documentation in npm

## Running the project

npm i, after installing packages run hte below command.

npm start

# REST API

The REST API to the wallet app is decscribed below.

## Setup new wallet

### Request

`POST /setup`

### Response
```
{
    "id": "63a5bb19af8f1daabd0f9db4",
    "name": "New",
    "date": "2022-12-23T14:28:41.376Z"
    "balance" : 10
}
```

### Status Code
> 200

## Get Existing wallet

### Request

`GET /wallet/:walletId`

### Response
```
{
    "id": "63a5bb19af8f1daabd0f9db4",
    "balance": 259,
    "name": "New",
    "date": "2022-12-23T14:28:41.376Z"
}
```

### Status Code
> 200

## Create transaction in wallet

### Request

`POST /transact/:walletId`

### Response
```
{
    "balance": 259,
    "transactionId": "63a5bfd6c1bc595825bd4601"
}
```

### Status Code
> 200

## Get transaction list

### Request

`GET /transactions/:walletId/:skip?/:limit?`

### Response
```
{
    "walletId": "63a5bb19af8f1daabd0f9db4",
    "balance": 259,
    "transactions": [
        {
            "amount": 10,
            "description": "one more another",
            "date": "2022-12-23T14:29:16.284Z",
            "type": "CREDIT",
            "_id": "63a5bb3caf8f1daabd0f9db8"
        },
        {
            "amount": -10,
            "description": "one more another",
            "date": "2022-12-23T14:29:28.291Z",
            "type": "DEBIT",
            "_id": "63a5bb48af8f1daabd0f9dba"
        }
    ]
}
```

### Status Code
> 200