
document.addEventListener('DOMContentLoaded', function () {
    var imgModeInput = document.getElementsByClassName('disguiser_img_input')[0],
        openModeInput = document.getElementsByClassName('disguiser_open_input')[0]

    if (chrome.storage) {
        chrome.storage.local.get({
            'mode_img': false,
            'mode_open': true
        }, function (result) {
            console.log(result)
            imgModeInput.checked = result['mode_img']
            openModeInput.checked = result['mode_open']
        })

        imgModeInput.onchange = function () {
            var checked = this.checked
            console.log(checked, 'imgModeInput')
            chrome.storage.local.set({ 'mode_img': checked });
        }

        openModeInput.onchange = function () {
            var checked = this.checked
            console.log(checked, 'openModeInput')
            chrome.storage.local.set({ 'mode_open': checked });
        }
    }

});    
