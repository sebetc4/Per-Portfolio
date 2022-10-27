import './style.scss';

import Splitting from 'splitting';

import { Animations, Form, Grid }  from './src/scripts';


class Display {
    constructor() {

        this.currentScreenWidthSize = '';
        this.currentScreenHeightSize = window.innerHeight || document.documentElement.clientHeight;

        this.introSpeech = document.querySelector('.intro-speech');
        this.introName = document.querySelector('.intro-name');
        this.introJob = document.querySelector('.intro-job');
        this.kineProject = document.querySelector('#kine-project');
        this.kineProjectDevice = this.kineProject.querySelector('.project__device-container');
        this.skillsWrapper = document.querySelector('.skills-wrapper');

        this.splitting = Splitting();
        this.form = new Form()
        this.githubGrid = new Grid()
        this.animations = new Animations(this)

        this.init();
    }

    init() {
        this.setMinHeightSizeSection(this.currentScreenHeightSize);
        this.initHeader();
        this.animations.init()
        this.githubGrid.display(window.innerWidth < 768 ? 'small-screen' : 'large-screen');
        window.addEventListener('resize', () => this.onResize(), true);

    }

    setMinHeightSizeSection(size) {
        [this.introSpeech, this.introName, this.introJob].forEach((section) => {
            section.style.minHeight = `${size}px`;
        });
    }

    initHeader() {
        const openMenu = () => {
            document.body.classList.add('fixed');
            headerMobileMenuContainer.classList.add('visible');
        };

        const closeMenu = () => {
            document.body.classList.remove('fixed');
            headerMobileMenuContainer.classList.remove('visible');
        };

        const headerMobileMenuContainer = document.querySelector('.header-mobile-menu-container');

        document.querySelector('.header-top__open-menu-button').addEventListener('click', openMenu);

        document.querySelector('.header-mobile-menu__top button').addEventListener('click', closeMenu);

        document.querySelectorAll('.header-mobile-menu__navbar a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        headerMobileMenuContainer.addEventListener('click', (e) => {
            e.target === headerMobileMenuContainer && closeMenu();
        });
    }

    onResize() {
        const newSize =
            window.innerWidth < 768 ? 'smallScreen' : window.innerWidth < 1024 ? 'mediumScreen' : 'largeScreen';
        if (newSize !== this.currentScreenWidthSize) {
            this.animations.kineProjectScrollTrigger.refresh();
            this.displayGithubChart(
                newSize === 'smallScreen' ? 'small-screen' : 'large-screen'
            );
            this.currentScreenWidthSize = newSize;
        } else if (newSize === 'smallScreen') {
            this.animations.kineProjectScrollTrigger.refresh();
        }
    }
}

new Display();
