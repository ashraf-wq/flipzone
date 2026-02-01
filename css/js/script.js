// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Translation toggle
const translateBtn = document.getElementById('translate-btn');
let isArabic = false;
translateBtn.addEventListener('click', () => {
    isArabic = !isArabic;
    document.body.classList.toggle('rtl', isArabic);
    document.body.classList.toggle('ltr', !isArabic);
    // Toggle text
    const elements = {
        'brand-name': ['FlipZone', 'فليب زون'],
        'nav-home': ['Home', 'الرئيسية'],
        'nav-about': ['About Us', 'من نحن'],
        'nav-explore': ['Explore More', 'استكشف المزيد'],
        'nav-pricing': ['Pricing', 'التسعير'],
        'pricing-title-hero': ['Pricing', 'التسعير'],
        'hero-title': ['FlipZone', 'فليب زون'],
        'learn-more': ['Explore More', 'استكشف المزيد'],
        'about-title': ['About Us', 'من نحن'],
        'about-text': ['FlipZone is a revolutionary museum where the laws of physics are defied. Step into rooms where gravity vanishes, enjoy anti-gravity thrills, dine in a café that defies orientation, and immerse in VR worlds. Our mission is to turn your perception of reality upside down!', 'فليب زون متحف ثوري حيث يتم تحدي قوانين الفيزياء. ادخلوا غرفا حيث تختفي الجاذبية، استمتعوا بإثارة مكافحة الجاذبية، تناولوا الطعام في مقهى يتحدى التوجه، وغوصوا في عوالم الواقع الافتراضي. مهمتنا هي قلب إدراككم للواقع رأسا على عقب!'],
        'explore-title': ['Explore More', 'استكشف المزيد'],
        'explore-text': ['<p>Discover the wonders of FlipZone: Flip Rooms for interactive fun, Anti-Gravity Room for floating thrills, Flip Café for unique dining, and VR Experience for virtual adventures.</p>', '<p>اكتشفوا عجائب فليب زون: غرف الإنقلاب للمتعة التفاعلية، غرفة مكافحة الجاذبية للإثارة العائمة، مقهى الإنقلاب للتناول الفريد، وتجربة الواقع الافتراضي للمغامرات الافتراضية.</p>'],
        'basic-title': ['Basic Entry', 'الدخول الأساسي'],
        'basic-text': ['$20 - Access to Flip Rooms and Anti-Gravity Room.', '20 دولار - الوصول إلى غرف الإنقلاب وغرفة مكافحة الجاذبية.'],
        'premium-title': ['Premium', 'المميز'],
        'premium-text': ['$35 - Includes VR Experience and Flip Café.', '35 دولار - يشمل تجربة الواقع الافتراضي ومقهى الإنقلاب.'],
        'vip-title': ['VIP', 'كبار الشخصيات'],
        'vip-text': ['$50 - All areas with priority access.', '50 دولار - جميع المناطق مع الوصول المسبق.'],
        'footer-text': ['© 2023 FlipZone. All rights reserved.', '© 2023 فليب زون. جميع الحقوق محفوظة.'],
        'book-now-btn': ['<i class="fab fa-whatsapp"></i> Book Now', '<i class="fab fa-whatsapp"></i> احجز الآن']
    };
    for (const [id, texts] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = isArabic ? texts[1] : texts[0];
    }
});

// Animation on scroll for explore text
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});
document.querySelectorAll('.animated-text').forEach(text => observer.observe(text));
