function openTab() {

    var newTab = browser.tabs.create({
        url: 'https://twitter.com/abhilekh_gautam',
        active: true
    })
}

browser.browserAction.onClicked.addListener(openTab)