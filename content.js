get_data().then((data) => {
    change_element(data);
});

async function get_data () {
    const data = await browser.storage.local.get({ enable_claude: false, enable_gemini: false, enable_chatgpt: false});
    return data;
}

function change_element (data) {
    if (data.enable_claude == true) {
        const element = document.querySelector('.whitespace-nowrap.font-voice.leading-none.text-primary');

        const observer = new MutationObserver(() => {
            if (element.textContent == "Claude"){
                document.querySelector('.whitespace-nowrap.font-voice.leading-none.text-primary').textContent = "Klaudíčko";
            } 
        });

            observer.observe(document.body, { childList: true, subtree: true });
                    
    }
}