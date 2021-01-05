const imagesLink = [
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTh8fHxlbnwwfHx8&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1602192103201-d763907bc41b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    , "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    , "https://images.unsplash.com/photo-1599307767316-776533bb941c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1080&q=60"
    , "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1080&q=60"
],
    imgs = document.querySelectorAll(".img-grid");
let counter = 0;

setInterval(imageChanger, 3000);

function imageChanger() {
    let c = counter;
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.backgroundImage = `url(${imagesLink[c]})`;
        c = next(c);
    }
    counter = next(counter);
}

function next(n) {
    return n < imagesLink.length - 1 ? n + 1 : 0;
}