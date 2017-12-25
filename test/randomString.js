import {isFunction} from 'sav-util'
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', ava => {
	ava.true(isFunction(randomString))
	expect(/^[a-zA-Z0-9]\w{5}$/.test(randomString())).to.eql(true)
	expect(randomString(1, '$').length).to.eql(1)
	expect('`!@#$%^&*()-+=_[]{},./<>?;:"|\\\''.indexOf(randomString(1, '$')) >= 0).to.eql(true)
	
	ava.pass()
})