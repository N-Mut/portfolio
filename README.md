<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>نورة | الموقع الشخصي</title>
  <!-- مكتبة Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased">

  <!-- 1. الهيدر العلوي -->
  <header class="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-white tracking-wide">نورة | Noura</span>
        </div>
        <nav class="hidden md:flex space-x-8 space-x-reverse">
          <a href="#" class="text-slate-300 hover:text-indigo-400 font-medium transition-colors">الرئيسية</a>
          <a href="#" class="text-slate-300 hover:text-indigo-400 font-medium transition-colors">مسار التعلم</a>
          <a href="#" class="text-slate-300 hover:text-indigo-400 font-medium transition-colors">المشاريع</a>
          <a href="#" class="text-slate-300 hover:text-indigo-400 font-medium transition-colors">تواصل معي</a>
        </nav>
        <div class="flex md:hidden items-center">
          <button class="text-slate-300 hover:text-white p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- 2. محتوى الموقع -->
  <main class="max-w-4xl mx-auto px-4 py-12 space-y-8">
    
    <section class="space-y-2">
      <h1 class="text-3xl font-bold text-white">نورة</h1>
      <p class="text-slate-400 text-lg">مبتكرة وشغوفة بتطوير الويب وتقنيات البرمجة.</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-indigo-400 border-b border-slate-800 pb-2">مسار التعلم والتطوير</h2>
      <div class="space-y-3">
        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
          <span>💻 تطوير الواجهات الأمامية (HTML / CSS / JavaScript)</span>
        </div>
        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
          <span>⚙️ البرمجة الخلفية باستخدام Laravel</span>
        </div>
        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
          <span>🤖 أساسيات وتقنيات الذكاء الاصطناعي</span>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-indigo-400 border-b border-slate-800 pb-2">أبرز المشاريع</h2>
      <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
        <h3 class="text-lg font-medium text-white">🌐 الموقع الشخصي (Personal Portfolio)</h3>
        <p class="text-slate-400 text-sm">موقع ويب عصري بالنمط الداكن مبني باستخدام HTML5 و CSS3 بتصميم إنسيابي وتفاعلي.</p>
      </div>
    </section>

    <section class="space-y-4 pt-4">
      <h2 class="text-xl font-semibold text-indigo-400 border-b border-slate-800 pb-2">تواصل معي</h2>
      <p class="text-slate-400">يسعدني تواصلك معي عبر الوسائل التالية:</p>
      <div class="flex flex-wrap gap-3 pt-2">
        <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm">✉️ البريد الإلكتروني</span>
        <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm">💬 واتساب</span>
        <span class="px-4 py-2 bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-lg text-sm font-medium">✨ تجربة Tailwind CSS</span>
      </div>
    </section>

  </main>

</body>
</html>
