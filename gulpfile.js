var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps');
gulp.task('sitecss', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        // .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('assets/css/'));
});
gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sitecss']);
});
