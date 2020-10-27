const { app, ipcMain } = require('electron')
const path = require('path')

const AppTray = require("./app/AppTray")
const InfoWindow = require("./app/InfoWindow")
const MainWindow = require("./app/MainWindow")

const DataIO = require("./DataIO")

const status = {
    DEVELOPMENT: "DEVELOPMENT",
    PRODUCTION: "PRODUCTION"
}

process.env.NODE_ENV = status.PRODUCTION

const isMac = process.platform === 'darwin'
const isWin = process.platform === 'win32'
const isDev = process.env.NODE_ENV === status.DEVELOPMENT

if (isWin) {
    app.setAppUserModelId(app.name)
}

let mainWindow = null
let infoWindow = null
let tray = null

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
    app.quit()
}

function createMainWindow() {
    mainWindow = new MainWindow(
        path.join(__dirname, "assets", "img", "logo-white.png"),
        isDev, path.join(__dirname, "front-end", "build", "index.html")
    )

    ipcMain.on("app:ready", () => mainWindow.webContents.send("time:set", DataIO.readData()))
    ipcMain.on("time:save", (_, time) => DataIO.saveData(time))
}

function createTray() {
    tray = new AppTray(
        path.join(__dirname, "assets", "img", "tray-icon.png"),
        isDev,
        isWin,
        mainWindow
    )
}

function createInfoWindow() {
    infoWindow = new InfoWindow(
        path.join(__dirname, "assets", "img", "logo-white.png"),
        path.join(__dirname, "info-window", "index.html")
    )

    ipcMain.on("info:close", () => {
        infoWindow.close()
        infoWindow = null
    })
}

const initialize = () => {
    createMainWindow()
    createTray()
    !isDev && createInfoWindow()

    ipcMain.on("timer:update", (_, time) => isWin ?
        tray.setToolTip(time.length > 0 ? `UnHook\nTime Left: ${time}` : "")
        : tray.setTitle(time))
}

app.on('ready', initialize)

app.on('window-all-closed', () => {
    if (isMac) {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        initialize()
    }
})

app.on("second-instance", () => {
    if (mainWindow) {
        setTimeout(() => {
            mainWindow.center()
            mainWindow.show()
            mainWindow.focus()
        }, 1000)
    }
})