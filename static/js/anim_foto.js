let t = document.getElementById("cursor");
    e = document.getElementById("cursor2");
    r = document.getElementById("cursor3");
    z = document.getElementById("cursor4");

document.querySelector(".section-row").addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px"
    t.style.top = n.clientY + "px"
    e.style.left = n.clientX + "px"
    e.style.top = n.clientY + "px"
    r.style.left = n.clientX + "px"
    r.style.top = n.clientY + "px"
    z.style.left = n.clientX + "px"
    z.style.top = n.clientY + "px"
});
function n() {
    t.classList.add("hover")
    e.classList.add("hover")
    r.classList.add("hover")
    z.classList.add("hover")
}
function s() {
    t.classList.remove("hover")
    e.classList.remove("hover")
    r.classList.remove("hover")
    z.classList.remove("hover")
}
function o(t) {
    t.addEventListener("mouseover", n); t.addEventListener("mouseout", s)
    // e.addEventListener("mouseover", n); e.addEventListener("mouseout", s)
    // r.addEventListener("mouseover", n); r.addEventListener("mouseout", s)
}
document.addEventListener('DOMContentLoaded', function () {
    let hoverLink = document.querySelectorAll(".hover-img");
    for (let i = 0; i < hoverLink.length; i++){
        o(hoverLink[i]);
        let url = hoverLink[i].getAttribute("data-url");
        hoverLink[i].addEventListener('mouseenter', function () {
            t.style.backgroundImage = "url("+ url +")";
            e.style.backgroundImage = "url("+ url +")";
            r.style.backgroundImage = "url("+ url +")";
            z.style.backgroundImage = "url("+ url +")";
        });
    }
})
// let q = document.getElementById("cursor1");
// document.querySelector(".section-row").addEventListener("mousemove", function(m) {
//     q.style.left = m.clientX + "px"
//     q.style.top = m.clientY + "px"
// });
// function m() {
//     q.classList.add("hover")
// }
// function y() {
//     q.classList.remove("hover")
// }
// function u(q) {
//     q.addEventListener("mouseover", m); q.addEventListener("mouseout", y)
// }
// document.addEventListener('DOMContentLoaded', function () {
//     let hoverLink = document.querySelectorAll(".hover-img");
//     for (let i = 0; i < hoverLink.length; i++){
//         u(hoverLink[i]);
//         let url = hoverLink[i].getAttribute("data-url");
//         hoverLink[i].addEventListener('mouseenter', function () {
//             q.style.backgroundImage = "url("+ url +")";
//         });
//     }
// })
