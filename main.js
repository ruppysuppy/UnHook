const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null
const isMac = process.platform === 'darwin' ? true : false
const isWin = process.platform === 'win32' ? true : false

function createMainWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 450,
        icon: path.join(__dirname, "assets", "img", "logo-black.png"),
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL('http://localhost:3000/')
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
    if (isMac) {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow()
    }
})

if (isWin) {
    app.setAppUserModelId(app.name)
}