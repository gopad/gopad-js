# Gopad.AuthApi

All URIs are relative to *http://http:/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUser**](AuthApi.md#loginUser) | **POST** /auth/login | Authenticate an user by credentials
[**refreshAuth**](AuthApi.md#refreshAuth) | **GET** /auth/refresh | Refresh an auth token before it expires
[**verifyAuth**](AuthApi.md#verifyAuth) | **GET** /auth/verify/{token} | Verify validity for an authentication token



## loginUser

> AuthToken loginUser(auth)

Authenticate an user by credentials

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.AuthApi();
let auth = new Gopad.InlineObject(); // InlineObject | 
apiInstance.loginUser(auth).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshAuth

> AuthToken refreshAuth()

Refresh an auth token before it expires

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.AuthApi();
apiInstance.refreshAuth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyAuth

> AuthVerify verifyAuth(token)

Verify validity for an authentication token

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.AuthApi();
let token = "token_example"; // String | A token that have to be checked
apiInstance.verifyAuth(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| A token that have to be checked | 

### Return type

[**AuthVerify**](AuthVerify.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

