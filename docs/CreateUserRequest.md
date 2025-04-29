# CreateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**fullname** | **string** |  | [optional] [default to undefined]
**admin** | **boolean** |  | [optional] [default to false]
**active** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { CreateUserRequest } from 'gopadjs';

const instance: CreateUserRequest = {
    username,
    password,
    email,
    fullname,
    admin,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
