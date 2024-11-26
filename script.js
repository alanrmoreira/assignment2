var elems = document.getElementsByClassName('btn');

for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', (e)=> handleClick(e), false);
}

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

const setActiveExp = (company) =>{
    document.getElementById(company).setAttribute('class', 'professional-experience active-exp');
}