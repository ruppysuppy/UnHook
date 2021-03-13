const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
  constructor(iconPath, isDev, filePath) {
    super({
      height: 400,
      width: 350,
      frame: false,
      hasShadow: true,
      resizable: false,
      show: isDev,
      skipTaskbar: !isDev,
      icon: iconPath,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    isDev ? this.loadURL("http://localhost:3000/") : this.loadFile(filePath);
    this.on("blur", () => !isDev && this.hide());
  }
}

module.exports = MainWindow;
