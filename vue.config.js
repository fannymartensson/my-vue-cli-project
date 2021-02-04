module.exports = {
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

        }
      ]
    }
  }
}