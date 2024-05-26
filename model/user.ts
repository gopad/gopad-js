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
import type { UserAuth } from "./user-auth";
// May contain unused imports in some cases
// @ts-ignore
import type { UserTeam } from "./user-team";

/**
 * Model to represent user
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  username?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  password?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  fullname?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  profile?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  admin?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  active?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  updated_at?: string;
  /**
   *
   * @type {Array<UserAuth>}
   * @memberof User
   */
  auths?: Array<UserAuth> | null;
  /**
   *
   * @type {Array<UserTeam>}
   * @memberof User
   */
  teams?: Array<UserTeam> | null;
}
