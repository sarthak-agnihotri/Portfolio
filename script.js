// /**
//  * Sarthak Agnihotri - Portfolio Script
//  */

// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Reveal Elements on Scroll
//     const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
//     
//     const revealOnScroll = () => {
//         const windowHeight = window.innerHeight;
//         const revealPoint = 100;

//         revealElements.forEach(el => {
//             const revealTop = el.getBoundingClientRect().top;
//             if (revealTop < windowHeight - revealPoint) {
//                 el.classList.add('active');
//             }
//         });
//     };

//     window.addEventListener('scroll', revealOnScroll);
//     revealOnScroll();

//     // 2. Navbar Background Change on Scroll
//     const navbar = document.getElementById('navbar');
//     if (navbar) {
//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 50) {
//                 navbar.style.background = 'rgba(5, 6, 15, 0.95)';
//                 navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
//             } else {
//                 navbar.style.background = 'rgba(5, 6, 15, 0.8)';
//                 navbar.style.boxShadow = 'none';
//             }
//         });
//     }

//     // 3. Mobile Menu Toggle
//     const mobileToggle = document.getElementById('mobile-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     if (mobileToggle && navLinks) {
//         mobileToggle.addEventListener('click', () => {
//             navLinks.classList.toggle('mobile-active');
//             const icon = mobileToggle.querySelector('i');
//             icon.classList.toggle('fa-bars');
//             icon.classList.toggle('fa-times');
//         });
//     }

//     // 4. 3D Tilt Effect for Cards
//     const tiltCards = document.querySelectorAll('.tilt-target');

//     const handleTilt = (e) => {
//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const rotateX = (y - centerY) / 10;
//         const rotateY = (centerX - x) / 10;

//         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
//     };

//     const resetTilt = (e) => {
//         const card = e.currentTarget;
//         card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//     };

//     tiltCards.forEach(card => {
//         card.addEventListener('mousemove', handleTilt);
//         card.addEventListener('mouseleave', resetTilt);
//     });
// });

// /**
//  * CONTACT FORM LOGIC
//  * This handles the actual submission to FormSubmit.co
//  */
// function handleForm(e) {
//     e.preventDefault();

//     const form = e.target;
//     const btn  = document.getElementById('submitBtn');
//     const TO   = 'sarthak0144@gmail.com'; // Your Verified Email

//     const name    = (form.querySelector('[name="name"]')    || {}).value || '';
//     const email   = (form.querySelector('[name="email"]')   || {}).value || '';
//     const subject = (form.querySelector('[name="subject"]') || {}).value || 'Portfolio Contact';
//     const message = (form.querySelector('[name="message"]') || {}).value || '';

//     if (!name.trim() || !email.trim() || !message.trim()) {
//         setBtnState(btn, 'error', 'Fill all fields');
//         setTimeout(() => setBtnState(btn, 'default'), 3000);
//         return;
//     }

//     btn.disabled = true;
//     setBtnState(btn, 'loading');

//     const fd = new FormData();
//     fd.append('name', name.trim());
//     fd.append('email', email.trim());
//     fd.append('subject', subject.trim());
//     fd.append('message', message.trim());
//     fd.append('_subject', '[Portfolio] New message from ' + name.trim());
//     fd.append('_captcha', 'false');
//     fd.append('_template', 'table');

//     fetch('https://formsubmit.co/ajax/' + TO, {
//         method: 'POST',
//         headers: { 'Accept': 'application/json' },
//         body: fd,
//     })
//     .then(res => {
//         if (!res.ok) throw new Error('HTTP ' + res.status);
//         return res.json();
//     })
//     .then(json => {
//         if (json.success === 'true' || json.success === true) {
//             setBtnState(btn, 'success', 'Message Sent!');
//             form.reset();
//             setTimeout(() => {
//                 setBtnState(btn, 'default');
//                 btn.disabled = false;
//             }, 5000);
//         } else {
//             throw new Error(json.message || 'Unknown error');
//         }
//     })
//     .catch(err => {
//         console.warn('FormSubmit error:', err);
//         setBtnState(btn, 'error', 'Opening Mail App...');
//         
//         const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+message)}`;
//         
//         setTimeout(() => {
//             window.location.href = mailto;
//             setBtnState(btn, 'default');
//             btn.disabled = false;
//         }, 1500);
//     });
// }

