document.querySelector('.author').addEventListener('click', function (evt) {
    const button = evt.target.closest('.author__button');
    if (!button) return;
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    if (isMobile) {
        this.querySelector('.author__inner').classList.toggle('hidden');
        this.querySelector('.author__modal').classList.toggle('author__modal--toggle');
        this.querySelector('.author__links').classList.toggle('author__links--toggle');
        this.querySelector('.author__links--inner').classList.toggle('author__links--inner--toggle');
    }
    this.querySelector('.author__links').classList.toggle('hidden');
});

// document.querySelector('.author__button').addEventListener('click', function (evt) {
//     const isMobile = window.matchMedia('(max-width: 800px)').matches;
//     const parentElement = this.closest('.author__modal');
//     if (isMobile) {
//     }
//     this.closest('.author__modal').querySelector('.author__links').classList.toggle('hidden');
// });
