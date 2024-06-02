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
 * Model to represent profile
 * @export
 * @interface Profile
 */
export interface Profile {
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  username?: string | null;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  password?: string | null;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  fullname?: string | null;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  profile?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Profile
   */
  admin?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Profile
   */
  active?: boolean;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  updated_at?: string;
  /**
   *
   * @type {Array<UserAuth>}
   * @memberof Profile
   */
  auths?: Array<UserAuth> | null;
  /**
   *
   * @type {Array<UserTeam>}
   * @memberof Profile
   */
  teams?: Array<UserTeam> | null;
}
