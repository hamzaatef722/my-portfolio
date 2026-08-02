# My Portfolio — Hamza Atef

Personal portfolio built with **React + Vite + Tailwind CSS**, with a light/dark mode toggle powered by Context API.

## تشغيل المشروع

```bash
npm install
npm run dev
```

هيفتح على `http://localhost:5173`.

للبناء النهائي (production build):

```bash
npm run build
```

## هيكل المشروع (File Structure)

```
src/
  components/     # كل الـ UI components (Navbar, Hero, About, Skills, Projects...)
  contexts/       # ThemeContext.jsx بتاع الـ dark/light mode
  data/           # بيانات المشروع (projects.js, skills.js, education.js) — عدّل هنا لتحديث المحتوى
  App.jsx         # بيجمع كل الـ sections مع بعض
  main.jsx        # entry point
  index.css       # Tailwind + custom global styles
```

## حاجات لازم تحدّثها بنفسك

- **روابط اللايف ديمو** في `src/data/projects.js` — دلوقتي متحطة `#` كـ placeholder، حط لينكات الـ Vercel/Netlify الحقيقية لكل مشروع.
- **رابط LinkedIn** في `src/components/Hero.jsx` و `src/components/Contact.jsx` — حط اللينك بتاعك الحقيقي بدل `https://linkedin.com`.
- تقدر تضيف صورة شخصية لو عايز داخل `public/` وتربطها في `Hero.jsx`.

## التقنيات المستخدمة

- React 18 + Vite
- Tailwind CSS (custom design tokens: colors, fonts, animations)
- Context API لإدارة الـ theme (dark/light) مع حفظه في localStorage
- lucide-react للأيقونات
