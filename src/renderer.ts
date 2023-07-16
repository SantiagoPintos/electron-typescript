const download = (url:string) => {
    console.log(`img url ${url}`);
    window.api.send("download", {
        payload: {
          url
        }
})
}

const isUrl = (str: string) => {
    try {
        new URL(str);
        return true;
    } catch (error) {
        console.log(`Not a URL ${error}`);
        return false;  
    }
}

document.querySelector("#download-img")!.addEventListener('click', () => {
    const URL = document.querySelector<HTMLInputElement>("#download-url")!.value;
    isUrl(URL) ? download(URL) : console.error("URL empty");
});

