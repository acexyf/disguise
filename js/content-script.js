document.addEventListener('DOMContentLoaded', function () {

    var firstDiv = document.getElementsByTagName('body')[0].children[0]

    var classHostList = [{
        hostname: '36kr.com',
        appclass: 'kr36'
    }]

    //imgMode是否是无图模式 true无图模式
    var noImgMode = false
    if (noImgMode) {
        firstDiv.classList.add('no_img')
    }

    classHostList.map(function (elem) {
        if (window.location.hostname === elem.hostname) {
            firstDiv.classList.add(elem.appclass)
        }
    })

});