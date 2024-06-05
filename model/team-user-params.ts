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
 * Parameters to attach or unlink team user
 * @export
 * @interface TeamUserParams
 */
export interface TeamUserParams {
  /**
   *
   * @type {string}
   * @memberof TeamUserParams
   */
  user: string;
  /**
   *
   * @type {string}
   * @memberof TeamUserParams
   */
  perm?: TeamUserParamsPermEnum;
}

export const TeamUserParamsPermEnum = {
  User: "user",
  Admin: "admin",
  Owner: "owner",
} as const;

export type TeamUserParamsPermEnum =
  (typeof TeamUserParamsPermEnum)[keyof typeof TeamUserParamsPermEnum];
