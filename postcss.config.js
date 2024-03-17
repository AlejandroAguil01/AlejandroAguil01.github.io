module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 3,
        autoprefixer: { grid: true }
      }),
      require('@fullhuman/postcss-purgecss')({
        content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
    ]
  }