const feature_enable = {
    enable_claude: false,
    enable_gemini: false,
    enable_chatgpt: false
};

function initCheckboxListeners() {
    const claudeBox = document.getElementById('InputClaude');
    const geminiBox = document.getElementById('InputGemini');
    const chatgptBox = document.getElementById('InputChatGPT');

    claudeBox.addEventListener('change', (e) => {
        feature_enable.enable_claude = e.target.checked;
        browser.storage.local.set({ enable_claude: e.target.checked });
    });

    geminiBox.addEventListener('change', (e) => {
        feature_enable.enable_gemini = e.target.checked;
        browser.storage.local.set({ enable_gemini: e.target.checked });
    });

    chatgptBox.addEventListener('change', (e) => {
        feature_enable.enable_chatgpt = e.target.checked;
        browser.storage.local.set({ enable_chatgpt: e.target.checked });
    });
}

initCheckboxListeners();