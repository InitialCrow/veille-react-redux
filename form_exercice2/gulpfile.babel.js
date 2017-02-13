import gulp from 'gulp'
import gutil from 'gulp-util';
import nodemon from 'gulp-nodemon'
import livereload from 'gulp-livereload'
import webpack from 'webpack'
import webpackConf from './webpack.config.js'

gulp.task('webpack', function(){
	webpack(webpackConf, function(err, stats) {
	        if(err) throw new gutil.PluginError("webpack", err);
	        gutil.log("[webpack]", stats.toString({
	            colors: true
	        }));
	        return gulp.src([
		'./dist/views/*.ejs',
		])
		.pipe(livereload())
	    });
})

gulp.task('html', function(){
	return gulp.src([
		'./dist/views/index.html',

	])
	.pipe(livereload())
})

gulp.task('watch', function(){
	livereload.listen();
	
	gulp.watch('./app/**/*', ['webpack'])
})

gulp.task('server', function(){
	nodemon({
		'script' : './dist/server.js'
	})
})

gulp.task('serve',['server','watch'])