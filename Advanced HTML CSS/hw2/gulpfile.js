import gulp from "gulp";
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

const serv = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: true
    });
}

const reset = () => {
    return deleteAsync("./dist")
}

const watcher = () =>  {
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("./src/js/*.js").on("change", gulp.series(scripts, browserSync.reload));
    gulp.watch('./src/styles/**/*.scss', style);
    gulp.watch("./src/img/**/*.{jpg,jpeg,png,svg,webp}").on("change", gulp.series(images, browserSync.reload));
}

const style = () => {
    return gulp.src("./src/styles/style.scss")
        .pipe(sass())
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer({
            grid:true,
            overrideBrowserslist: ['last 3 versions'],
            cascade:true
        }))
        // .pipe(gulp.dest('./dist/css'))
        .pipe(cleanCSS())
        .pipe(rename({
            extname:".min.css"
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}


const scripts = () => {
    return gulp.src("./src/js/script.js")
        // .pipe(gulp.dest("./dist/js"))
        .pipe(uglify())
        .pipe(rename({
            extname:".min.js"
        }))
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.stream());
}

const images = () => {
    return gulp.src("./src/img/**/*.{jpg,jpeg,png,svg,webp}")
        .pipe(imagemin({
            interlaced: true,
			progressive: true,
			optimizationLevel: 4,
        }))
        .pipe(gulp.dest("./dist/img"))
        .pipe(browserSync.stream());
}

const build=gulp.series(reset, gulp.parallel(scripts, style, images))
const dev = gulp.series(build, gulp.parallel(serv,watcher));

export { dev };
export { build };