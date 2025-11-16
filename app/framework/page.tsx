import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DocumentIcon, CertificateIcon, CheckmarkIcon, LockIcon, ShieldIcon } from '@/components/Icons'

export default function Framework() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <DocumentIcon className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-bold text-black">چارچوب IOP v0.1</h1>
            </div>
            
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <DocumentIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">معرفی</h2>
              </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                چارچوب IOP v0.1 اولین نسخه از استاندارد حریم خصوصی ایران است که شامل اصول اخلاقی، 
                الزامات فنی و چک‌لیست‌های اجرایی برای حفاظت از داده‌های کاربران می‌شود.
              </p>
              <p>
                این چارچوب به صورت باز و با مشارکت جامعه توسعه یافته است و به طور مداوم بر اساس 
                بازخوردها و نیازهای جامعه به‌روزرسانی می‌شود.
              </p>
            </div>
          </section>

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <DocumentIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">محتوا</h2>
              </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <ShieldIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">اصول اخلاقی</h3>
                  <p>
                    تعریف اصول بنیادین برای حفاظت از حریم خصوصی کاربران شامل شفافیت، کنترل کاربر، 
                    حداقل داده و امنیت.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <LockIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">الزامات فنی</h3>
                  <p>
                    مشخصات فنی برای پیاده‌سازی استانداردهای حریم خصوصی شامل رمزنگاری، مدیریت داده، 
                    و کنترل دسترسی.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <CheckmarkIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">چک‌لیست اجرایی</h3>
                  <p>
                    راهنمای عملی برای کسب‌وکارها برای ارزیابی و بهبود سطح حریم خصوصی محصولات خود.
                  </p>
                </div>
              </div>
            </div>
          </section>

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <CertificateIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">دانلود</h2>
              </div>
              <div className="space-y-4">
                <div className="border border-gray-300 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DocumentIcon className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold">چارچوب IOP v0.1 (PDF)</h3>
                  </div>
                <p className="text-gray-600 mb-4">نسخه کامل چارچوب به صورت PDF</p>
                <button className="px-6 py-2 bg-accent text-white hover:bg-accent/90 transition-colors">
                  دانلود PDF
                </button>
              </div>
                <div className="border border-gray-300 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DocumentIcon className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold">چارچوب IOP v0.1 (Markdown)</h3>
                  </div>
                <p className="text-gray-600 mb-4">نسخه متنی چارچوب برای توسعه‌دهندگان</p>
                <button className="px-6 py-2 bg-accent text-white hover:bg-accent/90 transition-colors">
                  دانلود Markdown
                </button>
              </div>
            </div>
          </section>

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckmarkIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">نسخه‌ها</h2>
              </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                چارچوب IOP به صورت مداوم بر اساس بازخوردهای جامعه و نیازهای جدید به‌روزرسانی می‌شود. 
                تمام نسخه‌ها در مخزن GitHub پروژه در دسترس هستند.
              </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

