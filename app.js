import './style.scss';

import Splitting from 'splitting';

import { Animations, Form, Grid } from './src/scripts';

class Display {
    constructor() {
        // Header
        this.header = document.querySelector('.header');
        //  Intro Speech
        this.introSpeech = document.querySelector('.intro-speech');
        this.introSpeechTextContainer = this.introSpeech.querySelector('.intro-speech__text-container');
        this.introSpeechImageContainer = this.introSpeech.querySelector('.intro-speech__image-container');
        // Intro Name
        this.introName = document.querySelector('.intro-name');
        this.introNameTitle = this.introName.querySelector('.intro-name h1');
        //  Intro Job
        this.introJob = document.querySelector('.intro-job');
        this.introJobTitle = this.introJob.querySelector('.intro-job h2');
        // Pojects
        this.projectsTitleContainer = document.querySelector('.projects-title-container');
        this.projectsTitleWrapper = this.projectsTitleContainer.querySelector('.projects-title-wrapper');
        //  Kiné Project
        this.kineProject = document.querySelector('#kine-project');
        this.kineProjectDevice = this.kineProject.querySelector('.project__device-container');
        this.kineProjectDetail = this.kineProject.querySelector('.project__detail');
        this.kineProjectPhoneImage = this.kineProject.querySelector('#kine-project-phone-image');
        this.kineProjectScreenImage = this.kineProject.querySelector('#kine-project-screen-image');
        // Groupomania
        this.groupomaniaProject = document.querySelector('#groupomania-project');
        this.groupomaniaProjectDevice = this.groupomaniaProject.querySelector('.project__device-container');
        this.groupomaniaProjectDetail = this.groupomaniaProject.querySelector('.project__detail');
        // Design Tools
        this.designToolsProject = document.querySelector('#design-tools-project');
        this.designToolsProjectDevice = this.designToolsProject.querySelector('.project__device-container');
        this.designToolsProjectDetail = this.designToolsProject.querySelector('.project__detail');
        // Github
        this.githubWrapper = document.querySelector('.github-wrapper');
        this.githubSection = this.githubWrapper.querySelector('.github');
        this.githubGridBoxContainer = this.githubWrapper.querySelector('.github-grid-box-container');
        this.githubGridDates = this.githubWrapper.querySelector('.github-grid-dates');
        // Skills
        this.skillsWrapper = document.querySelector('.skills-wrapper');
        this.skillsSection = this.skillsWrapper.querySelector('.skills');
        // Contact
        this.contactSection = document.querySelector('.contact')
        this.contactLeft = this.contactSection.querySelector('.contact__left')
        this.contactRight = this.contactSection.querySelector('.contact__right')
        this.contactTitle = this.contactSection.querySelector('.contact__title')

        
        this.currentScreenWidthSize = '';
        this.currentScreenHeightSize = window.innerHeight || document.documentElement.clientHeight;

        this.splitting = Splitting();
        this.form = new Form();
        this.githubGrid = new Grid(this);
        this.animations = new Animations(this);

        this.init();
    }

    init() {
        this.setMinHeightSizeSection(this.currentScreenHeightSize);
        this.initHeader();
        this.animations.init();
        this.githubGrid.displayGrid(window.innerWidth < 768 ? 'smallScreen' : 'largeScreen');
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
            this.githubGrid.displayGrid(newSize);
            this.currentScreenWidthSize = newSize;
        } else if (newSize === 'smallScreen') {
            this.animations.kineProjectScrollTrigger.refresh();
        }
    }
}

new Display();
