const {app, BrowserWindow} = require('electron')
const windowStateKeeper = require('electron-window-state')
let win;

function createWindow()
{
    let mainWindowState = windowStateKeeper({
        defaultHeight:500,
        defaultWidth:800
    })
    const win = new BrowserWindow({
        width:mainWindowState.width,
        height:mainWindowState.height,
        // frame:false,
        //backgroundColor:"#ff0000",
        //alwaysOnTop:true,
        title:"Electron Js Demo",
        //resizable:false,
        webPreferences:{
            nodeIntegration: true
        }
    });
    // let child = new BrowserWindow({
    //     parent:win
    // });
     win.loadFile('index.html')
    //win.loadURL('https://mediasoftbd.com/')
    //win.loadURL('http://192.168.1.36:92/home')
}
// app.whenReady().then(createWindow);
// app.on('before-quit',()=>{
//     console.warn('app is before quit')
// })


// app.on('will-quit',()=>{
//     console.warn('after quit')
// })

// app.on('browser-window-focus',()=>{
//     console.warn('Window Focus')
// })

// app.on('browser-window-blur',()=>{
//     console.warn('blur page')
// })

app.on('ready',()=>{
    console.warn(app.isReady())
    createWindow();
    console.warn('app is on')
})