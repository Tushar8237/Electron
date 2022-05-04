const {app, BrowserWindow} = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width:800,
        height:600,
        // alwaysOnTop: true, .. for always on top
        // title: "electron app",/ for app title 
        // resizable: false, .. for resixable app
        // frame : false, ..for frame hide and show
        // backgroundColor : "#d6d6c2",  for backgraound color change 
        
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    // win.webContents.openDevTools() for dev tools open in window
}

app.whenReady().then(createWindow);

