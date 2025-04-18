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

/**
 *
 * @export
 * @interface ListGroups200Response
 */
export interface ListGroups200Response {
  /**
   *
   * @type {number}
   * @memberof ListGroups200Response
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof ListGroups200Response
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof ListGroups200Response
   */
  offset: number;
  /**
   *
   * @type {Array<Group>}
   * @memberof ListGroups200Response
   */
  groups: Array<Group>;
}
