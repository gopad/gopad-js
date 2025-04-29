# Notification

Generic response for errors and validations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**errors** | [**Array&lt;Validation&gt;**](Validation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Notification } from 'gopadjs';

const instance: Notification = {
    status,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
