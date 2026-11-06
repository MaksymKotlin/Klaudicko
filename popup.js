const claudeBox = document.getElementById('InputClaude');
const geminiBox = document.getElementById('InputGemini');
const chatgptBox = document.getElementById('InputChatGPT');

browser.storage.local.get(['enable_claude', 'enable_gemini', 'enable_chatgpt'])
    .then((data) => {
        claudeBox.checked = data.enable_claude || false;
        geminiBox.checked = data.enable_gemini || false;
        chatgptBox.checked = data.enable_chatgpt || false;
    });

function initCheckboxListeners() {
    claudeBox.addEventListener('change', () => {
        browser.storage.local.set({ enable_claude: claudeBox.checked });
    });

    geminiBox.addEventListener('change', () => {
        browser.storage.local.set({ enable_gemini: geminiBox.checked });
    });

    chatgptBox.addEventListener('change', () => {
        browser.storage.local.set({ enable_chatgpt: chatgptBox.checked });
    });
}

initCheckboxListeners();