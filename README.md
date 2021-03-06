# Gopad: SDK for Javascript

[![Build Status](https://cloud.drone.io/api/badges/gopad/gopad-js/status.svg)](https://cloud.drone.io/gopad/gopad-js)
[![Join the Matrix chat at https://matrix.to/#/#gopad:matrix.org](https://img.shields.io/badge/matrix-%23gopad%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#gopad:matrix.org)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7ece04b5a0c94808b467f0c46e445194)](https://www.codacy.com/app/gopad/gopad-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gopad/gopad-js&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/gopad.svg)](https://badge.fury.io/js/gopad)

**This project is under heavy development, it's not in a working state yet!**

This repository will provide a client SDK for Javascript. This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0-alpha1
- Package version: 1.0.0-alpha1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen


## Installation


### Installation with NPM

If you want to use one of the versions released via NPM you just need to execute the following command within your project directory, after that you can import it as other libraries:

```bash
npm install --save-dev gopad
```


### Installation with Git

If you want to use an unreleased version hosted on our GitHub repository you can execute the folling command within your project directory, after that you can import it as other libraries:

```bash
npm install --save-dev gopad/gopad-js
```


### Browserify configuration

The SDK also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following command (assuming *main.js* is your entry file), then include `bundle.js` in the HTML pages:

```bash
browserify main.js > bundle.js
```


### Webpack configuration

Using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module", most certainly you should disable AMD loader. Add/merge the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```


## Getting Started

Please follow the [installation](#installation) instructions and then run the following code:

```javascript
var Gopad = require('gopad');


var api = new Gopad.AuthApi()
var authLogin = new Gopad.AuthLogin(); // {AuthLogin} The credentials to authenticate
api.loginUser(authLogin).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for endpoints

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Gopad.AuthApi* | [**loginUser**](docs/AuthApi.md#loginUser) | **POST** /auth/login | Authenticate an user by credentials
*Gopad.AuthApi* | [**refreshAuth**](docs/AuthApi.md#refreshAuth) | **GET** /auth/refresh | Refresh an auth token before it expires
*Gopad.AuthApi* | [**verifyAuth**](docs/AuthApi.md#verifyAuth) | **GET** /auth/verify/{token} | Verify validity for an authentication token
*Gopad.ProfileApi* | [**showProfile**](docs/ProfileApi.md#showProfile) | **GET** /profile/self | Retrieve an unlimited auth token
*Gopad.ProfileApi* | [**tokenProfile**](docs/ProfileApi.md#tokenProfile) | **GET** /profile/token | Retrieve an unlimited auth token
*Gopad.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **PUT** /profile/self | Retrieve an unlimited auth token
*Gopad.TeamApi* | [**appendTeamToUser**](docs/TeamApi.md#appendTeamToUser) | **POST** /teams/{team_id}/users | Assign a user to team
*Gopad.TeamApi* | [**createTeam**](docs/TeamApi.md#createTeam) | **POST** /teams | Create a new team
*Gopad.TeamApi* | [**deleteTeam**](docs/TeamApi.md#deleteTeam) | **DELETE** /teams/{team_id} | Delete a specific team
*Gopad.TeamApi* | [**deleteTeamFromUser**](docs/TeamApi.md#deleteTeamFromUser) | **DELETE** /teams/{team_id}/users | Remove a user from team
*Gopad.TeamApi* | [**listTeamUsers**](docs/TeamApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all users assigned to team
*Gopad.TeamApi* | [**listTeams**](docs/TeamApi.md#listTeams) | **GET** /teams | Fetch all available teams
*Gopad.TeamApi* | [**permitTeamUser**](docs/TeamApi.md#permitTeamUser) | **PUT** /teams/{team_id}/users | Update user perms for team
*Gopad.TeamApi* | [**showTeam**](docs/TeamApi.md#showTeam) | **GET** /teams/{team_id} | Fetch a specific team
*Gopad.TeamApi* | [**updateTeam**](docs/TeamApi.md#updateTeam) | **PUT** /teams/{team_id} | Update a specific team
*Gopad.UserApi* | [**appendUserToTeam**](docs/UserApi.md#appendUserToTeam) | **POST** /users/{user_id}/teams | Assign a team to user
*Gopad.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /users | Create a new user
*Gopad.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete a specific user
*Gopad.UserApi* | [**deleteUserFromTeam**](docs/UserApi.md#deleteUserFromTeam) | **DELETE** /users/{user_id}/teams | Remove a team from user
*Gopad.UserApi* | [**listUserTeams**](docs/UserApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all teams assigned to user
*Gopad.UserApi* | [**listUsers**](docs/UserApi.md#listUsers) | **GET** /users | Fetch all available users
*Gopad.UserApi* | [**permitUserTeam**](docs/UserApi.md#permitUserTeam) | **PUT** /users/{user_id}/teams | Update team perms for user
*Gopad.UserApi* | [**showUser**](docs/UserApi.md#showUser) | **GET** /users/{user_id} | Fetch a specific user
*Gopad.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /users/{user_id} | Update a specific user


## Documentation for models

 - [Gopad.AuthLogin](docs/AuthLogin.md)
 - [Gopad.AuthToken](docs/AuthToken.md)
 - [Gopad.AuthVerify](docs/AuthVerify.md)
 - [Gopad.GeneralError](docs/GeneralError.md)
 - [Gopad.Profile](docs/Profile.md)
 - [Gopad.Team](docs/Team.md)
 - [Gopad.TeamUser](docs/TeamUser.md)
 - [Gopad.TeamUserParams](docs/TeamUserParams.md)
 - [Gopad.User](docs/User.md)
 - [Gopad.UserTeamParams](docs/UserTeamParams.md)
 - [Gopad.ValidationError](docs/ValidationError.md)
 - [Gopad.ValidationErrorErrors](docs/ValidationErrorErrors.md)


## Documentation for authorization



### BasicAuth

- **Type**: HTTP basic authentication



### HeaderAuth


- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header



## Security

If you find a security issue please contact gopad@webhippie.de first.


## Contributing

Fork -> Patch -> Push -> Pull Request


## Authors

* [Thomas Boerger](https://github.com/tboerger)


## License

Apache-2.0


## Copyright

```
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```
