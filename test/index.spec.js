/* global describe, it */

import mock from 'xhr-mock'
// import sinon from 'sinon'
import assert from 'assert'

import GopadClient from '../src/index'

mock.setup()

describe('Gopad Client', () => {
  describe('dummy', () => {
    it('fake works as expected', () => {
      let client = new GopadClient()

      assert(client !== undefined)
    })
  })
})
