
const fs = require('fs');

module.exports = {
  lintOnSave: 'error',
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/design/abstracts/_settings.scss', 'utf-8'),
      },
    },
  },
};
