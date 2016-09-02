module.exports = function (deviceID, options, next) {
    var exec = require('child_process').spawn;

    var adbPath = '';
    switch (require('os').type()) {
        case 'Darwin':
            adbPath = 'mac/adb';
            break;
        case 'Linux':
            adbPath = 'linux/adb';
            break;
        default:
            adbPath = 'win/adb.exe';
            break;
    }

    var a = require('path').join(__dirname, adbPath),
        cmd = ['-s', deviceID];

    cmd = cmd.concat(options);


    var ls = exec(a, cmd);
    var useNext = false;
    ls.stdout.on('data', function (data) {
        //console.log(data.toString());
        useNext = true;
        next && next(data.toString());
    });


    ls.stderr.on('data', function (data) {
        //console.log(data.toString());
    });

    ls.on('exit', function () {
        if (useNext === false) {
            setTimeout(function () {
                next();
            }, 200);
        }
    });

};
