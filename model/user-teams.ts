/* tslint:disable */
/* eslint-disable */
/**
 * Gopad OpenAPI
 * API definition for Gopad, Etherpad for markdown with go
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 * Contact: gopad@webhippie.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { User } from "./user";
// May contain unused imports in some cases
// @ts-ignore
import type { UserTeam } from "./user-team";

/**
 * Model to represent user teams
 * @export
 * @interface UserTeams
 */
export interface UserTeams {
  /**
   *
   * @type {User}
   * @memberof UserTeams
   */
  user?: User;
  /**
   *
   * @type {number}
   * @memberof UserTeams
   */
  total?: number;
  /**
   *
   * @type {Array<UserTeam>}
   * @memberof UserTeams
   */
  teams?: Array<UserTeam>;
}