# AuthApi

All URIs are relative to *https://try.gopad.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**callbackProvider**](#callbackprovider) | **GET** /auth/{provider}/callback | Callback to parse the defined provider|
|[**listProviders**](#listproviders) | **GET** /auth/providers | Fetch the available auth providers|
|[**loginAuth**](#loginauth) | **POST** /auth/login | Authenticate an user by credentials|
|[**redirectAuth**](#redirectauth) | **POST** /auth/redirect | Retrieve real token after redirect|
|[**refreshAuth**](#refreshauth) | **GET** /auth/refresh | Refresh an auth token before it expires|
|[**requestProvider**](#requestprovider) | **GET** /auth/{provider}/request | Request the redirect to defined provider|
|[**verifyAuth**](#verifyauth) | **GET** /auth/verify | Verify validity for an authentication token|

# **callbackProvider**
> callbackProvider()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let provider: string; //An identifier for the auth provider (default to undefined)
let state: string; //Auth state (optional) (default to undefined)
let code: string; //Auth code (optional) (default to undefined)

const { status, data } = await apiInstance.callbackProvider(
    provider,
    state,
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | An identifier for the auth provider | defaults to undefined|
| **state** | [**string**] | Auth state | (optional) defaults to undefined|
| **code** | [**string**] | Auth code | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**308** | Generated expiring token |  -  |
|**412** | Failed to initialize provider |  -  |
|**404** | Provider not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProviders**
> ListProviders200Response listProviders()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.listProviders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListProviders200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of auth providers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginAuth**
> AuthToken loginAuth(loginAuthRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginAuthRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginAuthRequest: LoginAuthRequest; //The credentials to authenticate

const { status, data } = await apiInstance.loginAuth(
    loginAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginAuthRequest** | **LoginAuthRequest**| The credentials to authenticate | |


### Return type

**AuthToken**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Generated token with expire date |  -  |
|**400** | Failed to parse request |  -  |
|**401** | Unauthorized with wrong credentials |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redirectAuth**
> AuthToken redirectAuth(redirectAuthRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RedirectAuthRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let redirectAuthRequest: RedirectAuthRequest; //The redirect token to authenticate

const { status, data } = await apiInstance.redirectAuth(
    redirectAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **redirectAuthRequest** | **RedirectAuthRequest**| The redirect token to authenticate | |


### Return type

**AuthToken**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Generated token never expiring |  -  |
|**400** | Failed to parse request |  -  |
|**401** | Failed to generate or validate token |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshAuth**
> AuthToken refreshAuth()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.refreshAuth();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthToken**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refreshed token with expire date |  -  |
|**401** | Failed to generate or validate token |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestProvider**
> requestProvider()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let provider: string; //An identifier for the auth provider (default to undefined)

const { status, data } = await apiInstance.requestProvider(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | An identifier for the auth provider | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**308** | Redirect to the provider |  -  |
|**404** | Provider not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyAuth**
> AuthVerify verifyAuth()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.verifyAuth();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthVerify**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metadata of the auth token |  -  |
|**401** | Failed to generate or validate token |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

