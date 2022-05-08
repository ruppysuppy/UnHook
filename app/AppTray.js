const { app, Menu, Tray } = require("electron");

class AppTray extends Tray {
  constructor(iconPath, isDev, isWin, mainWindow) {
    super(iconPath);

    this.isWin = isWin;
    this.isDev = isDev;
    this.mainWindow = mainWindow;

    this.on("click", this.onClickHandler);
    this.on("right-click", this.onRightClickHandler);
  }

  onClickHandler = (_, bounds) => {
    const { width, height } = this.mainWindow.getBounds();
    const posX = bounds.x - width / 2;
    const posY = this.isWin ? bounds.y - height : bounds.y;

    const updatedBounds = {
      x: posX,
      y: posY,
      height,
      width,
    };

    try {
      this.mainWindow.setBounds(updatedBounds);
    } catch (error) {
      console.log("[LOG] Setting bounds failed");
    }
    this.mainWindow.show();
  };

  onRightClickHandler = () => {
    const contextMenu = Menu.buildFromTemplate([
      ...(!this.isDev
        ? [
            {
              label: "Open",
              click: () => this.mainWindow.show(),
            },
            {
              type: "separator",
            },
          ]
        : []),
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ]);
    this.popUpContextMenu(contextMenu);
  };
}

module.exports = AppTray;
