import './style.scss';
import Splitting from 'splitting';
import { Form } from './src/scripts';
gsap.registerPlugin(ScrollTrigger);

class Display {
    constructor() {
        // Loader
        this.loaderContainer = document.querySelector('.loader-container');
        // Header
        this.header = document.querySelector('.header');
        this.headerMobileMenuContainer = this.header.querySelector('.header-mobile-menu-container');
        // Intro
        this.introSpeech = document.querySelector('.intro-speech');
        this.introSpeechTextContainer = this.introSpeech.querySelector('.intro-speech__text-container');
        this.introSpeechImageContainer = this.introSpeech.querySelector('.intro-speech__image-container');
        this.introName = document.querySelector('.intro-name');
        this.introNameTitle = this.introName.querySelector('.intro-name h1');
        this.introJob = document.querySelector('.intro-job');
        this.introJobTitle = this.introJob.querySelector('.intro-job h2');
        // Projects
        this.projectsTitle = document.querySelector('.projects h2');
        // Kiné Project
        this.kineProject = document.querySelector('#kine-project');
        this.kineProjectDevice = this.kineProject.querySelector('.project__device-container');
        this.kineProjectDetail = this.kineProject.querySelector('.project__detail');
        this.kineProjectPhoneImage = this.kineProject.querySelector('#kine-project-phone-image');
        this.kineProjectScreenImage = this.kineProject.querySelector('#kine-project-screen-image');
        // Groupomania Project
        this.groupomaniaProject = document.querySelector('#groupomania-project');
        this.groupomaniaProjectDevice = this.groupomaniaProject.querySelector('.project__device-container');
        this.groupomaniaProjectDetail = this.groupomaniaProject.querySelector('.project__detail');
        // Design Tools
        this.designToolsProject = document.querySelector('#design-tools-project');
        this.designToolsProjectDevice = this.designToolsProject.querySelector('.project__device-container');
        this.designToolsProjectDetail = this.designToolsProject.querySelector('.project__detail');
        // Github
        this.githubGridBoxsContainer = document.querySelector('.github-grid-boxs-container');
        this.githubGridDates = document.querySelector('.github-grid-dates');
        // Skills
        this.skills = document.querySelector('#skills');

        this.splitting = Splitting();
        this.matchMedia = gsap.matchMedia();

        this.currentScreenWidthSize =
            window.innerWidth < 768 ? 'smallScreen' : window.innerWidth < 1024 ? 'mediumScreen' : 'largeScreen';

        this.kineProjectScrollTrigger;
        this.init();
    }

    init() {
        this.setMinHeightSizeSection(window.innerHeight || document.documentElement.clientHeight);
        this.initHeader();
        // Add Anim
        this.addPinAnim();
        this.addHeaderAnim();
        this.addIntroSpeechAnim();
        this.addIntroNameAnim();
        this.addIntroJobAnim();
        this.addTitleProjectAnim();
        this.addKineProjectAnim();
        this.addGroupomaniaProjectAnim();
        this.addDesignToolsAnim();
        this.displayGithubGrid(window.innerWidth < 768 ? this.smallScreenGithubChart : this.largeScreenGithubChart);
        window.addEventListener('resize', () => this.onResize(), true);
        window.onload = () => {
            this.loaderContainer.classList.add('hidden');
            document.body.classList.remove('fixed');
            setTimeout(() => {
                this.loaderContainer.style.display = 'none';
                this.animateSpeechText();
            }, '300');
        };
    }

    /*
        Init All
    */

    setMinHeightSizeSection(size) {
        [this.introSpeech, this.introName, this.introJob].forEach((section) => {
            section.style.minHeight = `${size}px`;
        });
    }

