module.exports = {
  baseStaticUrl: 'http://static.fuzong.wang/',
  api: {
    basic: 'https://api.mimei.net.cn/api/',
    index: {
      resPhotoList: {
        key: 'rec-photo-list',
        uri: 'v1/article/?artType=photos&recommend=1&limit=4'
      },
      recArticleList: {
        key: 'rec-article-list',
        uri: 'v1/article/?artType=normal&recommend=1&limit=4'
      },
      newArticles: {
        key: 'index-new-articles',
        uri: 'v1/article/?artType=normal&limit=5'
      },
      newPhotos: {
        key: 'index-new-images',
        uri: 'v1/article/?artType=photos&limit=5'
      }
    },
    list: {
      main: {
        key:'list-main',
        uri: 'v1/article/'
      }
    }
  }
}