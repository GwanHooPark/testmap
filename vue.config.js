module.exports = {
    pwa: {
        themeColor : '#4298b9',
        appleMobileWebAppCapable: 'yes',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js'
        },
        iconPaths: {
            "favicon32": "img/icons/favicon-32x32.png",
            "favicon16": "img/icons/favicon-16x16.png",
            "appleTouchIcon": "img/icons/apple-touch-icon-152x152.png",
            "maskIcon": "img/icons/safari-pinned-tab.svg",
            "msTileImage": "img/icons/msapplication-icon-144x144.png"
        }
    }
}