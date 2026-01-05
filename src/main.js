JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // 1. TẮT MÀN HÌNH CHỜ (LOADING)
    window.addEventListener('load', () => {
        document.getElementById('loading').classList.add('hidden');
    });

    // 2. HIỆU ỨNG RIPPLE (SÓNG NƯỚC KHI CLICK)
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        document.body.appendChild(ripple);
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        setTimeout(() => ripple.remove(), 600);
    });

    // 3. TỰ ĐỘNG HIỆN ẢNH KHI CUỘN (SCROLL REVEAL)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Hiện ra khi thấy 10% khối nội dung

    document.querySelectorAll('.animate-block').forEach(block => {
        observer.observe(block);
    });

    // 4. DARK MODE (LƯU TRẠNG THÁI)
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
    });

    // 5. BACK TO TOP
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btt.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});