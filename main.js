// header
var header = document.querySelector("header"),
    sublistArrow = document.querySelectorAll(".sublist-arrow"),
    sideSubLists = document.querySelectorAll(".side-nav-sub-list"),
    sideNavClose = document.querySelector(".close-nav-button"),
    sideNav = document.querySelector(".side-nav"),
    sideNavOverlay = document.querySelector(".overlay"),
    hamburgerButton = document.querySelector(".hambuger-bars");
// fixed header
window.addEventListener('scroll',function(){
    if(window.scrollY > 104){
        header.style.position = 'fixed';
        header.style.height = '92.45px';
        header.style.background = 'rgba(0, 0, 0, 0.795)';
        header.style.width = '100%';
        header.style.zIndex = '98';
        sideNav.style.opacity = '0.9';
    }else{
        header.style.position = 'static';
        header.style.height = '0px';
        header.style.background = 'none';
        header.style.width = '100%';
        header.style.zIndex = '0';
        sideNav.style.opacity = '1';
    }
});
// side nav close button - overlay close - hamburger open
hamburgerButton.addEventListener('click',function(){
    sideNav.style.transform = 'translateX(770px)';
    sideNavOverlay.style.visibility = 'visible';
    sideNavOverlay.style.opacity = '1';
});
sideNavOverlay.addEventListener('click',function(){
    sideNav.style.transform = 'translateX(-770px)';
    sideNavOverlay.style.visibility = 'hidden';
    sideNavOverlay.style.opacity = '0';
    [...sideSubLists].forEach(element => {
        element.style.visibility = 'hidden'
        element.style.height = "0px";
    });
});
sideNavClose.addEventListener('click',function(){
    sideNav.style.transform = 'translateX(-770px)';
    sideNavOverlay.style.visibility = 'hidden';
    sideNavOverlay.style.opacity = '0';
    [...sideSubLists].forEach(element => {
        element.style.visibility = 'hidden'
        element.style.height = "0px";
    })
});
window.addEventListener("resize",function(){
    if(document.body.clientWidth > 991){
        sideNav.style.transform = 'translateX(-770px)';
        sideNavOverlay.style.visibility = 'hidden';
        sideNavOverlay.style.opacity = '0';
        [...sideSubLists].forEach(element => {
            element.style.visibility = 'hidden'
            element.style.height = "0px";
        });
    }
});
// side nav dropdown menu
[...sublistArrow].forEach((element,index) => {
    element.onclick = () => {
        if(window.getComputedStyle([...sideSubLists][index]).visibility === "visible"){
            [...sideSubLists][index].style.visibility = "hidden";
            [...sideSubLists][index].style.height = "0px";
        }else{
            [...sideSubLists][index].style.visibility = "visible";
            if(index == sublistArrow.length - 1){
                [...sideSubLists][0].style.visibility = "hidden";
                [...sideSubLists][0].style.height = "0px";
                [...sideSubLists][index].style.height = "330px";
            }else{
                [...sideSubLists][1].style.visibility = "hidden";
                [...sideSubLists][1].style.height = "0px";
                [...sideSubLists][index].style.height = "230px";
            }
        }
    }
})
// streams slider
var sliderPlayBtnAn = document.querySelectorAll('.play-btn-span'),
    sliderPlayBtns = document.querySelectorAll(".streams .container .slider div .play-btn"),
    sliderBottomTexts = document.querySelectorAll('.streams .container .slider div div');
window.addEventListener("load",function(){
    // slider play button
    [...sliderPlayBtnAn].forEach((element)=>{
        element.style.width =  `${element.parentElement.querySelector('.play-btn').clientWidth}px`;
        element.style.height =  `${element.parentElement.querySelector('.play-btn').clientHeight}px`;
    });
    // slider bottom text
    [...sliderBottomTexts].forEach((element)=>{
        element.style.height = `${element.querySelector('img').clientHeight}px`
    })
})
window.addEventListener("resize",function(){
    // slider play button
    [...sliderPlayBtnAn].forEach((element)=>{
        element.style.width =  `${element.parentElement.querySelector('.play-btn').clientWidth}px`;
        element.style.height =  `${element.parentElement.querySelector('.play-btn').clientHeight}px`;
    });
    // slider bottom text
    [...sliderBottomTexts].forEach((element)=>{
        element.style.height = `${element.querySelector('img').clientHeight}px`
    })
});
// [...sliderPlayBtns].forEach((element)=>{
//     element.addEventListener('click',function(){

//     });
// });
// matches
var matchesYtBtn = document.querySelectorAll('.yt-btn img'),
    videosOverlay = document.querySelectorAll('.overlay-background'),
    iframes = document.getElementsByTagName("iframe"),
    urls = [];
for(let i = 0 ; i < [...iframes].length;i++){
    urls.push([...iframes][i].getAttribute('src'))
};
[...matchesYtBtn].forEach((element,index)=>{
    element.addEventListener('click',()=>{
        if(window.getComputedStyle(document.querySelector(`.overlayvid-${index}`)).display === "none"){
            document.querySelector(`.overlayvid-${index}`).style.display = 'block';
        }else{
            document.querySelector(`.overlayvid-${index}`).style.display = 'none';
        };
    });
});
[...videosOverlay].forEach((element,index) =>{
    element.addEventListener('click',()=>{
        document.querySelector(`.overlayvid-${index}`).style.display = 'none';
        var iframe = document.getElementsByTagName("iframe")[index];
        iframe.setAttribute('src', '');
        iframe.setAttribute('src', urls[index]);
    });
});
// matches section counter
var matchCounters = document.querySelectorAll(".matches .container .counters > div h1");
const countSpeed = 500;
let counterint = setInterval(() => {
    if (window.scrollY > 3185) {
        clearInterval(counterint);
    };
    if(window.scrollY > 3182){
        matchCounters.forEach((element)=>{
            const updateCount = () =>{
                const target = +element.getAttribute('data-target');
                const count = +element.innerText;
                
                const inc = target / countSpeed;
                if(count < target){
                    element.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount,1);
                }else{
                    element.innerText = target;
                }
            }; 
            updateCount();
        });
    }; 
}, 1);
// about us slider