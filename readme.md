# sms-link [![Build Status](https://travis-ci.org/bendrucker/sms-link.svg?branch=master)](https://travis-ci.org/bendrucker/sms-link)

> Generate an SMS protocol link


## Install

```
$ npm install --save sms-link
```


## Usage

```js
var smsLink = require('sms-link')

smsLink({phone: '411', body: 'Hello world'})
// On iOS 8
//=> sms:411&body=Hello%20world
```

Tested operating systems:

* iOS 8
* iOS 9
* Android 5

If you test a new device version please send a [pull request](https://github.com/bendrucker/sms-link/pulls) adding it to this list.

## API

#### `smsLink(options)` -> `string`

Returns a URL string.

##### options

*Required*  
Type: `object`

Either `phone` or `body` is required.

###### phone

Type: `string`

The phone number to prefill in the new SMS.

###### body

Type: `string`

The body to prefill in the new SMS. Text will be url-encoded in the returned URL.


## License

MIT © [Ben Drucker](http://bendrucker.me)
