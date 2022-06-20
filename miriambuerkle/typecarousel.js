let words = ['Miriam.', 'a Software Developer.', 'passionate.', 'happy.', 'creative.', 'curious.'];
let index = 0;
let deleting = false;
let text = '';
let word = words[index];
let time = 500;

window.onload = function() { 
    time = deleting ? 300 : 400;
    let carousel = document.getElementById("carousel");
    carousel.innerHTML = text;

    if (deleting) {

        if(text.length == 0) {
            deleting = false;
            index = index + 1;
            word = words[index % words.length];
        } else {
            text = text.substring(0, text.length - 1);
        }
    } else {
        if (text.length == word.length) {
            deleting = true;
            time = 200;
        } else {
            text = text + word.charAt(text.length);

        }
        
    }

    setTimeout(function() {
        window.onload();
    }, time);

}
