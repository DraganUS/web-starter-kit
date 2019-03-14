const scssInput = './dev/scss/**/*.scss';
const cssOutput = './app/css';
const jsInput = 'dev/scripts/**/*.js';
const jsOutput = 'app/scripts';

const gulp = require ('gulp');
const sass = require('gulp-sass');
const browserSync =require('browser-sync').create();
const rename = require('gulp-rename');
const jsminify = require('gulp-minify');

gulp.task('sass', function () {
 return gulp.src(scssInput)
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(rename('style.min.css'))
     .pipe(gulp.dest(cssOutput))
     .pipe(browserSync.stream())
     
   });

   gulp.task('jsminify', function () {
       return gulp.src(jsInput)
       .pipe(jsminify({
           noSource: true;
       }))
       .pipe(gulp.dest(jsOutput))
   })

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'  
        },
    });
})
// gulp.task('watch',gulp.series('sass', browserSync.reload), function (){
// gulp.watch('./dev/scss/**/*.scss', ['sass', browserSync.reload]);
// });

