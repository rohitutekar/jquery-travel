'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('scripts', function() {
  return gulp.src(['jquery.travelmap.js'])
    .pipe(uglify())
    .pipe(jshint())
    .pipe(rename('jquery.travelmap.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['bower', 'scripts']);