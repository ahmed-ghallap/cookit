document.querySelectorAll('#desc > p').forEach((el) => {
    const button = el.nextElementSibling; // الحصول على العنصر التالي (الزر)
    if (el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth) {
        button.style.display = 'inline'; // إظهار الزر
    } else {
        button.style.display = 'none'; // إخفاء الزر
    }
});

document.querySelectorAll('#desc > .link').forEach((el) => {
    el.addEventListener('click', () => {
        const paragraph = el.previousElementSibling; // الفقرة السابقة للزر
        if (el.classList.contains('show-less')) {
            el.classList.toggle('show-less')
            paragraph.style.display = 'block'; // عرض النص بالكامل
            el.textContent = 'قراءة المختصر';
        } else {
            paragraph.style.display = '-webkit-box'; // عرض النص بشكل مقتصر (لخاصية line-clamp)
            el.classList.toggle('show-less')
            el.textContent = 'قراءة المزيد';
        }
    });
});
