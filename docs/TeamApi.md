# Gopad.TeamApi

All URIs are relative to *http://try.gopad.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendTeamToUser**](TeamApi.md#appendTeamToUser) | **POST** /teams/{team_id}/users | Assign a user to team
[**createTeam**](TeamApi.md#createTeam) | **POST** /teams | Create a new team
[**deleteTeam**](TeamApi.md#deleteTeam) | **DELETE** /teams/{team_id} | Delete a specific team
[**deleteTeamFromUser**](TeamApi.md#deleteTeamFromUser) | **DELETE** /teams/{team_id}/users | Remove a user from team
[**listTeamUsers**](TeamApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all users assigned to team
[**listTeams**](TeamApi.md#listTeams) | **GET** /teams | Fetch all available teams
[**permitTeamUser**](TeamApi.md#permitTeamUser) | **PUT** /teams/{team_id}/users | Update user perms for team
[**showTeam**](TeamApi.md#showTeam) | **GET** /teams/{team_id} | Fetch a specific team
[**updateTeam**](TeamApi.md#updateTeam) | **PUT** /teams/{team_id} | Update a specific team



## appendTeamToUser

> GeneralError appendTeamToUser(teamId, teamUser)

Assign a user to team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let teamUser = new Gopad.TeamUserParams(); // TeamUserParams | The team user data to assign
apiInstance.appendTeamToUser(teamId, teamUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **teamUser** | [**TeamUserParams**](TeamUserParams.md)| The team user data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeam

> Team createTeam(team)

Create a new team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let team = new Gopad.Team(); // Team | The team data to create
apiInstance.createTeam(team).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**Team**](Team.md)| The team data to create | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> GeneralError deleteTeam(teamId)

Delete a specific team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.deleteTeam(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTeamFromUser

> GeneralError deleteTeamFromUser(teamId, teamUser)

Remove a user from team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let teamUser = new Gopad.TeamUserParams(); // TeamUserParams | The team user data to delete
apiInstance.deleteTeamFromUser(teamId, teamUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **teamUser** | [**TeamUserParams**](TeamUserParams.md)| The team user data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listTeamUsers

> [TeamUser] listTeamUsers(teamId)

Fetch all users assigned to team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.listTeamUsers(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**[TeamUser]**](TeamUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeams

> [Team] listTeams()

Fetch all available teams

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
apiInstance.listTeams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitTeamUser

> GeneralError permitTeamUser(teamId, teamUser)

Update user perms for team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let teamUser = new Gopad.TeamUserParams(); // TeamUserParams | The team user data to update
apiInstance.permitTeamUser(teamId, teamUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **teamUser** | [**TeamUserParams**](TeamUserParams.md)| The team user data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showTeam

> Team showTeam(teamId)

Fetch a specific team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.showTeam(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> Team updateTeam(teamId, team)

Update a specific team

### Example

```javascript
import Gopad from 'gopad';

let apiInstance = new Gopad.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let team = new Gopad.Team(); // Team | The team data to update
apiInstance.updateTeam(teamId, team).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **team** | [**Team**](Team.md)| The team data to update | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

