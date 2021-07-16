const { src, dest, watch, parallel, series } = require('gulp'); // Сборочка 
const sass = require('gulp-sass'); // Препроцессор CSS
const pug = require('gulp-pug'); // Препроцессор для HTML
const concat = require('gulp-concat'); // Обьединение в один файл
const browserSync = require('browser-sync').create(); // Автоматическое обновление браузера
const uglify = require('gulp-uglify-es').default; // Минификация js
const autoprefixer = require('gulp-autoprefixer'); // Префиксы CSS для старых браузеров
const imagemin = require('gulp-imagemin'); // Минификация картинок
const rimraf = require('rimraf'); // Очистка сборки

function server() {
  browserSync.init({
    server: 'dist'
  });

  build();
  watching();
};

function html() {
  return src('src/pages/**/*pug')
    .pipe(pug(
      {
        pretty: true,
        basedir: 'src'
      }
    ))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

function style() {
  return src('src/styles/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 version']
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
};

function script() {
  return src('src/**/*.js')
    .pipe(concat('main.min.js'))
    //.pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
};

function image() {
  return src('src/accets/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('dist/img'))
};


function fonts() {
  return src('src/accets/fonts/**/*')
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
};

function cleanup(cb) {
  rimraf.sync('dist');
  cb();
};

const build = series([
  cleanup,
  parallel([html, style, script, image, fonts])
]);

function watching() {
  watch('src/**/*.scss', style);
  watch('src/**/*.pug', html);
  watch('src/**/*.js', script);
  watch('src/**/*', image);
  watch('src/**/*', fonts);
};

exports.default = server;