# UserApi

All URIs are relative to *https://try.gopad.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachUserToGroup**](#attachusertogroup) | **POST** /users/{user_id}/groups | Attach a group to user|
|[**createUser**](#createuser) | **POST** /users | Create a new user|
|[**deleteUser**](#deleteuser) | **DELETE** /users/{user_id} | Delete a specific user|
|[**deleteUserFromGroup**](#deleteuserfromgroup) | **DELETE** /users/{user_id}/groups | Unlink a group from user|
|[**listUserGroups**](#listusergroups) | **GET** /users/{user_id}/groups | Fetch all groups attached to user|
|[**listUsers**](#listusers) | **GET** /users | Fetch all available users|
|[**permitUserGroup**](#permitusergroup) | **PUT** /users/{user_id}/groups | Update group perms for user|
|[**showUser**](#showuser) | **GET** /users/{user_id} | Fetch a specific user|
|[**updateUser**](#updateuser) | **PUT** /users/{user_id} | Update a specific user|

# **attachUserToGroup**
> Notification attachUserToGroup(permitUserGroupRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    PermitUserGroupRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)
let permitUserGroupRequest: PermitUserGroupRequest; //The user group data to permit

const { status, data } = await apiInstance.attachUserToGroup(
    userId,
    permitUserGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitUserGroupRequest** | **PermitUserGroupRequest**| The user group data to permit | |
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**412** | Resource is already attached |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUser**
> User createUser(createUserRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    CreateUserRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let createUserRequest: CreateUserRequest; //The user data to create

const { status, data } = await apiInstance.createUser(
    createUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserRequest** | **CreateUserRequest**| The user data to create | |


### Return type

**User**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for an user |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> Notification deleteUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**400** | Failed to execute action for resource |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUserFromGroup**
> Notification deleteUserFromGroup(deleteUserFromGroupRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    DeleteUserFromGroupRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)
let deleteUserFromGroupRequest: DeleteUserFromGroupRequest; //The user group data to unlink

const { status, data } = await apiInstance.deleteUserFromGroup(
    userId,
    deleteUserFromGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteUserFromGroupRequest** | **DeleteUserFromGroupRequest**| The user group data to unlink | |
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**412** | Resource is not attached |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUserGroups**
> InlineObject4 listUserGroups()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listUserGroups(
    userId,
    search,
    sort,
    order,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject4**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of user groups |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUsers**
> InlineObject3 listUsers()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listUsers(
    search,
    sort,
    order,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject3**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of users |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitUserGroup**
> Notification permitUserGroup(permitUserGroupRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    PermitUserGroupRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)
let permitUserGroupRequest: PermitUserGroupRequest; //The user group data to permit

const { status, data } = await apiInstance.permitUserGroup(
    userId,
    permitUserGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitUserGroupRequest** | **PermitUserGroupRequest**| The user group data to permit | |
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**412** | Resource is not attached |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showUser**
> User showUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)

const { status, data } = await apiInstance.showUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**User**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for an user |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> User updateUser(updateUserRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //A user identifier or slug (default to undefined)
let updateUserRequest: UpdateUserRequest; //The user data to update

const { status, data } = await apiInstance.updateUser(
    userId,
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**| The user data to update | |
| **userId** | [**string**] | A user identifier or slug | defaults to undefined|


### Return type

**User**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for an user |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

