document.addEventListener("DOMContentLoaded", () => {
        const titles = document.querySelectorAll(".title-animation");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        });

        titles.forEach((title) => {
            observer.observe(title);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll("[data-animate]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        elements.forEach((el) => observer.observe(el));
    });
