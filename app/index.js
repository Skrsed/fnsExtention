const registerListners = () => {
    chrome.tabs.onActivated.addListener(makeHandler('onActivated'))
    chrome.tabs.onCreated.addListener(makeHandler('onCreated'))
    chrome.tabs.onUpdated.addListener(makeHandler('onUpdated'))
}

const makeHandler = (event) => {
    console.log(`event: ${event}`)

    console.log({ tabsObject: chrome.tabs })

    return inject
}

const inject = async (tab) => {
    console.log({ tab })
    try {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.tabId
            },
            func: () => {
                document.body.style.border = "5px solid green"
            },
        });
    } catch (err) {
        console.error(`failed to execute script: ${err}`)
    }
}

registerListners()