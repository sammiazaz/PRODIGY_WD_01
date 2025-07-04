 
        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Nav item active state
        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
                const nav = document.getElementById('mainNav');
                nav.style.backgroundColor = 'rgba(241, 245, 249, 0.95)';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
                const nav = document.getElementById('mainNav');
                if (!nav.classList.contains('scrolled')) {
                    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        });

        // Scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
    