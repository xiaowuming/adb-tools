# adb tools
- Support windows, MAC, Linux (Ubuntu) system.
- Easy to use.

### Install
* ``npm install adb-tools -save``

### Sample code

```js

var adb = require('adb-tools');
adb({
    cmd: ['devices']
},function(result){
    // code
});
````

```js

var adb = require('adb-tools');
adb({
    deviceID: 'abc',
    cmd: ['shell', ' cat', '/etc/hosts']
},function(result){
    // code
});
````


