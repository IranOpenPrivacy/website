import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">درباره IOP</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">مانیفست</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                در دنیای دیجیتال امروز، حریم خصوصی کاربران به یکی از مهم‌ترین نگرانی‌های جامعه تبدیل شده است. 
                با افزایش استفاده از محصولات دیجیتال در ایران، نیاز به یک استاندارد شفاف و قابل اعتماد برای 
                حفاظت از داده‌های کاربران بیش از پیش احساس می‌شود.
              </p>
              <p>
                Iran Open Privacy (IOP) با هدف ایجاد یک چارچوب باز، بی‌طرف و غیرانتفاعی برای تعریف 
                حداقل استانداردهای حریم خصوصی در محصولات دیجیتال ایران تأسیس شده است. این پروژه 
                بدون وابستگی به هیچ نهاد دولتی یا تجاری، بر اساس اصول شفافیت، مشارکت و اعتماد عمل می‌کند.
              </p>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">اهداف</h2>
            <ul className="space-y-4 text-lg leading-relaxed text-gray-700 list-disc list-inside">
              <li>تعریف استانداردهای حداقلی برای حفاظت از حریم خصوصی کاربران در محصولات دیجیتال</li>
              <li>ایجاد اعتماد میان مردم و فناوری از طریق شفافیت و استانداردسازی</li>
              <li>ارائه‌ی راهنمایی عملی برای کسب‌وکارها برای پیاده‌سازی استانداردهای حریم خصوصی</li>
              <li>ایجاد جامعه‌ای از متخصصان و علاقه‌مندان برای پیشبرد استاندارد</li>
              <li>ارائه‌ی فرآیند شفاف برای ارزیابی و گواهی محصولات دیجیتال</li>
            </ul>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">اصول</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">باز بودن</h3>
                <p>
                  تمام فرآیندها، تصمیم‌ها و مستندات به صورت باز و قابل دسترس برای همه هستند.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">بی‌طرفی</h3>
                <p>
                  IOP بدون وابستگی به هیچ نهاد دولتی یا تجاری عمل می‌کند و منافع کاربران را در اولویت قرار می‌دهد.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">شفافیت</h3>
                <p>
                  تمام تصمیم‌ها و فرآیندها به صورت شفاف و قابل ردیابی هستند.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">مشارکت</h3>
                <p>
                  IOP بر اساس مشارکت داوطلبانه متخصصان، توسعه‌دهندگان و علاقه‌مندان پیش می‌رود.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">غیرانتفاعی</h3>
                <p>
                  IOP یک پروژه غیرانتفاعی است که هدف آن خدمت به جامعه و حفاظت از حریم خصوصی کاربران است.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

