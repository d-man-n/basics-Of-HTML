let keysModal = {
    ESC: 27,
};

const modalBtnZvonok = document.querySelectorAll('.zvonok');
const modalBtnVopros = document.querySelectorAll('.vopros');
const modalZvonok = document.querySelector('.modal-bg_zvonok');
const modalVopros = document.querySelector('.modal-bg_vopros');
const modalSend = document.querySelector('.modal-bg_send');
const modalClose = document.querySelectorAll('.modal__close');

function showModal(type) {
    if (type === 'zvonok') {
	modalZvonok.classList.add('modal-bg__showed');
    }
    if (type === 'vopros') {
	modalVopros.classList.add('modal-bg__showed');
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === keysModal.ESC) {
            closeModal();
        }
    });
}

function closeModal() {
    modalZvonok.classList.remove('modal-bg__showed');
    modalVopros.classList.remove('modal-bg__showed');
    modalSend.classList.remove('modal-bg__showed');
}

for (let i = 0; i < modalBtnZvonok.length; i++) {
    modalBtnZvonok[i].addEventListener('click', () => showModal('zvonok'));
}

for (i = 0; i < modalBtnVopros.length; i++) {
    modalBtnVopros[i].addEventListener('click', () => showModal('vopros'));
}

for (i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', closeModal);
}