
document.addEventListener('DOMContentLoaded', function () {
    var imgModeInput = document.getElementsByClassName('disguiser_img')[0]
    if (chrome, chrome.storage) {
        chrome.storage.local.get({
            'mode_img': false
        }, function (result) {
            console.log(result)
            imgModeInput.checked = result['mode_img']
        })
    }

    imgModeInput.onchange = function () {
        var checked = this.checked
        if (chrome.storage) {
            chrome.storage.local.set({ 'mode_img': checked });
        }
    }


});    
