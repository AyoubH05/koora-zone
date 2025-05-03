// بيانات الأخبار الافتراضية
const newsData = [
  {
    image: "https://via.placeholder.com/400x200?text=خبر+1",
    date: "2 مايو 2025",
    title: "أنشيلوتي يعلن تشكيلة ريال مدريد",
    excerpt: "كشف المدرب الإيطالي عن التشكيلة الرسمية للملكي"
  },
  {
    image: "https://via.placeholder.com/400x200?text=خبر+2",
    date: "1 مايو 2025",
    title: "الوداد يتأهل لدور الـ16",
    excerpt: "فوز ثمين للفريق المغربي خارج قواعده"
  },
  {
    image: "https://via.placeholder.com/400x200?text=خبر+3",
    date: "30 أبريل 2025",
    title: "الاتحاد المغربي يعلن عن جدول الدوري",
    excerpt: "انطلاق البطولة يوم 15 أغسطس بمشاركة 16 فريقاً"
  }
];

// عرض الأخبار
function displayNews() {
  const newsContainer = document.getElementById('newsContainer');
  let html = '';
  
  newsData.forEach(news => {
    html += `
      <div class="news-item">
        <img src="${news.image}" class="news-image" alt="${news.title}">
        <div class="news-content">
          <div class="news-date">${news.date}</div>
          <h3 class="news-title">${news.title}</h3>
          <p class="news-excerpt">${news.excerpt}</p>
        </div>
      </div>
    `;
  });
  
  newsContainer.innerHTML = html;
}

// تبديل الوضع الليلي
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
  
  icons.forEach(icon => {
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });
}

// القائمة المتنقلة
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

// زر العودة للأعلى
window.addEventListener('scroll', function() {
  const scrollBtn = document.querySelector('.scroll-top');
  if (window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(e) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const themeBtn = document.querySelector('.theme-toggle-mobile');
  
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !themeBtn.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// تحميل المحتوى عند بدء التشغيل
window.addEventListener('DOMContentLoaded', function() {
  displayNews();
});
