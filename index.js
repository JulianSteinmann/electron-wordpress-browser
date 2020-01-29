'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var url = '/app.html';

// Quit when all windows are closed.
app.on('window-all-closed', function(event) {
  app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: { nodeIntegration: true, allowRunningInsecrueContent: true, webSecurity:false }
  });
  // load_window();
  mainWindow.loadURL('file:' + __dirname + '/app.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function(event) {
    mainWindow = null;
  });
  // mainWindow.webContents.openDevTools();


});

// when you click the app dock icon to re-initilize window
app.on('activate', function() {
  if ( mainWindow == null ) {
    mainWindow = create_window();

    load_window();

    // Emitted when the window is closed.
    mainWindow.on('closed', function(event) {
      mainWindow = null;
    });
  }
});







// load window function, loads the url into browser
function load_window() {
    mainWindow.loadURL(url)

    // mainWindow.webContents.session.webRequest.onHeadersReceived({}, (d, c) => {
    //   if(d.responseHeaders['x-frame-options'] || d.responseHeaders['X-Frame-Options']){
    //     delete d.responseHeaders['x-frame-options'];
    //     delete d.responseHeaders['X-Frame-Options'];
    //   }
    //   c({cancel: false, responseHeaders: d.responseHeaders});
    // });
    // mainWindow.webContents.executeJavaScript(`
      document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterbegin', url);
    //
    // `) // <--- this does not execute with electron-3.0.0-beta.1

}
