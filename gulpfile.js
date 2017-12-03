var gulp = require('gulp')
var sass = require('gulp-sass')
var prefix = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var livereload = require('gulp-livereload')

var paths = {
    styles: 'build/scss/*.scss'
}

gulp.task('styles', function() {
    return gulp
      .src(paths.styles)
      .pipe(sass())
      .pipe(prefix("last 2 versions"))
      .pipe(cleanCSS())
      .pipe(gulp.dest('htdocs/assets/css'))
      .pipe(livereload())
})

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('build/scss/*.scss', ['styles'])
})

gulp.task('default', ['styles'])