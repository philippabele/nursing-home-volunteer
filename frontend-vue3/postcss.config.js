/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = ({ env }) => ({
  plugins: [
    // automatically add browser specifify css prefix
    autoprefixer,
    // removed unused css (primarily for bootstrap)
    env === 'production' &&
      purgecss({
        content: ['./**/*.html', './src/**/*.vue'],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        whitelist: [],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
        ],
      }),
  ],
})
