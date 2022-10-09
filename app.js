import './style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class Display {
    constructor() {
        this.currentScreenSize = '';
        this.kineProjectScrollTrigger;
        this.githubChartboxContainer = document.querySelector('.github-chart-box-container');
        this.githubChartDates = document.querySelector('.github-chart-dates');
        this.largeScreenGithubChart = {
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
        this.smallScreenGithubChart = {
            numberBox: 183,
            coloredBoxList: [
                28, 29, 30, 32, 33, 34, 36, 37, 38, 40, 43, 45, 48, 50, 51, 52, 54, 60, 64, 67, 70, 72, 75, 77, 80, 81,
                83, 84, 87, 91, 94, 95, 96, 97, 99, 102, 104, 105, 106, 108, 111, 114, 118, 121, 124, 126, 129, 131,
                134, 136, 137, 140, 141, 142, 145, 148, 151, 153, 154, 155, 156, 158, 159, 160,
            ],
            monthList: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui'],
        };
        this.init();
    }

    init() {
        this.initIntroSpeechAnimation();
        this.initIntroNameAnimation();
        this.initIntroJobAnimation();
        this.initTitleProjectAnimation();
        this.initKineProjectAnimation();
        this.displayGithubChart(this.largeScreenGithubChart);
        window.addEventListener('resize', () => this.onResize(), true);
    }

    initIntroSpeechAnimation() {
        const introSpeech = document.querySelector('.intro-speech');
        const introSpeechTextContainer = introSpeech.querySelector('.intro-speech__text-container');
        const introSpeechImageContainer = introSpeech.querySelector('.intro-speech__image-container');

        gsap.to(introSpeechTextContainer, {
            y: 200,
            scrollTrigger: {
                trigger: introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(introSpeechImageContainer, {
            scale: 3,
            scrollTrigger: {
                trigger: introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    initIntroNameAnimation() {
        const introName = document.querySelector('.intro-name');
        const introNameTitle = introName.querySelector('.intro-name h1');

        gsap.to(introName, {
            backgroundPositionY: 50,
            scrollTrigger: {
                trigger: introName,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.fromTo(
            introNameTitle,
            { x: '-20%' },
            {
                x: '8%',
                scrollTrigger: {
                    trigger: introName,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    initIntroJobAnimation() {
        const introJob = document.querySelector('.intro-job');
        const introJobTitle = introJob.querySelector('.intro-job h2');

        gsap.to(introJob, {
            backgroundPositionY: -50,
            scrollTrigger: {
                trigger: introJob,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.fromTo(
            introJobTitle,
            { x: '20%' },
            {
                x: '-5%',
                scrollTrigger: {
                    trigger: introJob,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    initTitleProjectAnimation() {
        const projects = document.querySelector('.projects');
        const projectsTitle = projects.querySelector('.projects h2');

        gsap.fromTo(
            projectsTitle,
            {
                y: '25%',
            },
            {
                y: '-50%',
                scrollTrigger: {
                    trigger: projects,
                    start: 'top+=10% bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    initKineProjectAnimation() {
        const kineProject = document.querySelector('#kine-project');
        const kineProjectDevice = kineProject.querySelector('.project__device-container');
        const kineProjectDetail = kineProject.querySelector('.project__detail');
        const kineProjectPhoneImage = kineProject.querySelector('#kine-project-phone-image');
        const kineProjectScreenImage = kineProject.querySelector('#kine-project-screen-image');

        gsap.from(kineProjectDevice, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: kineProjectDevice,
                start: 'top bottom',
                end: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(kineProjectDetail, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: kineProjectDetail,
                start: 'top bottom',
                end: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(kineProjectScreenImage, {
            y: -1597,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: kineProjectPhoneImage,
                start: '70% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        const getStartKineProjectScrollTrigger = () =>
            kineProject.getBoundingClientRect().bottom -
            kineProjectDevice.getBoundingClientRect().bottom +
            kineProjectDevice.offsetHeight / 2;

        this.kineProjectScrollTrigger = ScrollTrigger.create({
            trigger: kineProject,
            pin: true,
            start: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger()} center` : 'center center',
            end: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger() - 900} center` : `top+=900`,
            scrub: 1,
        });
    }

    initGroupomaniaProjectAnimation() {
        const groupomaniaProject = document.querySelector('#groupomania-project');
        const groupomaniaProjectDevice = groupomaniaProject.querySelector('.project__device-container');
        const groupomaniaProjectDetail = groupomaniaProject.querySelector('.project__detail');

        gsap.from(groupomaniaProjectDevice, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: groupomaniaProjectDevice,
                start: 'top bottom',
                end: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(groupomaniaProjectDetail, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: groupomaniaProjectDetail,
                start: 'top bottom',
                end: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    displayGithubChart(githubChart) {
        this.deleteChilds(this.githubChartboxContainer);
        this.deleteChilds(this.githubChartDates);

        for (let i = 0; i < githubChart.numberBox; i++) {
            const el = document.createElement('div');
            el.classList = `github-chart-box-container__box ${githubChart.coloredBoxList.includes(i) ? 'active' : ''}`;
            this.githubChartboxContainer.appendChild(el);
        }
        githubChart.monthList.forEach((month) => {
            const el = document.createElement('span');
            el.appendChild(document.createTextNode(month));
            this.githubChartDates.appendChild(el);
        });
    }

    deleteChilds(parent) {
        let child = parent.lastElementChild;
        while (child) {
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    }

    onResize() {
        const newSize =
            window.innerWidth < 768 ? 'smallScreen' : window.innerWidth < 1024 ? 'mediumScreen' : 'largeScreen';
        if (newSize !== this.currentScreenSize) {
            this.kineProjectScrollTrigger.refresh();
            this.displayGithubChart(
                newSize === 'smallScreen' ? this.smallScreenGithubChart : this.largeScreenGithubChart
            );
            this.currentScreenSize = newSize;
        } else if (newSize === 'smallScreen') {
            this.kineProjectScrollTrigger.refresh();
        }
        console.log(newSize);
    }
}

new Display();
