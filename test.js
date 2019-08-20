'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('android', function (t) {
  var link = proxyquire('./', {
    'is-android': true
  })
  t.equals(link({ phone: '411', body: 'hello' }), 'sms:411?body=hello')
  t.equals(link({ phone: '411' }), 'sms:411')
  t.equals(link({ phone: '411' }), 'sms:411')
  t.end()
})

test('iOS <=7', function (t) {
  var link = proxyquire('./', {
    'is-ios': true,
    'ios-version/current': {
      major: 7
    }
  })
  t.equals(link({ phone: '411', body: 'hello' }), 'sms:411;body=hello')
  t.end()
})

test('iOS 8', function (t) {
  var link = proxyquire('./', {
    'is-ios': true,
    'ios-version/current': {
      major: 8
    }
  })
  t.equals(link({ phone: '411', body: 'hello' }), 'sms:411&body=hello')
  t.end()
})
