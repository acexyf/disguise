
document.addEventListener('DOMContentLoaded', function () {
    var imgModeInput = document.getElementsByClassName('disguiser_img')[0]
    console.log(chrome, chrome.storage)
    if (chrome.storage) {
        chrome.storage.local.get({
            'mode_img': false
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


});    
