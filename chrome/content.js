if (!globalThis.browser) {
    globalThis.browser = chrome;
}

async function get_data () {
    const data = await browser.storage.local.get({
        enable_claude: false,
        enable_gemini: false,
        enable_chatgpt: false
    });
    return data;
}

get_data().then((data) => {
    change_element(data.enable_claude, '.whitespace-nowrap.font-voice.leading-none.text-primary', "Claude", "Klaudíčko");
    change_element(data.enable_gemini, '.gemini-sidenav-text.gds-title-l-emphasized.expanded.ng-star-inserted', "Gemini", "Geminíčko");
    change_element(data.enable_chatgpt, '.xscx635.x18lfmpt.xaix7q5.x1wegvxj.xrgbmkh.xuxw1ft', "ChatGPT", "Četíčko");
});

function change_element (enabled, selector, oldName, newName) {
    if (!enabled) return;

    const rename = () => {
        document.querySelectorAll(selector).forEach((element) => {
            if (element.textContent.trim() === oldName) {
                element.textContent = newName;
            }
        });
    };

    rename();
    const observer = new MutationObserver(rename);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
}