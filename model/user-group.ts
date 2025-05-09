/* tslint:disable */
/* eslint-disable */
/**
 * Gopad OpenAPI
 * API definition for Gopad, Etherpad for markdown with Go
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
import type { Group } from "./group";
// May contain unused imports in some cases
// @ts-ignore
import type { User } from "./user";

/**
 * Model to represent user group
 * @export
 * @interface UserGroup
 */
export interface UserGroup {
  /**
   *
   * @type {string}
   * @memberof UserGroup
   */
  user_id: string;
  /**
   *
   * @type {User}
   * @memberof UserGroup
   */
  user?: User;
  /**
   *
   * @type {string}
   * @memberof UserGroup
   */
  group_id: string;
  /**
   *
   * @type {Group}
   * @memberof UserGroup
   */
  group?: Group;
  /**
   *
   * @type {string}
   * @memberof UserGroup
   */
  perm?: UserGroupPermEnum;
  /**
   *
   * @type {string}
   * @memberof UserGroup
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof UserGroup
   */
  updated_at?: string;
}

export const UserGroupPermEnum = {
  Owner: "owner",
  User: "user",
  Admin: "admin",
} as const;

export type UserGroupPermEnum =
  (typeof UserGroupPermEnum)[keyof typeof UserGroupPermEnum];
