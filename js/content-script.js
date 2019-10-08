document.addEventListener('DOMContentLoaded', function () {

    var firstDiv = document.getElementsByTagName('body')[0].children[0]

    var classHostList = [{
        hostname: '36kr.com',
        appclass: 'kr36'
    }]

    //是否开启插件
    var isOpen = true
    //imgMode是否是无图模式 true无图模式
    var noImgMode = false


    if (chrome.storage) {
        chrome.storage.local.get({
            'mode_open': true
        }, function (result) {

            isOpen = result['mode_open']

            if (isOpen) {

                chrome.storage.local.get({
                    'mode_img': false
                }, function (result1) {
                    noImgMode = result1['mode_img']
                    if (noImgMode) {
                        firstDiv.classList.add('no_img')
                    }
                })

                classHostList.map(function (elem) {
                    if (window.location.hostname === elem.hostname) {
                        firstDiv.classList.add(elem.appclass)
                    }
                })
            }

        })
    }

});