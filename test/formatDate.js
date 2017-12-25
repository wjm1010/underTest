import {isFunction} from 'sav-util'
import test from 'ava'
import {expect} from 'chai'
import formatDate from '../src/formatDate.js'

test('formatDate', ava => {
	ava.true(isFunction(formatDate))
	// should return the default formatDate
	expect(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(formatDate())).to.eql(true)
	// should work with delimiters
	expect(/^\[\d{4}\]/.test(formatDate('[YYYY]'))).to.eql(true)
	expect(/^\[\d{4}\d{2}\]/.test(formatDate('[YYYYMM]'))).to.eql(true)
	expect(/^\[\d{4}:\d{2}\]/.test(formatDate('[YYYY:MM]'))).to.eql(true)
	// 'should return the year
	expect(/^\d{4}$/.test(formatDate('YYYY'))).to.eql(true)
	// 'should return the month
	expect(/^\d{2}$/.test(formatDate('MM'))).to.eql(true)
	// 'should return the day
	expect(/^\d{2}$/.test(formatDate('DD'))).to.eql(true)
	// 'should return hours
	expect(/^\d{2}$/.test(formatDate('hh'))).to.eql(true)
	// 'should return minutes
	expect(/^\d{2}$/.test(formatDate('mm'))).to.eql(true)
	// 'should return seconds
	expect(/^\d{2}$/.test(formatDate('ss'))).to.eql(true)
	// 'should return miliseconds
	expect(/^\d{3}$/.test(formatDate('ms'))).to.eql(true)
	// should work with no separators
	expect(/^\d{4}\d{2}$/.test(formatDate('YYYYMM'))).to.eql(true)
	expect(/^\d{4}\d{2}\d{2}$/.test(formatDate('YYYYMMDD'))).to.eql(true)
	expect(/^\d{4}\d{2}\d{2}\d{2}$/.test(formatDate('YYYYMMDDss'))).to.eql(true)
	expect(/^\d{4}\d{2}\d{2}$/.test(formatDate('YYYYMMss'))).to.eql(true)
	// 参数选项
	expect(formatDate('2017-12-06', 'YY年MM月DD日')).to.eql('17年12月06日')
	expect(formatDate(1513310471409, 'YY年MM月DD日')).to.eql('17年12月15日')
	expect(formatDate(new Date(), 'YY年MM月DD日').length).to.eql(9)
	ava.pass()
})