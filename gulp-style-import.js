/*jshint node: true*/
'use strict';

var path = require('path');
var through = require('through2');
var gutil = require('gulp-util');

module.exports = function (options) {
  var imports = '';

  function write(file, enc, done) {
    if (file.path !== 'undefined') {
      imports =  imports + '@import "' + path.relative(options.cwd || process.cwd(), file.path) + '";' + '\n';
    }
    done();
  }

  function flush(done) {
    /*jshint validthis:true */

    var newFile = new gutil.File({
      path: options.fileName,
      contents: new Buffer(imports)
    });

    this.push(newFile);
    done();
  }

  return through.obj(write, flush);
};
