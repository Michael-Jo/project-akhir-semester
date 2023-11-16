document.addEventListener("DOMContentLoaded", () => {
    //definer
    function toggleHide() {
        const body = document.body;
        body.classList.toggle('hide');

        const isHidden = body.classList.contains('hide');
        document.cookie = `hideMode=${isHidden};`
    }
    // Web ask cookie for true/false then add hide if true
    window.addEventListener('load', () => {
        const cookie = document.cookie;
        if (cookie.includes('hideMode=true')) {
        document.body.classList.add('hide');
        }
    });

    //trigger
    document.querySelector(".org").addEventListener('click', () => {
        document.getElementsByClassName('.target').toggleHide(); // doesn't work even helped by Chat GPT
    });
})