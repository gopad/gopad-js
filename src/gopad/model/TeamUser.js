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
 * The TeamUser model module.
 * @module gopad/model/TeamUser
 * @version 1.0.0-alpha1
 */
class TeamUser {
  /**
     * Constructs a new <code>TeamUser</code>.
     * @alias module:gopad/model/TeamUser
     * @param teamId {String}
     * @param userId {String}
     * @param perm {module:gopad/model/TeamUser.PermEnum}
     */
  constructor (teamId, userId, perm) {
    TeamUser.initialize(this, teamId, userId, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, teamId, userId, perm) {
    obj['team_id'] = teamId
    obj['user_id'] = userId
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>TeamUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gopad/model/TeamUser} obj Optional instance to populate.
     * @return {module:gopad/model/TeamUser} The populated <code>TeamUser</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new TeamUser()

      if (data.hasOwnProperty('team_id')) {
        obj['team_id'] = ApiClient.convertToType(data['team_id'], 'String')
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String')
      }
      if (data.hasOwnProperty('perm')) {
        obj['perm'] = ApiClient.convertToType(data['perm'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} team_id
 */
TeamUser.prototype['team_id'] = undefined

/**
 * @member {String} user_id
 */
TeamUser.prototype['user_id'] = undefined

/**
 * @member {module:gopad/model/TeamUser.PermEnum} perm
 */
TeamUser.prototype['perm'] = undefined

/**
 * Allowed values for the <code>perm</code> property.
 * @enum {String}
 * @readonly
 */
TeamUser['PermEnum'] = {

  /**
     * value: "user"
     * @const
     */
  'user': 'user',

  /**
     * value: "admin"
     * @const
     */
  'admin': 'admin',

  /**
     * value: "owner"
     * @const
     */
  'owner': 'owner'
}

export default TeamUser