// function setBtnState(btn, state, text) {
//     const map = {
//         default: { html: '<i class="fas fa-paper-plane text-xs"></i> <span>Send Message</span>', bg: '#f97316' },
//         loading: { html: '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>', bg: '#71717a' },
//         success: { html: '<i class="fas fa-check"></i> <span>' + (text || 'Sent!') + '</span>', bg: 'linear-gradient(135deg,#10b981,#059669)' },
//         error:   { html: '<i class="fas fa-exclamation-triangle"></i> <span>' + (text || 'Error') + '</span>', bg: 'linear-gradient(135deg,#ef4444,#dc2626)' },
//     };
//     const s = map[state] || map.default;
//     btn.innerHTML = s.html;
//     btn.style.background = s.bg;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     
//     // 1. Initial Hero Staggered Reveal
//     const reveals = document.querySelectorAll('.hero-reveal');
//     reveals.forEach((el, index) => {
//         setTimeout(() => {
//             el.classList.add('active');
//         }, 150 * index); // Staggers each element by 150ms
//     });

//     // 2. Parallax Background Scroll Logic
//     const parallaxBg = document.querySelector('.parallax-bg');
//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         if (parallaxBg) {
//             const speed = parallaxBg.getAttribute('data-speed');
//             const yPos = -(scrollY * speed);
//             parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
//         }
//     });

//     // 3. 3D Tilt Effect for the Image
//     const tiltTarget = document.querySelector('.tilt-target');
//     if (tiltTarget) {
//         tiltTarget.addEventListener('mousemove', (e) => {
//             const rect = tiltTarget.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;

//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;

//             const rotateX = (y - centerY) / 15;
//             const rotateY = (centerX - x) / 15;

//             tiltTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
//         });

//         tiltTarget.addEventListener('mouseleave', () => {
//             tiltTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//         });
//     }
// });

/**
 * Sarthak Agnihotri - Portfolio Script
 */

/**
 * Sarthak Agnihotri - Portfolio Script
 * Features: Cinematic Preloader, 3D Tilt, Parallax, Scroll Reveal, Form Handling
 */

