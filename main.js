const { app, BrowserWindow } = require('electron')
const path = require('path')

const status = {
    DEVELOPMENT: "DEVELOPMENT",
    PRODUCTION: "PRODUCTION"
}

process.env.NODE_ENV = status.DEVELOPMENT

let mainWindow = null
const isMac = process.platform === 'darwin'
const isWin = process.platform === 'win32'
const isDev = process.env.NODE_ENV === status.DEVELOPMENT

function createMainWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 450,
        frame: false,
        hasShadow: true,
        resizable: false,
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