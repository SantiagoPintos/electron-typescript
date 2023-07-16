const download = (url:string) => {
    console.log(`img url ${url}`);
    window.api.send("download", {
        payload: {
          url
        }
})
}

document.querySelector("#download-img")!.addEventListener('click', () => {
    const URL = document.querySelector<HTMLInputElement>("#download-url")!.value;
    download(URL);
});

