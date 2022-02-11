/**
 * Gopad OpenAPI
 * API definition for Gopad
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The AuthLogin model module.
 * @module gopad/model/AuthLogin
 * @version 1.0.0-alpha1
 */
class AuthLogin {
  /**
     * Constructs a new <code>AuthLogin</code>.
     * @alias module:gopad/model/AuthLogin
     * @param username {String}
     * @param password {String}
     */
  constructor (username, password) {
    AuthLogin.initialize(this, username, password)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, username, password) {
    obj['username'] = username
    obj['password'] = password
  }

  /**
     * Constructs a <code>AuthLogin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gopad/model/AuthLogin} obj Optional instance to populate.
     * @return {module:gopad/model/AuthLogin} The populated <code>AuthLogin</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new AuthLogin()

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String')
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} username
 */
AuthLogin.prototype['username'] = undefined

/**
 * @member {String} password
 */
AuthLogin.prototype['password'] = undefined

export default AuthLogin