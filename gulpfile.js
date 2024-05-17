import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

// export function hola(done) {
// 	console.log("Hola desde Gulpfile.js");
// 	// funcion que finaliza le avisa gulpfile 
// 	done();
// }

const sass = gulpSass(dartSass)

export function css(done) {
	// pipes
	src('src/scss/app.scss').pipe( sass()).pipe( dest('build/css'))
	
	done()
}

export function dev() {
	watch('src/scss/**/*.scss', css)
}
