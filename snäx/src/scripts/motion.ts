import 'lenis/dist/lenis.css';

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

let runId = 0;
let teardownMotion = () => {};

function showReducedMotionState() {
  document.documentElement.dataset.motion = 'reduced';
}

async function startMotion() {
  const currentRun = ++runId;

  if (motionPreference.matches) {
    showReducedMotionState();
    return;
  }

  const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  if (currentRun !== runId || motionPreference.matches) {
    showReducedMotionState();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ anchors: true });
  const updateLenis = (time: number) => lenis.raf(time * 1000);

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(updateLenis);
  gsap.ticker.lagSmoothing(0);

  const media = gsap.matchMedia();
  media.add(
    {
      desktop: '(min-width: 43rem)',
      mobile: '(max-width: 42.999rem)',
    },
    (context) => {
      const mobile = Boolean(context.conditions?.mobile);
      const distance = mobile ? 18 : 34;

      const heroTimeline = gsap.timeline({
        defaults: { duration: mobile ? 0.55 : 0.8, ease: 'power2.out' },
      });

      heroTimeline
        .from('[data-motion="hero-copy"] > *', {
          y: distance,
          opacity: 0,
          stagger: mobile ? 0.06 : 0.1,
        })
        .from(
          '[data-motion="hero-stage"]',
          { scale: mobile ? 0.98 : 0.96, opacity: 0 },
          mobile ? '-=0.35' : '-=0.55',
        )
        .from(
          '[data-motion="hero-machine"]',
          { y: distance, rotate: mobile ? 2 : 0, opacity: 0 },
          '-=0.4',
        );

      gsap.utils.toArray<HTMLElement>('[data-motion="product-image"]').forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: mobile ? -2 : -5 },
          {
            yPercent: mobile ? 2 : 5,
            ease: 'none',
            scrollTrigger: {
              trigger: image.closest('[data-motion="product-card"]'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: mobile ? 0.5 : 1,
            },
          },
        );
      });

      gsap.from('[data-motion="philosophy-phrase"]', {
        y: distance,
        opacity: 0,
        duration: mobile ? 0.65 : 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-motion="philosophy-phrase"]',
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from('[data-motion="team-member"]', {
        y: distance,
        opacity: 0,
        duration: mobile ? 0.55 : 0.75,
        stagger: mobile ? 0.08 : 0.16,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-list',
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from('[data-motion="contact"] > *', {
        y: mobile ? 14 : 24,
        opacity: 0,
        duration: mobile ? 0.5 : 0.7,
        stagger: mobile ? 0.06 : 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-motion="contact"]',
          start: 'top 85%',
          once: true,
        },
      });
    },
  );

  document.documentElement.dataset.motion = 'active';
  teardownMotion = () => {
    gsap.ticker.remove(updateLenis);
    lenis.destroy();
    media.revert();
    document.documentElement.dataset.motion = 'idle';
  };
}

function handleMotionPreference() {
  runId += 1;
  teardownMotion();
  teardownMotion = () => {};

  if (motionPreference.matches) {
    showReducedMotionState();
  } else {
    void startMotion();
  }
}

motionPreference.addEventListener('change', handleMotionPreference);
window.addEventListener(
  'pagehide',
  () => {
    runId += 1;
    teardownMotion();
    motionPreference.removeEventListener('change', handleMotionPreference);
  },
  { once: true },
);

void startMotion();
