const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
process.env.GOOGLE_API_KEY = "AIzaSyBMbArU0qJJusHE-rKuI839Sy36K0q8900"
let win

function creatWindow() {
    win = new BrowserWindow({frame: true, width: 1360, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}
app.on('ready',creatWindow)