const { app, BrowserWindow } = require('electron')
const client = require('discord-rich-presence')('792378208985153566');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

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

client.updatePresence({
  largeImageKey: 'icon',
  startTimestamp: Date.now(),
  instance: true,
});