(function(){
    const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

    const formModal = document.querySelector('#form-modal');
    
    const openFormModalBtn = document.querySelector('.cart__button');
    const launchBtn = document.querySelector('#launch-btn');
    const closeBtns = document.querySelector('.close-btn');
    
    openFormModalBtn.addEventListener('click', (event) => {
    console.log(event)
        formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
    })
    
    const closeFormModal = () => {
        formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
    };
    
    closeBtns.addEventListener('click', (event) => {
        console.log('close');
        formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
    });
})();
