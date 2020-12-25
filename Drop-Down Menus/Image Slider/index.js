// to make sure the key is always in the array
//  let value = 0;
//  const next = 1;


//  value = (value + next) % array.length;

 const slideController = (() => {
    const _slideLength = () => document.querySelectorAll('img').length
    const _removeActiveClass = () => {
        const actives = document.querySelectorAll('.active');
        actives.forEach(el => {
            el.classList.remove('active')
        })
    }

     const _nextSlideIs = (currentSlide, direction) => {
         currentSlide = Number(currentSlide);
         if (direction > 0) {
            return (currentSlide + 1) % _slideLength();
         } else {
            if (currentSlide !== 0) {
                return (currentSlide - 1) % _slideLength();
             } else {
                 return _slideLength() -1;
             }   
         }

     }

     const _moveSlide = (next) => {
        const nextSlide = document.querySelector(`.images[data-id='${next}']`)
        const nextDot = document.querySelector(`.dot[data-id='${next}']`)
        console.log(nextSlide)
        console.log(next)
        _removeActiveClass()
        // currentSlide.classList.toggle('active')
        nextSlide.classList.toggle('active')
        nextDot.classList.toggle('active')
     }
     
     const advanceSlide = (currentSlide) => {
        const id = currentSlide.dataset.id;
        const next = _nextSlideIs(id, 1);
        _moveSlide(next);
    }

     const reverseSlide = (currentSlide) => {
        const id = currentSlide.dataset.id;
        const next = _nextSlideIs(id, -1);
        _moveSlide(next);
     }

     return { advanceSlide, reverseSlide }
 })();

 let controls = document.querySelectorAll('.slider')
 controls.forEach(button => button.addEventListener('click', (e) => {
    const currentSlide = document.querySelector('.active')
    if (e.target.classList.contains('next')) {
         slideController.advanceSlide(currentSlide)
     } else if (e.target.classList.contains('prev')) {
         slideController.reverseSlide(currentSlide)
     }
 }))