const wrapper = document.querySelector(".sliderWrapper");
const headerItems = document.querySelectorAll(".headerItem");

//  Adds slide function to section
headerItems.forEach ((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
