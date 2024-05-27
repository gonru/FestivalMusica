import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

// export function hola(done) {
// 	console.log("Hola desde Gulpfile.js");
// 	// funcion que finaliza le avisa gulpfile
// 	done();
// }

const sass = gulpSass(dartSass);

export function js(done) {
  src("src/js/app.js").pipe(dest("build/js"));

  done();
}

export function css(done) {
  // pipes
  src("src/scss/app.scss", { sourcemaps: true })
    .pipe(sass().on('error', sass.logError) )
    .pipe(dest("build/css"), {sourcemaps: '.'});

  done();
}

export function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
}

export default series(js, css, dev);
// puede usar parallel se puede usar en el cual arrancas todas las tareas de una
