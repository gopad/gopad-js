# Gopad.UserApi

All URIs are relative to *http://try.gopad.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendUserToTeam**](UserApi.md#appendUserToTeam) | **POST** /users/{user_id}/teams | Assign a team to user
[**createUser**](UserApi.md#createUser) | **POST** /users | Create a new user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete a specific user
[**deleteUserFromTeam**](UserApi.md#deleteUserFromTeam) | **DELETE** /users/{user_id}/teams | Remove a team from user
[**listUserTeams**](UserApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all teams assigned to user
[**listUsers**](UserApi.md#listUsers) | **GET** /users | Fetch all available users
[**permitUserTeam**](UserApi.md#permitUserTeam) | **PUT** /users/{user_id}/teams | Update team perms for user
[**showUser**](UserApi.md#showUser) | **GET** /users/{user_id} | Fetch a specific user
[**updateUser**](UserApi.md#updateUser) | **PUT** /users/{user_id} | Update a specific user



## appendUserToTeam

> GeneralError appendUserToTeam(userId, userTeam)

Assign a team to user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Gopad.UserTeamParams(); // UserTeamParams | The user team data to assign
apiInstance.appendUserToTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> User createUser(user)

Create a new user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let user = new Gopad.User(); // User | The user data to create
apiInstance.createUser(user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| The user data to create | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> GeneralError deleteUser(userId)

Delete a specific user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.deleteUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserFromTeam

> GeneralError deleteUserFromTeam(userId, userTeam)

Remove a team from user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Gopad.UserTeamParams(); // UserTeamParams | The user team data to delete
apiInstance.deleteUserFromTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listUserTeams

> [TeamUser] listUserTeams(userId)

Fetch all teams assigned to user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.listUserTeams(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**[TeamUser]**](TeamUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> [User] listUsers()

Fetch all available users

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
apiInstance.listUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitUserTeam

> GeneralError permitUserTeam(userId, userTeam)

Update team perms for user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Gopad.UserTeamParams(); // UserTeamParams | The user team data to update
apiInstance.permitUserTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showUser

> User showUser(userId)

Fetch a specific user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.showUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(userId, user)

Update a specific user

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let user = new Gopad.User(); // User | The user data to update
apiInstance.updateUser(userId, user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **user** | [**User**](User.md)| The user data to update | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

