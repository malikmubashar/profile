const body = document.querySelector('body');

function action(elem=(()=>{throw new Error('Elem is mssing')})(),duration) {
    const el = document.querySelector(elem);

    el.classList.add('animated');
    if(duration)el.style.animationDuration = duration;

    if(el.getBoundingClientRect().top < window.innerHeight) el.classList.add("_a");
    else el.classList.remove("_a");
}

body.onload = actionPerformer;
body.onscroll = actionPerformer;

function actionPerformer() {
    action('#presentation div');
    action('#presentation .flexs','3s');
    action('#jsdesign');
    action('#slides');
    action('#skillset ul');
    action('#aboutme');
}