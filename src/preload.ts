import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('api', {
    send: (channel: string, data: object) => ipcRenderer.send(channel, data)
});

