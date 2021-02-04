module.exports = {
  chainWebpack: (config) =>

    config.plugin('html').tap((args) => {
      args[0]
        .title = 'F-DSGN'
      return args
    }),

  pwa: {
    manifestOptions: {
      background_color: 'white'
    },

    name: 'F-DSGN',
    themeColor: 'black',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://avancera.app/cities/'
        }
      ]
    }
  }
}

