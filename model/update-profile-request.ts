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
 *
 * @export
 * @interface UpdateProfileRequest
 */
export interface UpdateProfileRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateProfileRequest
   */
  username?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileRequest
   */
  password?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileRequest
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileRequest
   */
  fullname?: string | null;
}