/**
 * Sarthak Agnihotri - Portfolio Main Script
 * Integrated Features: Cinematic Preloader, 3D Tilt, Parallax, Scroll Reveal, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PREMIUM PRELOADER & COUNTER LOGIC ---
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const percentEl = document.getElementById('loader-percent');
    const innerBar = document.getElementById('inner-bar');
    const statusText = document.getElementById('status-text');
    const heroReveals = document.querySelectorAll('.hero-reveal');
    
    let count = 0;
    const statuses = ["Initializing", "Loading Assets", "Fine Tuning", "Ready"];

    // Lock scroll immediately to ensure the intro isn't skipped
    document.body.style.overflow = 'hidden';

    const revealSite = () => {
        setTimeout(() => {
            // 1. Trigger the split-shutter panels in CSS
            if (preloader) preloader.classList.add('loaded');
            
            // 2. Reveal and scale up the main portfolio content
            if (mainContent) {
                mainContent.classList.remove('opacity-0', 'scale-[0.98]');
                mainContent.classList.add('opacity-100', 'scale-100');
            }

            // 3. Staggered Hero Elements Entrance
            heroReveals.forEach((el, index) => {
                setTimeout(() => el.classList.add('active'), 200 * index);
            });

            // 4. Re-enable scrolling
            document.body.style.overflow = 'auto';
        }, 600); // Cinematic pause at 100% for impact
    };

    const startCounter = () => {
        const counterInterval = setInterval(() => {
            count++;
            
            // Update the Digital Percent Number
            if (percentEl) {
                percentEl.innerText = count < 10 ? '0' + count : count;
            }
            
            // Update the Progress Bar Width
            if (innerBar) {
                innerBar.style.width = count + '%';
            }

            // Update System Status Text
            if (statusText) {
                if (count === 20) statusText.innerText = statuses[1];
                if (count === 60) statusText.innerText = statuses[2];
                if (count === 90) statusText.innerText = statuses[3];
            }
            
            if (count === 100) {
                clearInterval(counterInterval);
                revealSite();
            }
        }, 25); // Smooth ~2.5 second total duration
    };

    // Trigger loading sequence when window resources (images/fonts) are ready
    window.addEventListener('load', startCounter);


    // --- 2. SCROLL REVEAL (Projects/Services) ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);


    // --- 3. NAVBAR STYLING ON SCROLL ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 6, 15, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)'; 
                navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        });
    }


    // --- 4. PARALLAX BACKGROUND EFFECT ---
    const parallaxBg = document.querySelector('.parallax-bg');
    window.addEventListener('scroll', () => {
        if (parallaxBg) {
            const speed = parallaxBg.getAttribute('data-speed') || 0.2;
            const yPos = -(window.scrollY * speed);
            parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
    });


    // --- 5. 3D TILT EFFECT (For Cards & Hero Image) ---
    const tiltTargets = document.querySelectorAll('.tilt-target');

    const handleTilt = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const resetTilt = (e) => {
        e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    tiltTargets.forEach(target => {
        target.addEventListener('mousemove', handleTilt);
        target.addEventListener('mouseleave', resetTilt);
    });
});

/**
 * CONTACT FORM LOGIC
 * Handles FormSubmit.co AJAX submission with fallback to mailto
 */
function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('submitBtn');
    const TO = 'sarthak0144@gmail.com';

    const getVal = (name) => (form.querySelector(`[name="${name}"]`) || {}).value || '';
    
    const name = getVal('name');
    const email = getVal('email');
    const subject = getVal('subject') || 'Portfolio Contact';
    const message = getVal('message');

    if (!name.trim() || !email.trim() || !message.trim()) {
        setBtnState(btn, 'error', 'Fill all fields');
        setTimeout(() => setBtnState(btn, 'default'), 3000);
        return;
    }

    btn.disabled = true;
    setBtnState(btn, 'loading');

    const fd = new FormData();
    fd.append('name', name.trim());
    fd.append('email', email.trim());
    fd.append('message', message.trim());
    fd.append('_subject', '[Portfolio] New message from ' + name.trim());
    fd.append('_captcha', 'false');

    fetch('https://formsubmit.co/ajax/' + TO, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd,
    })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(() => {
        setBtnState(btn, 'success', 'Message Sent!');
        form.reset();
        setTimeout(() => {
            setBtnState(btn, 'default');
            btn.disabled = false;
        }, 5000);
    })
    .catch(() => {
        setBtnState(btn, 'error', 'Opening Mail App...');
        setTimeout(() => {
            window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            setBtnState(btn, 'default');
            btn.disabled = false;
        }, 1500);
    });
}

/**
 * Button UI State Manager
 */
function setBtnState(btn, state, text) {
    if (!btn) return;
    const map = {
        default: { html: '<i class="fas fa-paper-plane text-xs"></i> <span>Send Message</span>', bg: '#f97316' },
        loading: { html: '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>', bg: '#71717a' },
        success: { html: '<i class="fas fa-check"></i> <span>' + (text || 'Sent!') + '</span>', bg: 'linear-gradient(135deg,#10b981,#059669)' },
        error:   { html: '<i class="fas fa-exclamation-triangle"></i> <span>' + (text || 'Error') + '</span>', bg: 'linear-gradient(135deg,#ef4444,#dc2626)' },
    };
    const s = map[state] || map.default;
    btn.innerHTML = s.html;
    btn.style.background = s.bg;
}