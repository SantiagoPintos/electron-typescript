import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld('api', {
    send: (channel: string, data: object) => ipcRenderer.send(channel, data)
});

