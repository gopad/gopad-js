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

/**
 * Parameters to attach or unlink user team
 * @export
 * @interface UserTeamParams
 */
export interface UserTeamParams {
  /**
   *
   * @type {string}
   * @memberof UserTeamParams
   */
  team: string;
  /**
   *
   * @type {string}
   * @memberof UserTeamParams
   */
  perm?: UserTeamParamsPermEnum;
}

export const UserTeamParamsPermEnum = {
  User: "user",
  Admin: "admin",
  Owner: "owner",
} as const;

export type UserTeamParamsPermEnum =
  (typeof UserTeamParamsPermEnum)[keyof typeof UserTeamParamsPermEnum];
