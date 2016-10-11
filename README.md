# adb tools
- Support windows, MAC, Linux (Ubuntu) system.
- Easy to use.
- Containing binary ADB file
- NPM:<https://www.npmjs.com/package/node-adb>

### Install
* ``npm install node-adb -save``

### Sample code

```js

var adb = require('node-adb');
adb({
    cmd: ['devices']
},function(result){
    // code
});
````

```js

var adb = require('node-adb');
adb({
    deviceID: 'abc',
    cmd: ['shell', ' cat', '/etc/hosts']
},function(result){
    // code
});
````


