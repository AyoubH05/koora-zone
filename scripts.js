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
  },
  // أضف المزيد من الأخبار هنا إن أردت
];

let visibleNews = 2; // عدد الأخبار الظاهرة مبدئياً

function displayNews(filteredData = newsData) {
  const newsContainer = document.getElementById('newsContainer');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  const newsToShow = filteredData.slice(0, visibleNews);

  newsContainer.innerHTML = newsToShow.map(news => `
    <div class="news-item">
      <img src="${news.image}" class="news-image" alt="${news.title}">
      <div class="news-content">
        <div class="news-date">${news.date}</div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-excerpt">${news.excerpt}</p>
      </div>
    </div>
  `).join('');

  // إخفاء الزر إذا تم عرض كل الأخبار
  loadMoreBtn.style.display = (visibleNews >= filteredData.length) ? 'none' : 'inline-block';
}

// تحميل المزيد
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  visibleNews += 2;
  const keyword = document.getElementById('searchInput').value.trim();
  if (keyword) {
    filterNews(keyword);
  } else {
    displayNews();
  }
});

// فلترة الأخبار حسب الكلمة
function filterNews(keyword) {
  const filtered = newsData.filter(news =>
    news.title.includes(keyword) || news.excerpt.includes(keyword)
  );
  visibleNews = filtered.length;
  displayNews(filtered);
}

// البحث المباشر
document.getElementById('searchInput').addEventListener('input', function(e) {
  const keyword = e.target.value.trim();
  visibleNews = 2;
  if (keyword.length > 0) {
    filterNews(keyword);
  } else {
    displayNews();
  }
});

// تبديل الوضع الليلي + حفظ في localStorage
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');

  const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
  icons.forEach(icon => {
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
  });
}

// عند تحميل الصفحة: استرجاع الوضع الليلي
window.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
  icons.forEach(icon => {
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  displayNews();
});

// قائمة الهاتف
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(e) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const themeBtn = document.querySelector('.theme-toggle-mobile');
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !themeBtn.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// زر العودة للأعلى
window.addEventListener('scroll', function() {
  const scrollBtn = document.querySelector('.scroll-top');
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
});
