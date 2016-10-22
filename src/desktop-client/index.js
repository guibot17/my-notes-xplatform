const {app, globalShortcut, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {

  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadURL(`file://${__dirname}/renderer/index.html`);

  globalShortcut.register('CmdOrCtrl+Shift+d', ()=> {
    win.webContents.toggleDevTools();
  })

  win.on('closed', () => {
    win = null
  })
}

app.on('quit', ()=>{
  globalShortcut.unregisterAll();
});

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
