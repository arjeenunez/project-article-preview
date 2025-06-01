document.querySelector('.author').addEventListener('click', function (evt) {
    const button = evt.target.closest('.author__button');
    if (!button) return;
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    if (isMobile) {
        this.classList.toggle('author--active');
        button.classList.toggle('author__button--active');
        this.querySelector('.author__inner').classList.toggle('hidden');
        this.querySelector('.author__modal').classList.toggle('author__modal--active');
        this.querySelector('.author__links').classList.toggle('author__links--active');
        this.querySelector('.author__links--inner').classList.toggle('author__links--inner--active');
    }
    this.querySelector('.author__links').classList.toggle('hidden');
});
