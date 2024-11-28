var buttons = document.getElementsByClassName('btn');



const handleClick = (e) => {

    let previousActiveBtn = document.getElementsByClassName('active-btn');
    let previousActiveExp = document.getElementsByClassName('active-exp');

    previousActiveBtn[0].setAttribute('class', 'btn');
    previousActiveExp[0].setAttribute('class', 'professional-experience');


    switch (e.target.getAttribute('id')) {

        case "btn-about-me":
            setActiveBtn(e);
            setActiveExp('about-me');
            break;

        case "btn-microcamp":
            setActiveBtn(e);
            setActiveExp('microcamp');
            break;

        case "btn-edpos":
            setActiveBtn(e);
            setActiveExp('edpos');
            break;

        case "btn-brf":
            setActiveBtn(e);
            setActiveExp('brf');
            break;

        case "btn-positec":
            setActiveBtn(e);
            setActiveExp('positec');
            break;

        case "btn-rethink":
            setActiveBtn(e);
            setActiveExp('rethink');
            break;
        default:
            document.getElementById('btn-about-me').setAttribute('class', 'btn active-btn');
            document.getElementById('about-me').setAttribute('class', 'professional-experience active-exp');
    }
}

const setActiveBtn = (item) => {
    item.target.setAttribute('class', 'btn active-btn');
}

const setActiveExp = (company) => {
    document.getElementById(company).setAttribute('class', 'professional-experience active-exp');
}

const handleButtonsHamburger = (buttons, isVisble) => {

    for (let button of buttons) {
        button.setAttribute('style', isVisble ? 'display:block' : 'display:none');
    }
}

const handleHamburgerMenu = () => {

    let menuBar = document.getElementById('menu');

    if (menuBar.getAttribute('class') === 'closed') {

        menuBar.setAttribute('class', 'open');
        menuBar.setAttribute('style', 'height: 20rem; align-items: flex-start');

        handleButtonsHamburger(document.getElementsByClassName('btn'), true);

    } else {

        menuBar.setAttribute('class', 'closed');
        menuBar.setAttribute('style', 'height: 3rem');

        handleButtonsHamburger(document.getElementsByClassName('btn'), false);

    }
}

const controlResizeAndOrientationChange = () => {

    let menuBar = document.getElementById('menu');

    if (screen.width > 671) {

        menuBar.removeAttribute('style');
        menuBar.setAttribute('class', 'closed');

        handleButtonsHamburger(buttons, true);

    } else {

        if (menuBar.getAttribute('class') === 'closed') {
            handleButtonsHamburger(document.getElementsByClassName('btn'), false);
        }
    }
}

for(button of buttons){
    button.addEventListener('click', (e) => handleClick(e), false);
}

window.addEventListener('resize', controlResizeAndOrientationChange);

window.addEventListener("orientationchange", controlResizeAndOrientationChange);