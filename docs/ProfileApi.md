# Gopad.ProfileApi

All URIs are relative to *http://http:/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**showProfile**](ProfileApi.md#showProfile) | **GET** /profile/self | Retrieve an unlimited auth token
[**tokenProfile**](ProfileApi.md#tokenProfile) | **GET** /profile/token | Retrieve an unlimited auth token
[**updateProfile**](ProfileApi.md#updateProfile) | **PUT** /profile/self | Retrieve an unlimited auth token



## showProfile

> Profile showProfile()

Retrieve an unlimited auth token

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.ProfileApi();
apiInstance.showProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenProfile

> AuthToken tokenProfile()

Retrieve an unlimited auth token

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.ProfileApi();
apiInstance.tokenProfile().then((data) => {
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


## updateProfile

> Profile updateProfile(profile)

Retrieve an unlimited auth token

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.ProfileApi();
let profile = new Gopad.Profile(); // Profile | The profile data to update
apiInstance.updateProfile(profile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile** | [**Profile**](Profile.md)| The profile data to update | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

