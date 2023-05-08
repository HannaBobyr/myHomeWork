const headerNav = document.querySelector(".header-nav__list");
function headerNavClick() {
const headerNavItem=document.querySelectorAll(".header-nav__link")
headerNav.addEventListener("click", (event) => {
    if (!(event.target === event.currentTarget)) {
        headerNavItem.forEach(element => {
            element.classList.remove("header-nav__link--active");
        });
        event.target.classList.add('header-nav__link--active');
    }
})
};
headerNavClick();

function headerBurger() {
    const burgerBtn = document.querySelector(".burger-button");
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("burger-button--opened");
        headerNav.classList.toggle("header-nav__list--active")
    })
}
headerBurger()