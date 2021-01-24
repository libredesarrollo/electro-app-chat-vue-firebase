const { app, BrowserWindow } = require('electron')

function createWindow(){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreference: {
            nodeIntegration:true
        }
    })

    if(process.env.DEBUG= true){
        win.loadURL("http://localhost:8080/");
    }else
        win.loadURL('file://'+__dirname+'/dist/index.html')
}

app.on('ready', createWindow)