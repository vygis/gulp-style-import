# gulp-less-import

Create less/sass @import statements for each file provided.

Based on Jonathan Diehl's [gulp-less-import](https://github.com/jdiehl/gulp-less-import)

## Example

```
var gulp = require('gulp');
var styleImport = require('gulp-style-import');
var less = require('gulp-less');

gulp
  .src('**.less')
  .pipe(styleImport('app.less'))
  .pipe(less())
  .pipe(gulp.dest('output/'));
```

## License

MIT
