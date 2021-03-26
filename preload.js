window.addEventListener('DOMCOntentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electorn']) {
        replaceText(`${type}-version`, process.version[type])
    }
})