import {src, dest, watch, series} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass); 

export function js() {
    return src('src/img/js/app.js')
        .pipe(dest('build/js'))
}

export function css(done) {
    src('src/img/scss/app.scss',{sourcemaps:true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css',{sourcemaps: '.'}) )

    done()
}

export function dev(done) {
    watch('src/img/scss/**/*.scss', css);
    watch('src/img/js/**/*.js', js);
    done();
}

export default series(js, css, dev)