const electron = require( 'electron' );
const path = require( 'path' );
const isDev = require( 'electron-is-dev' );
const { exec } = require( 'child_process' );

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

electron.ipcMain.on( 'start-service' , ( event, arg ) => {
  const source = exec( arg.command );
  const onData = (data) => {
    mainWindow.webContents.send( 'service-received-output', { output: data } );
  };

  source.stdout.on( 'data', onData );
  source.stderr.on( 'data', onData );
})
