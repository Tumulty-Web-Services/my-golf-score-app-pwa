const withOptimizedImages = require('next-optimized-images')
const imageminOptipng = require('imagemin-optipng')

module.exports = withOptimizedImages({
  imageminOptipng,
})
