const { BrowserWindow } = require("electron");

class InfoWindow extends BrowserWindow {
  constructor(iconPath, filePath) {
    super({
      height: 175,
      width: 300,
      frame: false,
      resizable: false,
      hasShadow: true,
      icon: iconPath,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.loadFile(filePath);
  }
}

module.exports = InfoWindow;
