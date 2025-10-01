document.addEventListener('DOMContentLoaded', () => {
    const headerStrip = document.getElementById('header-strip');
    const menuToggler = document.getElementById('menu-toggler');
    const menu = document.getElementById('menu');
    const menuMark = document.getElementById('menu-mark');

    if (scrollY > 10) {
        headerStrip.classList.add('bg-glass');
    } else {
        headerStrip.classList.remove('bg-glass');
    }

    document.addEventListener('scroll', () => {
        if (scrollY > 10) {
            headerStrip.classList.add('bg-glass');
        } else {
            headerStrip.classList.remove('bg-glass');
        }
    });

    menuToggler.addEventListener('click', () => {
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('-translate-y-[100vh]');
        menu.classList.toggle('pointer-events-none');
        document.children[0].classList.toggle('overflow-hidden');

        menuMark.children[0].classList.toggle('absolute');
        menuMark.children[0].classList.toggle('rotate-45');
        menuMark.children[0].classList.toggle('-translate-x-1/2');

        menuMark.children[1].classList.toggle('absolute');
        menuMark.children[1].classList.toggle('-rotate-45');
        menuMark.children[1].classList.toggle('-translate-x-1/2');
    });

    (function () {
        const container = document.getElementById('beamBg');

        // Global control variables
        const SPEED_MULTIPLIER = 0.5;   // lower = slower, higher = faster
        const BEAM_COUNT = 5;          // number of beams

        function createBeams(n = BEAM_COUNT, speedMultiplier = SPEED_MULTIPLIER) {
            container.innerHTML = '';
            for (let i = 0; i < n; i++) {
                const el = document.createElement('div');
                el.className = 'beam';
                const r = Math.random();
                if (r < 0.18) el.classList.add('wide');
                else if (r < 0.45) el.classList.add('narrow');
                const w = (12 + Math.random() * 60).toFixed(2) + 'vw';
                const h = (6 + Math.random() * 26).toFixed(2) + 'vh';
                const rot = (-35 + Math.random() * 70).toFixed(2) + 'deg';
                const duration = ((14 + Math.random() * 20) / speedMultiplier).toFixed(2);
                const top = Math.random() * 110 - 5;
                const delay = (Math.random() * -duration).toFixed(2) + 's';
                const bg = `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.08) 65%, transparent 100%)`;
                el.style.setProperty('--w', w);
                el.style.setProperty('--h', h);
                el.style.setProperty('--rot', rot);
                el.style.setProperty('--duration', duration + 's');
                el.style.setProperty('--delay', delay);
                el.style.top = top + 'vh';
                el.style.width = w;
                el.style.height = h;
                el.style.left = (-40 + Math.random() * 20) + '%';
                el.style.animationDelay = delay;
                el.style.background = bg;
                container.appendChild(el);
            }
        }

        createBeams();
        window.addEventListener('resize', () => createBeams());
    })();
});