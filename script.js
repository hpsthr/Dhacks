import Highway from '@dogstudio/highway';
import Fade from './transition'

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const preload = document.querySelector('.preload')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const logo = document.querySelector('.logo');
const mclose = document.querySelectorAll('.mclose')
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')
const lfade = document.querySelector('.logo')
const modal = document.getElementById('modal')


const load = () => {
    window.addEventListener('load', () => {
        preload.classList.add("preload-finish");
    });
}

const mClose = () => {
    mclose.forEach(button => {
        button.addEventListener('click', () => {
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.1s ease forwards ${index /3 + 1.5}s`;
                }
            });
            if (nav.classList.contains('nav-active'),
                burger.classList.contains('toggle'),
                logo.classList.contains('activate')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                logo.classList.remove('activate');
            } else {
                nav.classList.add('nav-active');
                burger.classList.add('toggle');
                logo.classList.add('activate');
            }
        })
    })
    burger.addEventListener('click', () => {
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /3 + 1.5}s`;
            }
        });
        if (nav.classList.contains('nav-active'),
            burger.classList.contains('toggle'),
            logo.classList.contains('activate')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            logo.classList.remove('activate');
        } else {
            nav.classList.add('nav-active');
            burger.classList.add('toggle');
            logo.classList.add('activate');
        }
    })
}

const disModal = () => {
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            openModal(modal)
        })
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    });

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active'); // here is html 
        overlay.classList.add('active');
        lfade.classList.add('active')
    };

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
        lfade.classList.remove('active')
    };
}


load();
mClose();
disModal();

