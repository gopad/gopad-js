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
import type { User } from "./user";

/**
 *
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  offset: number;
  /**
   *
   * @type {Array<User>}
   * @memberof InlineObject3
   */
  users: Array<User>;
}
