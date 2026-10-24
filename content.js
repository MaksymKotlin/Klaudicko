const element = document.querySelector('.whitespace-nowrap.font-voice.leading-none.text-primary');

const observer = new MutationObserver(() => {
    if (element.textContent == "Claude"){
        document.querySelector('.whitespace-nowrap.font-voice.leading-none.text-primary').textContent = "Klaudíčko";
        observer.disconnect();
    } else {
        console.log("Element not found or element is Klaudicko")
    }
    
});

observer.observe(document.body, { childList: true, subtree: true });