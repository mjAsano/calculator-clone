const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 650,
        minWidth: 400,
        minHeight: 650,
        maxWidth: 400,
        maxHeight: 650,
        titleBarStyle: 'hidden',
        transparent: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0) {
            createWindow()
        }
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

