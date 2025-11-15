# راهنمای Push کردن پروژه به Git

این راهنما مراحل کامل برای آپلود پروژه IOP به Git (GitHub) را توضیح می‌دهد.

## مراحل

### 1. بررسی وضعیت Git

ابتدا بررسی کنید که آیا Git در پروژه شما initialize شده است:

```bash
cd /Users/are/Desktop/IOP/V0.1/Website
git status
```

اگر خطا داد، باید Git را initialize کنید.

### 2. Initialize کردن Git Repository

```bash
git init
```

### 3. اضافه کردن تمام فایل‌ها

```bash
git add .
```

یا اگر می‌خواهید فایل‌های خاصی را اضافه کنید:

```bash
git add package.json
git add app/
git add components/
# و غیره...
```

### 4. ایجاد اولین Commit

```bash
git commit -m "Initial commit: IOP website with logo and brand"
```

### 5. ایجاد Repository در GitHub

1. به [github.com](https://github.com) بروید و وارد حساب خود شوید
2. روی دکمه **"+"** در بالا سمت راست کلیک کنید
3. **"New repository"** را انتخاب کنید
4. نام repository را وارد کنید (مثلاً: `iop-website`)
5. **Public** یا **Private** را انتخاب کنید
6. **توجه**: گزینه "Initialize with README" را تیک نزنید
7. روی **"Create repository"** کلیک کنید

### 6. اتصال به Remote Repository

بعد از ایجاد repository، GitHub یک URL به شما می‌دهد. از آن استفاده کنید:

```bash
git remote add origin https://github.com/YOUR_USERNAME/iop-website.git
```

یا اگر از SSH استفاده می‌کنید:

```bash
git remote add origin git@github.com:YOUR_USERNAME/iop-website.git
```

**توجه**: `YOUR_USERNAME` را با نام کاربری GitHub خود جایگزین کنید.

### 7. تغییر نام Branch به main (اگر لازم است)

```bash
git branch -M main
```

### 8. Push کردن به GitHub

```bash
git push -u origin main
```

اگر اولین بار است که push می‌کنید، ممکن است از شما username و password بخواهد.

### 9. بررسی

به صفحه repository در GitHub بروید و مطمئن شوید که تمام فایل‌ها آپلود شده‌اند.

---

## دستورات کامل (Copy-Paste Ready)

اگر می‌خواهید همه را یکجا اجرا کنید:

```bash
cd /Users/are/Desktop/IOP/V0.1/Website

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: IOP website with logo and brand"

# Add remote (جایگزین کنید YOUR_USERNAME را)
git remote add origin https://github.com/YOUR_USERNAME/iop-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## برای Push های بعدی

بعد از اولین push، برای push کردن تغییرات جدید:

```bash
# اضافه کردن تغییرات
git add .

# ایجاد commit
git commit -m "توضیح تغییرات"

# Push کردن
git push
```

---

## مشکلات رایج

### خطای Authentication

اگر با خطای authentication مواجه شدید:

1. **استفاده از Personal Access Token:**
   - به GitHub → Settings → Developer settings → Personal access tokens بروید
   - یک token جدید ایجاد کنید
   - به جای password از token استفاده کنید

2. **استفاده از SSH:**
   - SSH key را به GitHub اضافه کنید
   - از SSH URL استفاده کنید: `git@github.com:USERNAME/REPO.git`

### خطای "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/iop-website.git
```

### خطای "branch main does not exist"

```bash
git branch -M main
git push -u origin main
```

---

## نکات مهم

1. **قبل از push:**
   - مطمئن شوید `.gitignore` درست تنظیم شده است
   - فایل‌های حساس (مثل `.env`) را commit نکنید

2. **Commit Messages:**
   - از پیام‌های واضح و توصیفی استفاده کنید
   - به فارسی یا انگلیسی می‌توانید بنویسید

3. **Branch Strategy:**
   - برای پروژه‌های کوچک، branch `main` کافی است
   - برای پروژه‌های بزرگ‌تر، می‌توانید از feature branches استفاده کنید

---

## دستورات مفید

```bash
# مشاهده وضعیت
git status

# مشاهده تغییرات
git diff

# مشاهده تاریخچه commits
git log

# مشاهده remote repositories
git remote -v

# تغییر URL remote
git remote set-url origin NEW_URL
```

