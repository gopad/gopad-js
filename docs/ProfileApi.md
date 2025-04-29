# ProfileApi

All URIs are relative to *https://try.gopad.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showProfile**](#showprofile) | **GET** /profile/self | Fetch profile details of the personal account|
|[**tokenProfile**](#tokenprofile) | **GET** /profile/token | Retrieve an unlimited auth token|
|[**updateProfile**](#updateprofile) | **PUT** /profile/self | Update your own profile information|

# **showProfile**
> Profile showProfile()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

const { status, data } = await apiInstance.showProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Profile**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The current profile details |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenProfile**
> AuthToken tokenProfile()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

const { status, data } = await apiInstance.tokenProfile();
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
|**200** | Generated token never expiring |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProfile**
> Profile updateProfile(updateProfileRequest)


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    UpdateProfileRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let updateProfileRequest: UpdateProfileRequest; //The profile data to update

const { status, data } = await apiInstance.updateProfile(
    updateProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileRequest** | **UpdateProfileRequest**| The profile data to update | |


### Return type

**Profile**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The current profile details |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

