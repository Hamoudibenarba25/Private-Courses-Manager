const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('ptmNative',{backupSnapshot:(json)=>ipcRenderer.invoke('ptm:backup',json)});
