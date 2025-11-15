import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Community() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">جامعه</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">چگونه مشارکت کنم؟</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                IOP یک پروژه باز و جامعه‌محور است و مشارکت همه علاقه‌مندان را می‌پذیرد. 
                راه‌های مختلفی برای مشارکت وجود دارد:
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="border-r-4 border-accent pr-4">
                  <h3 className="font-semibold mb-2">توسعه استاندارد</h3>
                  <p>
                    می‌توانید در توسعه و بهبود استاندارد IOP از طریق پیشنهاد تغییرات، 
                    بررسی کد و مستندات و مشارکت در بحث‌ها شرکت کنید.
                  </p>
                </div>
                
                <div className="border-r-4 border-accent pr-4">
                  <h3 className="font-semibold mb-2">نوشتن مستندات</h3>
                  <p>
                    می‌توانید در نوشتن و بهبود مستندات پروژه، ترجمه محتوا و ایجاد راهنماها 
                    مشارکت کنید.
                  </p>
                </div>
                
                <div className="border-r-4 border-accent pr-4">
                  <h3 className="font-semibold mb-2">بررسی و تست</h3>
                  <p>
                    می‌توانید در بررسی و تست محصولات دیجیتال برای گواهی IOP مشارکت کنید.
                  </p>
                </div>
                
                <div className="border-r-4 border-accent pr-4">
                  <h3 className="font-semibold mb-2">تبلیغ و اطلاع‌رسانی</h3>
                  <p>
                    می‌توانید در تبلیغ و اطلاع‌رسانی درباره IOP و اهمیت حریم خصوصی در 
                    شبکه‌های اجتماعی و رویدادها مشارکت کنید.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">جامعه IOP</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                جامعه IOP شامل متخصصان امنیت، حریم خصوصی و توسعه‌دهندگان، فعالان آزادی اینترنت، 
                و علاقه‌مندان به حفاظت از حریم خصوصی کاربران است.
              </p>
              <p>
                ما بر اساس اصول احترام، شفافیت و مشارکت با یکدیگر همکاری می‌کنیم. 
                تمام اعضای جامعه می‌توانند در تصمیم‌گیری‌ها و توسعه پروژه مشارکت کنند.
              </p>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">راه‌های ارتباط</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                برای مشارکت در IOP می‌توانید از راه‌های زیر با ما در ارتباط باشید:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>GitHub: برای مشارکت در کد و مستندات</li>
                <li>ایمیل: برای سوالات و پیشنهادات</li>
                <li>جلسات منظم: برای بحث و تصمیم‌گیری</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

