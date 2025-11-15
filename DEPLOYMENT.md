# راهنمای انتشار وب‌سایت IOP

این راهنما روش‌های مختلف برای انتشار وب‌سایت IOP را توضیح می‌دهد.

## روش ۱: Vercel (توصیه می‌شود)

Vercel ساده‌ترین و سریع‌ترین روش برای انتشار پروژه‌های Next.js است.

### مراحل:

1. **ایجاد حساب کاربری در Vercel**
   - به [vercel.com](https://vercel.com) بروید
   - با GitHub، GitLab یا ایمیل ثبت‌نام کنید

2. **آماده‌سازی پروژه برای Git**
   ```bash
   # اگر هنوز Git repository ندارید:
   git init
   git add .
   git commit -m "Initial commit"
   
   # ایجاد repository در GitHub/GitLab
   # سپس push کنید:
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **اتصال به Vercel**
   - در Vercel روی "Add New Project" کلیک کنید
   - Repository خود را انتخاب کنید
   - تنظیمات را بررسی کنید (معمولاً نیازی به تغییر نیست)
   - روی "Deploy" کلیک کنید

4. **اتمام**
   - Vercel به صورت خودکار پروژه را build و deploy می‌کند
   - یک URL رایگان دریافت می‌کنید (مثل: `your-project.vercel.app`)
   - هر بار که به repository push می‌کنید، به صورت خودکار deploy می‌شود

### مزایا:
- رایگان برای پروژه‌های شخصی
- پشتیبانی کامل از Next.js
- Deploy خودکار با هر push
- SSL رایگان
- CDN جهانی

---

## روش ۲: Netlify

### مراحل:

1. **ایجاد حساب کاربری در Netlify**
   - به [netlify.com](https://netlify.com) بروید
   - ثبت‌نام کنید

2. **Deploy از Git**
   - روی "Add new site" → "Import an existing project" کلیک کنید
   - Repository خود را انتخاب کنید
   - تنظیمات Build:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - روی "Deploy site" کلیک کنید

### مزایا:
- رایگان برای پروژه‌های شخصی
- Deploy خودکار
- SSL رایگان

---

## روش ۳: GitHub Pages (با Static Export)

برای استفاده از GitHub Pages، باید Next.js را به صورت static export کنید.

### مراحل:

1. **تنظیم Next.js برای Static Export**
   
   فایل `next.config.js` را به این صورت تغییر دهید:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     reactStrictMode: true,
   }
   
   module.exports = nextConfig
   ```

2. **Build و Export**
   ```bash
   npm run build
   ```
   این کار یک پوشه `out` ایجاد می‌کند.

3. **Deploy به GitHub Pages**
   - Repository خود را در GitHub ایجاد کنید
   - پوشه `out` را push کنید
   - در Settings → Pages، branch `main` و پوشه `/out` را انتخاب کنید

### نکته:
- این روش برای Next.js با App Router ممکن است محدودیت‌هایی داشته باشد
- Vercel یا Netlify توصیه می‌شوند

---

## روش ۴: Self-Hosting (سرور شخصی)

### مراحل:

1. **Build پروژه**
   ```bash
   npm run build
   ```

2. **اجرای Production Server**
   ```bash
   npm start
   ```

3. **استفاده از PM2 (برای اجرای دائمی)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "iop-website" -- start
   pm2 save
   pm2 startup
   ```

4. **تنظیم Nginx (اختیاری)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## تنظیمات پیشنهادی

### دامنه سفارشی

در Vercel یا Netlify می‌توانید دامنه سفارشی خود را اضافه کنید:
- در تنظیمات پروژه → Domains
- دامنه خود را اضافه کنید
- DNS records را طبق راهنمای ارائه شده تنظیم کنید

### Environment Variables

اگر در آینده نیاز به متغیرهای محیطی داشتید:
- در Vercel: Settings → Environment Variables
- در Netlify: Site settings → Environment variables

---

## نکات مهم

1. **قبل از Deploy:**
   - مطمئن شوید `npm run build` بدون خطا اجرا می‌شود
   - تمام وابستگی‌ها در `package.json` موجود هستند

2. **بهینه‌سازی:**
   - تصاویر را بهینه کنید
   - از Next.js Image component استفاده کنید (اگر تصویری اضافه کردید)

3. **SEO:**
   - Metadata در `app/layout.tsx` تنظیم شده است
   - می‌توانید برای هر صفحه metadata جداگانه اضافه کنید

---

## پشتیبانی

اگر مشکلی در deploy داشتید:
- لاگ‌های build را بررسی کنید
- مطمئن شوید تمام dependencies نصب شده‌اند
- بررسی کنید که Node.js version با requirements سازگار است

