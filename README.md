# myshows-api

[![Dependencies](https://david-dm.org/dotaxe/myshows-api.svg)](https://david-dm.org/dotaxe/myshows-api)
[![GitHub license](https://img.shields.io/github/license/dotaxe/myshows-api.svg)](https://github.com/dotaxe/myshows-api/blob/master/LICENSE)

## Overview
Simple API wrapper for logging into and interacting with [MyShows](https://myshows.me/) website.

#### Supported versions
* [MyShows.me API v2.0](https://api.myshows.me/shared/doc/) - based on JSON-RPC 2.0 with OAuth 2.0 as authorization. In order to use this module you need to obtain OAuth AppID. If you don't have one you can request in here api@myshows.me.

## Getting started

To install run

```
$ npm install myshows-api
```

Simple example of using generic method: 

```javascript
const MyShows = require('myshows-api')

const credentials = {
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
  username: 'your_username',
  password: 'your_password',
}

async function example() {
  const myshows = new MyShows(credentials)

  const user = await myshows.generic('profile.Get', {
    login: 'Aikenov',
  }) // profile.Get API method does not require logging in

  await myshows.login() // after logging in you can use API methods that require authorization

  const list = await myshows.generic('lists.Shows', {
    list: 'favorites',
  }) // lists.Shows API method does require logging in

  console.log(user)
  console.log(list)
}

example()

```

## API Documentation

See the [MyShows.me API](https://api.myshows.me/) page to start exploring documentation.
