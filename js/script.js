// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu diklik
document.querySelector('#humberger_menu').onclick = ()=>{
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#humberger_menu');
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});