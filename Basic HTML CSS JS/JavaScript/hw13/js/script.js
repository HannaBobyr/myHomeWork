let img=document.querySelectorAll('.image-to-show')
let i = 0;
let timer;
function imgShow(){
    document.images[0].src = img[i].src;
    i++;
    if (i > 3) i = 0;
    timer = setTimeout(imgShow, 2000);
};

let btnStop = document.querySelector('.btn-stop');
btnStop.addEventListener('click', ()=> {
    clearTimeout(timer);
})

let btnContinue = document.querySelector('.btn-continue');
btnContinue.addEventListener('click', ()=> {
    timer = setTimeout(imgShow, 2000);
})
