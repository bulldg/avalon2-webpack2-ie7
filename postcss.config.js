// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px2rem-include': {
      remUnit: 75,
      remVersion: true,
      baseDpr: 2,
      remPrecision: 6,
      // 需要进行 px2rem 转换的目录
      include: new RegExp('wap|platform_wap', 'i')
    }
  }
}
