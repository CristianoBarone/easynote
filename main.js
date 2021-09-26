const { app, BrowserWindow, Menu, contextBridge } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    minWidth: 300,
    height: 240
  })

  win.setMenuBarVisibility(false)
  win.setTitle("Easynote")
  win.loadFile('index.html')
  // win.setAlwaysOnTop(true)
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  /*if (process.platform === 'darwin') {
      
  }*/
}).then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
