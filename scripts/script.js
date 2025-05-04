

    //     let submitBtn = document.getElementsByClassName("submit-btn")

    //     submitBtn.onclick((click) => {
    //         document.body.innerHTML = `
    //         <h1>Your Message Has Been Submitted</h1>
    // <h2>Thank You :)</h2>
    // <a href="http://127.0.0.1:5500/DATARION/think.html"><button>Return Back To Website</button></a> 
    //         `
    //     })



        // Loading overlay functionality
        window.addEventListener('load', function() {
            // Show loading overlay initially
            const loadingOverlay = document.getElementById('loadingOverlay');
            
            // Simulate loading delay (you can remove this in production)
            setTimeout(function() {
                loadingOverlay.style.opacity = '0';
                setTimeout(function() {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 2000);
            
            // Set initial state for animation
            const elements = document.querySelectorAll('.card, .section-title, .contact-info');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.5s ease';
            });
            
            animateOnScroll();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Show loading overlay when clicking nav links
                const loadingOverlay = document.getElementById('loadingOverlay');
                loadingOverlay.style.display = 'flex';
                loadingOverlay.style.opacity = '1';
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                setTimeout(function() {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Hide loading overlay after scroll
                    setTimeout(function() {
                        loadingOverlay.style.opacity = '0';
                        setTimeout(function() {
                            loadingOverlay.style.display = 'none';
                        }, 500);
                    }, 500);
                }, 100);
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card, .section-title, .contact-info');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Animate on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Form submission handling
        document.querySelector('form').addEventListener('submit', function(e) {
            // Show loading overlay when submitting form
            const loadingOverlay = document.getElementById('loadingOverlay');
            loadingOverlay.style.display = 'flex';
            loadingOverlay.style.opacity = '1';
            
            // FormSubmit.co will handle the submission
            // You can add additional processing here if needed
            console.log('Form submitted');
            
            // Hide loading overlay after submission
            setTimeout(function() {
                loadingOverlay.style.opacity = '0';
                setTimeout(function() {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 2000);
        });

        // WhatsApp click tracking (optional)
        document.querySelectorAll('a[href^="https://wa.me"]').forEach(button => {
            button.addEventListener('click', function() {
                // Show loading overlay when clicking WhatsApp buttons
                const loadingOverlay = document.getElementById('loadingOverlay');
                loadingOverlay.style.display = 'flex';
                loadingOverlay.style.opacity = '1';
                
                // You can add analytics tracking here if needed
                console.log('WhatsApp button clicked:', this.href);
                
                // Hide loading overlay after a short delay
                setTimeout(function() {
                    loadingOverlay.style.opacity = '0';
                    setTimeout(function() {
                        loadingOverlay.style.display = 'none';
                    }, 500);
                }, 1000);
            });
        });