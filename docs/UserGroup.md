# UserGroup

Model to represent user group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **string** |  | [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**group_id** | **string** |  | [default to undefined]
**group** | [**Group**](Group.md) |  | [optional] [default to undefined]
**perm** | **string** |  | [optional] [default to PermEnum_User]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { UserGroup } from 'gopadjs';

const instance: UserGroup = {
    user_id,
    user,
    group_id,
    group,
    perm,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
