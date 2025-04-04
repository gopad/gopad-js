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

/**
 * Model to represent user auth
 * @export
 * @interface UserAuth
 */
export interface UserAuth {
  /**
   *
   * @type {string}
   * @memberof UserAuth
   */
  provider?: string;
  /**
   *
   * @type {string}
   * @memberof UserAuth
   */
  ref?: string;
  /**
   *
   * @type {string}
   * @memberof UserAuth
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof UserAuth
   */
  updated_at?: string;
}
