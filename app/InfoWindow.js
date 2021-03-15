const { BrowserWindow } = require("electron");

class InfoWindow extends BrowserWindow {
  constructor(iconPath, filePath) {
    super({
      height: 175,
      width: 300,
      frame: false,
      hasShadow: true,
      icon: iconPath,
      resizable: false,
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.loadFile(filePath);
    this.on("ready-to-show", this.show)
  }
}

module.exports = InfoWindow;
