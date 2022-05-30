import gulp from "gulp";
import del from "del";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

const sass = require("gulp-sass")(require("node-sass"));
const routes = {
  css: {
    watch: "src/assets/scss/*",
    src: "src/assets/scss/base.scss",
    dists: "assets/css",
  },
};

const styles = () =>
  gulp
    .src(routes.css.dists)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dists));

const watch = () => {
  gulp.watch(routes.css.watch, { usePolling: true }, styles);
};

const clean = () => del(["assets/scss"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, dists, live]);