    initHeader() {
        const openMenu = () => {
            document.body.classList.add('fixed');
            this.headerMobileMenuContainer.classList.add('visible');
        };

        const closeMenu = () => {
            document.body.classList.remove('fixed');
            this.headerMobileMenuContainer.classList.remove('visible');
        };

        this.header.querySelector('.header-top__open-menu-button').addEventListener('click', openMenu);

        this.header.querySelector('.header-mobile-menu__top button').addEventListener('click', closeMenu);

        this.header.querySelectorAll('.header-mobile-menu__navbar a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        this.headerMobileMenuContainer.addEventListener('click', (e) => {
            e.target === this.headerMobileMenuContainer && closeMenu();
        });
    }

    /*
        On Resize
    */

    onResize() {
        const newSize =
            window.innerWidth < 768 ? 'smallScreen' : window.innerWidth < 1024 ? 'mediumScreen' : 'largeScreen';
        if (newSize !== this.currentScreenWidthSize) {
            this.kineProjectScrollTrigger.refresh();
            this.displayGithubGrid(newSize);
            this.currentScreenWidthSize = newSize;
        } else if (newSize === 'smallScreen') {
            this.kineProjectScrollTrigger.refresh();
        }
    }

    /*
        Github Grid
    */

    displayGithubGrid(screenSize) {
        const largeGrid = {
            numberBox: 365,
            coloredBoxList: [
                42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 62, 63, 66, 67, 69, 70, 73, 74, 76,
                77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 101, 103, 104, 107,
                108, 110, 111, 114, 115, 117, 118, 119, 120, 121, 122, 123, 124, 132, 133, 139, 140, 144, 145, 148, 149,
                151, 152, 155, 156, 158, 159, 163, 164, 165, 167, 168, 169, 173, 174, 180, 181, 185, 186, 187, 188, 189,
                190, 192, 193, 196, 197, 199, 200, 201, 202, 203, 204, 205, 206, 209, 210, 214, 215, 221, 222, 226, 227,
                228, 229, 230, 231, 233, 234, 237, 238, 240, 241, 245, 246, 247, 248, 249, 250, 251, 253, 254, 255, 256,
                257, 258, 262, 263, 267, 268, 271, 272, 274, 275, 276, 277, 278, 279, 281, 282, 283, 284, 285, 286, 288,
                289, 290, 291, 294, 295, 296, 297, 298, 299, 303, 304, 308, 309, 312, 313, 316, 317, 318, 319, 322, 323,
                324, 325, 326,
            ],
            monthList: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        const smallGrid = {
            numberBox: 183,
            coloredBoxList: [
                28, 29, 30, 32, 33, 34, 36, 37, 38, 40, 43, 45, 48, 50, 51, 52, 54, 60, 64, 67, 70, 72, 75, 77, 80, 81,
                83, 84, 87, 91, 94, 95, 96, 97, 99, 102, 104, 105, 106, 108, 111, 114, 118, 121, 124, 126, 129, 131,
                134, 136, 137, 140, 141, 142, 145, 148, 151, 153, 154, 155, 156, 158, 159, 160,
            ],
            monthList: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui'],
        };

        const githubGrid = screenSize === 'smallScreen' ? smallGrid : largeGrid;

        const deleteChilds = (parent) => {
            let child = parent.lastElementChild;
            while (child) {
                parent.removeChild(child);
                child = parent.lastElementChild;
            }
        };
        deleteChilds(this.githubGridBoxsContainer);
        deleteChilds(this.githubGridDates);

        for (let i = 0; i < githubGrid.numberBox; i++) {
            const el = document.createElement('div');
            el.classList = `github-grid-boxs-container__box ${githubGrid.coloredBoxList.includes(i) ? 'active' : ''}`;
            this.githubGridBoxsContainer.appendChild(el);
        }
        githubGrid.monthList.forEach((month) => {
            const el = document.createElement('span');
            el.appendChild(document.createTextNode(month));
            this.githubGridDates.appendChild(el);
        });
    }

    /*
        Animations
    */

    animateSpeechText() {
        const tl = gsap.timeline();
        this.splitting.forEach((p) => {
            tl.to(p.chars, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1)', stagger: 0.02 });
        });
    }

    addPinAnim() {
        const getStartKineProjectScrollTrigger = () =>
            this.kineProject.getBoundingClientRect().bottom -
            this.kineProjectDevice.getBoundingClientRect().bottom +
            this.kineProjectDevice.offsetHeight / 2;

        this.kineProjectScrollTrigger = ScrollTrigger.create({
            trigger: this.kineProject,
            pin: true,
            start: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger()} center` : 'center center',
            end: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger() - 900} center` : `top+=900`,
            scrub: 1,
        });
    }

    addHeaderAnim() {
        ScrollTrigger.create({
            trigger: this.introJob,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: this.header },
        });
        ScrollTrigger.create({
            trigger: this.skills,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: this.header },
        });
    }

    addIntroSpeechAnim() {
        gsap.to(this.introSpeechTextContainer, {
            y: 100,
            scrollTrigger: {
                trigger: this.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(this.introSpeechImageContainer, {
            scale: 2,
            scrollTrigger: {
                trigger: this.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addIntroNameAnim() {
        gsap.to(this.introName, {
            backgroundPositionY: 50,
            scrollTrigger: {
                trigger: this.introName,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.fromTo(
            this.introNameTitle,
            { x: '-20%' },
            {
                x: '8%',
                scrollTrigger: {
                    trigger: this.introName,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    addIntroJobAnim() {
        gsap.to(this.introJob, {
            backgroundPositionY: -50,
            scrollTrigger: {
                trigger: this.introJob,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.fromTo(
            this.introJobTitle,
            { x: '20%' },
            {
                x: '-5%',
                scrollTrigger: {
                    trigger: this.introJob,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    addTitleProjectAnim() {
        gsap.fromTo(
            this.projectsTitle,
            {
                y: '25%',
            },
            {
                y: '-10%',
                scrollTrigger: {
                    trigger: this.projectsTitle,
                    start: 'top+=10% bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    addKineProjectAnim() {
        gsap.from(this.kineProjectDevice, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.kineProjectDevice,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(this.kineProjectDetail, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.kineProjectDetail,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(this.kineProjectScreenImage, {
            y: -1720,
            autoAlpha: 1,
            scrollTrigger: {
                markers: true,
                trigger: this.kineProjectPhoneImage,
                start: 'center center',
                end: 'bottom top',
                scrub: 0.25,
                toggleActions: 'play none reverse none',
            },
        });
    }

    addGroupomaniaProjectAnim() {
        gsap.from(this.groupomaniaProjectDevice, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.groupomaniaProjectDevice,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(this.groupomaniaProjectDetail, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.groupomaniaProjectDetail,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addDesignToolsAnim() {
        gsap.from(this.designToolsProjectDevice, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.designToolsProjectDevice,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(this.designToolsProjectDetail, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.designToolsProjectDetail,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }
}

new Display();
new Form();
