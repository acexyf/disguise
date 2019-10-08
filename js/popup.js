
document.addEventListener('DOMContentLoaded', function () {
    var imgModeInput = document.getElementsByClassName('disguiser_img_input')[0],
        openModeInput = document.getElementsByClassName('disguiser_open_input')[0]

    if (chrome.storage) {
        chrome.storage.local.get({
            'mode_img': false
        }, function (result) {
            console.log(result)
            imgModeInput.checked = result['mode_img']
        })
        chrome.storage.local.get({
            'mode_open': false
        }, function (result) {
            console.log(result)
            imgModeInput.checked = result['mode_img']
        })
    }

    imgModeInput.onchange = function () {
        var checked = this.checked
        if (checked) {
            document.getElementsByTagName('body')[0].children[0].classList.add('no_img')
        } else {
            document.getElementsByTagName('body')[0].children[0].classList.remove('no_img')
        }
        if (chrome.storage) {
            chrome.storage.local.set({ 'mode_img': checked });
        }
    }

    openModeInput = function () {
        var checked = this.checked
        if (chrome.storage) {
            chrome.storage.local.set({ 'mode_open': checked });
        }
    }


});    
