scrollSpeed = 20;

const scrollDown = () => {
    let scroll = setInterval(() => {
        if(window.scrollY < window.innerHeight){
            window.scroll(0, window.scrollY + scrollSpeed)
        }
        else {
            clearInterval(scroll)
        }
    },1);
}