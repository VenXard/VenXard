const sliderBody = document.querySelector('.slider_body');
const sliderItems = Array.from(document.querySelectorAll('.slider_item'));
const sliderNav = document.querySelector('.slider_dots');
const sliderDots = Array.from(document.querySelectorAll('.slider_dot'));
const sliderContent = document.querySelector('.slider_content');

sliderBody.addEventListener('click', function (event) {
    let targetArrow = event.target.closest('.slider_arrow');
    if (!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider_item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider_dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    function changeActive(targetArrow, index) {
        let newActiveIndex;

        if (targetArrow.classList.contains('arrow_left')) {
            newActiveIndex = index - 1;
            if (newActiveIndex < 0) {
                newActiveIndex = sliderItems.length - 1;
            }
        } else {
            newActiveIndex = index + 1;
            if (newActiveIndex >= sliderItems.length) {
                newActiveIndex = 0;
            }
        }

        sliderItems[newActiveIndex].classList.add('active');
        sliderDots[newActiveIndex].classList.add('active');
        scrollSlider(newActiveIndex);
    }

    function scrollSlider(index) {
        sliderContent.style.transform = `translateX(${-index * 100}%)`;
    }
});


sliderNav.addEventListener('click', function (event) {
    let targetDot = event.target.closest('.slider_dot');
    if (!targetDot) return;
    if (targetDot.classList.contains('active')) return;

    document.querySelector('.slider_dot.active').classList.remove('active');
    document.querySelector('.slider_item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    sliderDots[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
});