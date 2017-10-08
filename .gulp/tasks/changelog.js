module.exports = {
  conventional: (gulp) => () => {
    const conventionalChangelog = require('gulp-conventional-changelog')
    return gulp.src('./docs/CHANGELOG.md')
      .pipe(conventionalChangelog({
        preset: 'angular',
        releaseCount: 0
      }))
      .pipe(gulp.dest('./docs/'))
  }
}
