const gulp = require('gulp-help')(require('gulp'))
const gulpStats = require('gulp-stats')

gulpStats(gulp)

function loadTask(fileName, taskName) {
  const taskModule = require('./.gulp/tasks/' + fileName)
  const task = taskName ? taskModule[taskName] : taskModule
  return task(gulp)
}

// hide this from 'gulp-help' as this is a helper for the gulp task 'bump'
gulp.task('bump:pkg-version', false, [], loadTask('bump', 'bumpPkgVersion'), {})

gulp.task('bump',
  'Bump the package\'s version',
  [],
  loadTask('bump', 'bump'),
  {
    options: {
      'major': 'Bump the package\'s major version',
      'minor': 'Bump the package\'s minor version',
      'patch': 'Bump the package\'s patch version',
      'prerelease': 'Bump the package\'s prerelease version'
    }
  })

gulp.task('changelog',
  'Generate the CHANGELOG',
  [],
  loadTask('changelog', 'conventional'),
  {})

gulp.task('release',
  'Release on Github',
  [],
  loadTask('release', 'github'),
  {})
