document.querySelector('#toggle-dark-mode')!.addEventListener('click', async () =>{
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source')!.innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system')!.addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source')!.innerHTML = 'System'
})


const download = (url:string) => {
    console.log(`img url ${url}`);
    window.api.send("download", {
        payload: {
          url
        }
})
}

document.querySelector("#download-img")!.addEventListener('click', () => {
    download("https://pawal.cl/modules/ph_simpleblog/featured/9.jpg");
});

