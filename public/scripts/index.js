'use strict';

const toggleCheck = function (currElement) {
    console.log(currElement);
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    if (isMobile) {
        currElement.querySelector('.author').classList.toggle('author--active');
        currElement.querySelector('.author__button').classList.toggle('author__button--active');
        currElement.querySelector('.author__inner').classList.toggle('hidden');
        currElement.querySelector('.author__modal').classList.toggle('author__modal--active');
        currElement.querySelector('.author__links').classList.toggle('author__links--active');
        currElement.querySelector('.author__links--inner').classList.toggle('author__links--inner--active');
    }
};

window.document.addEventListener('click', function (evt) {
    let currElement = this.querySelector('.article');
    const button = evt.target.closest('.author__button');
    if (!button) {
        const modal = this.querySelector('.author__links');
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            if (this.querySelector('.author__button').classList.contains('author__button--active')) toggleCheck(currElement);
        }
        return;
    }
    toggleCheck(currElement);
    this.querySelector('.author__links').classList.toggle('hidden');
});
