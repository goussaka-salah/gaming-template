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
// faq dropdown articles
const faqFeedback = document.querySelectorAll('.faq .container .feedback');

faqFeedback.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        element.querySelector('p').classList.add("active");
        faqFeedback.forEach((ele,ind)=>{
            if(ind === index) return;
            ele.querySelector('p').classList.remove("active");
        });
    });
});