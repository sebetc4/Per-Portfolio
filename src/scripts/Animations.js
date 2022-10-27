import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export default class Animations {
    constructor(display) {
        this.display = display;
        this.kineProjectScrollTrigger;
    }

    init() {
        this.addPinAnim();
        this.addHeaderAnim();
        this.addIntroSpeechAnim();
        this.addIntroNameAnim();
        this.addIntroJobAnim();
        this.addTitleProjectAnim();
        this.addKineProjectAnim();
        this.addGroupomaniaProjectAnim();
        this.addDesignToolsAnim();
        this.addGithubAnim();
        this.addSkillsAnim();

        window.onload = () => {
            const loaderContainer = document.querySelector('.loader-container');
            loaderContainer.classList.add('hidden');
            document.body.classList.remove('fixed');
            setTimeout(() => {
                loaderContainer.style.display = 'none';
                this.animateSpeechText();
            }, '300');
        };
    }

    animateEnterFixedSection = (wrapper, section) => {
        wrapper.style.height = `${section.offsetHeight}px`;
        section.style.top = `-${section.offsetHeight - window.innerHeight}px`;
        section.classList.add('fixed');
    };

    animateLeaveFixedSection = (wrapper, section) => {
        wrapper.style.height = `auto`;
        section.style.top = `0px`;
        section.classList.remove('fixed');
    };

    animateSpeechText() {
        const tl = gsap.timeline();
        this.display.splitting.forEach((p) => {
            tl.to(p.chars, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1)', stagger: 0.03 });
        });
    }

    addPinAnim() {
        const getStartKineProjectScrollTrigger = () =>
            kineProject.getBoundingClientRect().bottom -
            kineProjectDevice.getBoundingClientRect().bottom +
            kineProjectDevice.offsetHeight / 2;

        this.kineProjectScrollTrigger = ScrollTrigger.create({
            trigger: this.display.kineProject,
            pin: true,
            start: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger()} center` : 'center center',
            end: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger() - 900} center` : `top+=900`,
            scrub: 1,
        });
    }

    addHeaderAnim() {
        const header = document.querySelector('.header');
        ScrollTrigger.create({
            trigger: this.display.introJob,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: header },
        });
        ScrollTrigger.create({
            trigger: this.display.skillsWrapper,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: header },
        });
    }

    addIntroSpeechAnim() {
        const introSpeechTextContainer = this.display.introSpeech.querySelector('.intro-speech__text-container');
        const introSpeechImageContainer = this.display.introSpeech.querySelector('.intro-speech__image-container');

        gsap.to(introSpeechTextContainer, {
            y: 100,
            scrollTrigger: {
                trigger: this.display.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(introSpeechImageContainer, {
            scale: 2,
            scrollTrigger: {
                trigger: this.display.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addIntroNameAnim() {
        const introNameTitle = this.display.introName.querySelector('.intro-name h1');

        gsap.to(this.display.introName, {
            backgroundPositionY: 50,
            scrollTrigger: {
                trigger: this.display.introName,
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
                    trigger: this.display.introName,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    addIntroJobAnim() {
        const introJobTitle = this.display.introJob.querySelector('.intro-job h2');

        gsap.to(this.display.introJob, {
            backgroundPositionY: -50,
            scrollTrigger: {
                trigger: this.display.introJob,
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
                    trigger: this.display.introJob,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: 1,
                },
            }
        );
    }

    addTitleProjectAnim() {
        const projectsTitleContainer = document.querySelector('.projects-title-container');
        const projectsTitleWrapper = projectsTitleContainer.querySelector('.projects-title-wrapper');

        ScrollTrigger.create({
            trigger: projectsTitleContainer,
            start: 'bottom bottom',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'fixed', targets: projectsTitleWrapper },
        });
    }

    addKineProjectAnim() {
        const kineProjectDetail = this.display.kineProject.querySelector('.project__detail');
        const kineProjectPhoneImage = this.display.kineProject.querySelector('#kine-project-phone-image');
        const kineProjectScreenImage = this.display.kineProject.querySelector('#kine-project-screen-image');

        gsap.from(this.display.kineProjectDevice, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.display.kineProjectDevice,
                start: 'top bottom',
                end: '25% center',
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
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.to(kineProjectScreenImage, {
            y: -1720,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: kineProjectPhoneImage,
                start: '70% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addGroupomaniaProjectAnim() {
        const groupomaniaProject = document.querySelector('#groupomania-project');
        const groupomaniaProjectDevice = groupomaniaProject.querySelector('.project__device-container');
        const groupomaniaProjectDetail = groupomaniaProject.querySelector('.project__detail');

        gsap.from(groupomaniaProjectDevice, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: groupomaniaProjectDevice,
                start: 'top bottom',
                end: '25% center',
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
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addDesignToolsAnim() {
        const designToolsProject = document.querySelector('#design-tools-project');
        const designToolsProjectDevice = designToolsProject.querySelector('.project__device-container');
        const designToolsProjectDetail = designToolsProject.querySelector('.project__detail');

        gsap.from(designToolsProjectDevice, {
            x: '100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: designToolsProjectDevice,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });

        gsap.from(designToolsProjectDetail, {
            x: '-100%',
            autoAlpha: 1,
            scrollTrigger: {
                trigger: designToolsProjectDetail,
                start: 'top bottom',
                end: '25% center',
                toggleActions: 'play none reverse none',
                scrub: 1,
            },
        });
    }

    addGithubAnim() {
        const githubWrapper = document.querySelector('.github-wrapper');
        const githubSection = githubWrapper.querySelector('.github');

        ScrollTrigger.create({
            trigger: githubWrapper,
            start: 'bottom bottom',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'fixed', targets: githubSection },
        });
    }

    addSkillsAnim() {
        const skillsSection = document.querySelector('.skills');

        ScrollTrigger.create({
            trigger: this.display.skillsWrapper,
            start: 'bottom bottom',
            end: 'bottom top',
            onEnter: () => this.animateEnterFixedSection(this.display.skillsWrapper, skillsSection),
            onLeave: () => this.animateLeaveFixedSection(this.display.skillsWrapper, skillsSection),
            onEnterBack: () => this.animateEnterFixedSection(this.display.skillsWrapper, skillsSection),
            onLeaveBack: () => this.animateLeaveFixedSection(this.display.skillsWrapper, skillsSection),
        });
    }
}
