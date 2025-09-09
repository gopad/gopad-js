# GroupApi

All URIs are relative to *https://try.gopad.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachGroupToUser**](#attachgrouptouser) | **POST** /groups/{group_id}/users | Attach a user to group|
|[**createGroup**](#creategroup) | **POST** /groups | Create a new group|
|[**deleteGroup**](#deletegroup) | **DELETE** /groups/{group_id} | Delete a specific group|
|[**deleteGroupFromUser**](#deletegroupfromuser) | **DELETE** /groups/{group_id}/users | Unlink a user from group|
|[**listGroupUsers**](#listgroupusers) | **GET** /groups/{group_id}/users | Fetch all users attached to group|
|[**listGroups**](#listgroups) | **GET** /groups | Fetch all available groups|
|[**permitGroupUser**](#permitgroupuser) | **PUT** /groups/{group_id}/users | Update user perms for group|
|[**showGroup**](#showgroup) | **GET** /groups/{group_id} | Fetch a specific group|
|[**updateGroup**](#updategroup) | **PUT** /groups/{group_id} | Update a specific group|

# **attachGroupToUser**
> Notification attachGroupToUser(permitGroupUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupUserRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupUserRequest: PermitGroupUserRequest; //The group user data to permit

const { status, data } = await apiInstance.attachGroupToUser(
    groupId,
    permitGroupUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupUserRequest** | **PermitGroupUserRequest**| The group user data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **createGroup**
> Group createGroup(createGroupRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    CreateGroupRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let createGroupRequest: CreateGroupRequest; //The group data to create

const { status, data } = await apiInstance.createGroup(
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**| The group data to create | |


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroup**
> Notification deleteGroup()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **deleteGroupFromUser**
> Notification deleteGroupFromUser(deleteGroupFromUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    DeleteGroupFromUserRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let deleteGroupFromUserRequest: DeleteGroupFromUserRequest; //The group user data to unlink

const { status, data } = await apiInstance.deleteGroupFromUser(
    groupId,
    deleteGroupFromUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGroupFromUserRequest** | **DeleteGroupFromUserRequest**| The group user data to unlink | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **listGroupUsers**
> InlineObject2 listGroupUsers()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroupUsers(
    groupId,
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
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject2**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of group users |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGroups**
> InlineObject1 listGroups()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroups(
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

**InlineObject1**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of groups |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitGroupUser**
> Notification permitGroupUser(permitGroupUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupUserRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupUserRequest: PermitGroupUserRequest; //The group user data to permit

const { status, data } = await apiInstance.permitGroupUser(
    groupId,
    permitGroupUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupUserRequest** | **PermitGroupUserRequest**| The group user data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **showGroup**
> Group showGroup()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)

const { status, data } = await apiInstance.showGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroup**
> Group updateGroup(createGroupRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    CreateGroupRequest
} from 'gopadjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let createGroupRequest: CreateGroupRequest; //The group data to update

const { status, data } = await apiInstance.updateGroup(
    groupId,
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**| The group data to update | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

