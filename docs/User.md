# User

Model to represent user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**fullname** | **string** |  | [optional] [default to undefined]
**profile** | **string** |  | [optional] [default to undefined]
**admin** | **boolean** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]
**auths** | [**Array&lt;UserAuth&gt;**](UserAuth.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { User } from 'gopadjs';

const instance: User = {
    id,
    username,
    password,
    email,
    fullname,
    profile,
    admin,
    active,
    created_at,
    updated_at,
    auths,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
