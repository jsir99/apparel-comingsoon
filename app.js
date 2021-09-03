const form = document.getElementById('form')
const email = document.getElementById('email')
const error = document.getElementById('error')
const errorIcon = document.getElementById('error-icon')
const heroImg = document.getElementById('hero-img')

form.addEventListener('submit', (e) =>{
    let errMessage = '';

    if (!email.value.includes('@')){
        errMessage = 'Please provide a valid email.'
        e.preventDefault();
        error.innerText = errMessage;
        form.style.border = '2px solid RGB(249,100,100)'
        errorIcon.style.visibility = 'visible';
    }

})

form.addEventListener ('change', (e)=>{
    
    if (email.value.includes('@')){
        errMessage = ''
        error.innerText = errMessage;
        form.style.border = '1px solid RGB(209,163,165)'
        errorIcon.style.visibility = 'hidden';
    }
})
window.addEventListener('resize',(e)=>{
    if (window.innerWidth <= 768){
        heroImg.attributes[0].nodeValue = 'images/hero-mobile.jpg';
    }
    else {
        heroImg.attributes[0].nodeValue = 'images/hero-desktop.jpg';
    }
})
