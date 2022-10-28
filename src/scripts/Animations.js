gsap.registerPlugin(ScrollTrigger);

export default class Animations {
    constructor(display) {
        this.display = display;
        this.kineProjectScrollTrigger;
        this.matchMedia = gsap.matchMedia();
        this.scrub = 1;
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
        this.addContactAnim();

        window.onload = () => {
            const loaderContainer = document.querySelector('.loader-container');
            loaderContainer.classList.add('hidden');
            document.body.classList.remove('fixed');
            setTimeout(() => {
                loaderContainer.style.display = 'none';
                this.animateSpeechText();
            }, '500');
        };
    }

    animateEnterFixedSection = (wrapper, section) => {
        wrapper.style.height = `${section.offsetHeight}px`;
        section.classList.add('fixed');
    };

    animateLeaveFixedSection = (wrapper, section) => {
        wrapper.style.height = `auto`;
        section.classList.remove('fixed');
    };

    animateSpeechText() {
        const tl = gsap.timeline();
        this.display.splitting.forEach((p) => {
            tl.to(p.chars, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1)', stagger: 0.02 });
        });
    }

    addPinAnim() {
        const getStartKineProjectScrollTrigger = () =>
            this.display.kineProject.getBoundingClientRect().bottom -
            this.display.kineProjectDevice.getBoundingClientRect().bottom +
            this.display.kineProjectDevice.offsetHeight / 2;

        this.kineProjectScrollTrigger = ScrollTrigger.create({
            trigger: this.display.kineProject,
            pin: true,
            start: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger()} center` : 'center center',
            end: () =>
                window.innerWidth < 1024 ? `bottom-=${getStartKineProjectScrollTrigger() - 900} center` : `top+=900`,
            scrub: this.scrub,
        });
    }

    addHeaderAnim() {
        ScrollTrigger.create({
            trigger: this.display.introJob,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: this.display.header },
        });
        ScrollTrigger.create({
            trigger: this.display.skillsWrapper,
            start: 'top top+=30',
            end: 'bottom top+=30',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'light', targets: this.display.header },
        });
    }

    addIntroSpeechAnim() {
        gsap.to(this.display.introSpeechTextContainer, {
            y: 100,
            scrollTrigger: {
                trigger: this.display.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: this.scrub,
            },
        });

        gsap.to(this.display.introSpeechImageContainer, {
            scale: 2,
            scrollTrigger: {
                trigger: this.display.introSpeech,
                start: 'center center',
                toggleActions: 'play none reverse none',
                scrub: this.scrub,
            },
        });
    }

    addIntroNameAnim() {
        gsap.to(this.display.introName, {
            backgroundPositionY: 50,
            scrollTrigger: {
                trigger: this.display.introName,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: this.scrub,
            },
        });

        gsap.fromTo(
            this.display.introNameTitle,
            { x: '-20%' },
            {
                x: '8%',
                scrollTrigger: {
                    trigger: this.display.introName,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            }
        );
    }

    addIntroJobAnim() {
        gsap.to(this.display.introJob, {
            backgroundPositionY: -50,
            scrollTrigger: {
                trigger: this.display.introJob,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none reverse none',
                scrub: this.scrub,
            },
        });

        gsap.fromTo(
            this.display.introJobTitle,
            { x: '20%' },
            {
                x: '-5%',
                scrollTrigger: {
                    trigger: this.display.introJob,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            }
        );
    }

    addTitleProjectAnim() {
        this.matchMedia.add('(min-width: 1024px)', () =>
            ScrollTrigger.create({
                trigger: this.display.projectsTitleContainer,
                start: 'bottom bottom',
                end: 'bottom top',
                onEnter: () =>
                    this.animateEnterFixedSection(
                        this.display.projectsTitleContainer,
                        this.display.projectsTitleWrapper
                    ),
                onLeave: () =>
                    this.animateLeaveFixedSection(
                        this.display.projectsTitleContainer,
                        this.display.projectsTitleWrapper
                    ),
                onEnterBack: () =>
                    this.animateEnterFixedSection(
                        this.display.projectsTitleContainer,
                        this.display.projectsTitleWrapper
                    ),
                onLeaveBack: () =>
                    this.animateLeaveFixedSection(
                        this.display.projectsTitleContainer,
                        this.display.projectsTitleWrapper
                    ),
            })
        );
    }

    addKineProjectAnim() {
        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.kineProjectDevice, {
                x: '100%',
                scrollTrigger: {
                    trigger: this.display.kineProject,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.kineProjectDetail, {
                x: '-100%',
                scrollTrigger: {
                    trigger: this.display.kineProject,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        gsap.to(this.display.kineProjectScreenImage, {
            y: -1720,
            scrollTrigger: {
                markers: true,
                trigger: this.display.kineProjectPhoneImage,
                start: '70% center',
                toggleActions: 'play none reverse none',
                scrub: this.scrub,
            },
        });
    }

    addGroupomaniaProjectAnim() {
        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.groupomaniaProjectDevice, {
                x: '-100%',
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: this.display.groupomaniaProject,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.groupomaniaProjectDetail, {
                x: '100%',
                scrollTrigger: {
                    trigger: this.display.groupomaniaProject,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );
    }

    addDesignToolsAnim() {
        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.designToolsProjectDevice, {
                x: '100%',
                scrollTrigger: {
                    trigger: this.display.designToolsProjectDevice,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.designToolsProjectDetail, {
                x: '-100%',
                scrollTrigger: {
                    trigger: this.display.designToolsProject,
                    start: 'top bottom',
                    end: '25% center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );
    }

    addGithubAnim() {
        ScrollTrigger.create({
            trigger: this.display.githubWrapper,
            start: 'bottom bottom',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
            toggleClass: { className: 'fixed', targets: this.display.githubSection },
        });
    }

    addSkillsAnim() {
        ScrollTrigger.create({
            trigger: this.display.skillsWrapper,
            start: 'bottom bottom',
            end: 'bottom top',
            onEnter: () => this.animateEnterFixedSection(this.display.skillsWrapper, this.display.skillsSection),
            onLeave: () => this.animateLeaveFixedSection(this.display.skillsWrapper, this.display.skillsSection),
            onEnterBack: () => this.animateEnterFixedSection(this.display.skillsWrapper, this.display.skillsSection),
            onLeaveBack: () => this.animateLeaveFixedSection(this.display.skillsWrapper, this.display.skillsSection),
        });
    }

    addContactAnim() {
        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.contactLeft, {
                x: '-100%',
                scrollTrigger: {
                    trigger: this.display.contactSection,
                    start: 'top bottom',
                    end: 'center center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.contactRight, {
                x: '100%',
                scrollTrigger: {
                    trigger: this.display.contactSection,
                    start: 'top bottom',
                    end: 'center center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );

        this.matchMedia.add('(min-width: 1024px)', () =>
            gsap.from(this.display.contactTitle, {
                x: '100%',
                scrollTrigger: {
                    trigger: this.display.contactSection,
                    start: 'top bottom',
                    end: 'center center',
                    toggleActions: 'play none reverse none',
                    scrub: this.scrub,
                },
            })
        );
    }
}
