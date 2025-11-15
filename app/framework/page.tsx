import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Framework() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">چارچوب IOP v0.1</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">معرفی</h2>
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

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">محتوا</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">اصول اخلاقی</h3>
                <p>
                  تعریف اصول بنیادین برای حفاظت از حریم خصوصی کاربران شامل شفافیت، کنترل کاربر، 
                  حداقل داده و امنیت.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">الزامات فنی</h3>
                <p>
                  مشخصات فنی برای پیاده‌سازی استانداردهای حریم خصوصی شامل رمزنگاری، مدیریت داده، 
                  و کنترل دسترسی.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">چک‌لیست اجرایی</h3>
                <p>
                  راهنمای عملی برای کسب‌وکارها برای ارزیابی و بهبود سطح حریم خصوصی محصولات خود.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">دانلود</h2>
            <div className="space-y-4">
              <div className="border border-black p-6">
                <h3 className="font-semibold mb-2">چارچوب IOP v0.1 (PDF)</h3>
                <p className="text-gray-600 mb-4">نسخه کامل چارچوب به صورت PDF</p>
                <button className="px-6 py-2 bg-accent text-white hover:bg-accent/90 transition-colors">
                  دانلود PDF
                </button>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-semibold mb-2">چارچوب IOP v0.1 (Markdown)</h3>
                <p className="text-gray-600 mb-4">نسخه متنی چارچوب برای توسعه‌دهندگان</p>
                <button className="px-6 py-2 bg-accent text-white hover:bg-accent/90 transition-colors">
                  دانلود Markdown
                </button>
              </div>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">نسخه‌ها</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                چارچوب IOP به صورت مداوم بر اساس بازخوردهای جامعه و نیازهای جدید به‌روزرسانی می‌شود. 
                تمام نسخه‌ها در مخزن GitHub پروژه در دسترس هستند.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

