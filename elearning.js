let links = document.querySelectorAll(".list"); 
links.forEach((link)=>{
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'))
        link.classList.add("active")
    });
})


function scroll(id){
    document.getElementById(id).scrollLeft += 200;
}
function scroll_p(id){
    document.getElementById(id).scrollLeft -= 200;
}


let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
    scroll("all-posts")
});
let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", () => {
    scroll_p("all-posts")
});
