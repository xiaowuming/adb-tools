module.exports = function (options, next) {
    var exec = require('child_process').spawn;

    var a = 'adb';

    var cmd = [];

    if (typeof options.deviceID === 'string') {
        cmd.push('-s');
        cmd.push(options.deviceID);
    }
    if (typeof options.cmd === 'object') {
        cmd = cmd.concat(options.cmd);
    }

    var ls = exec(a, cmd);
    var useNext = false;
    ls.stdout.on('data', function (data) {
        useNext = true;
        next && next(data.toString());
    });


    ls.stderr.on('data', function (data) {
        //console.log(data.toString());
    });

    ls.on('exit', function () {
        if (typeof next === 'function') {
            if (useNext === false) {
                setTimeout(function () {
                    next();
                }, 200);
            }
        }
    });
    return ls;
};
