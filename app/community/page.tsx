import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { UsersIcon, DocumentIcon, SearchIcon, CheckmarkIcon, ShieldIcon } from '@/components/Icons'

export default function Community() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <UsersIcon className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-bold text-black">جامعه</h1>
            </div>
            
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <UsersIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">چگونه مشارکت کنم؟</h2>
              </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                IOP یک پروژه باز و جامعه‌محور است و مشارکت همه علاقه‌مندان را می‌پذیرد. 
                راه‌های مختلفی برای مشارکت وجود دارد:
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4 border-r-4 border-accent pr-4">
                  <div className="p-2 bg-accent/10 rounded">
                    <ShieldIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">توسعه استاندارد</h3>
                    <p>
                      می‌توانید در توسعه و بهبود استاندارد IOP از طریق پیشنهاد تغییرات، 
                      بررسی کد و مستندات و مشارکت در بحث‌ها شرکت کنید.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-r-4 border-accent pr-4">
                  <div className="p-2 bg-accent/10 rounded">
                    <DocumentIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">نوشتن مستندات</h3>
                    <p>
                      می‌توانید در نوشتن و بهبود مستندات پروژه، ترجمه محتوا و ایجاد راهنماها 
                      مشارکت کنید.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-r-4 border-accent pr-4">
                  <div className="p-2 bg-accent/10 rounded">
                    <SearchIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">بررسی و تست</h3>
                    <p>
                      می‌توانید در بررسی و تست محصولات دیجیتال برای گواهی IOP مشارکت کنید.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-r-4 border-accent pr-4">
                  <div className="p-2 bg-accent/10 rounded">
                    <CheckmarkIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">تبلیغ و اطلاع‌رسانی</h3>
                    <p>
                      می‌توانید در تبلیغ و اطلاع‌رسانی درباره IOP و اهمیت حریم خصوصی در 
                      شبکه‌های اجتماعی و رویدادها مشارکت کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <UsersIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">جامعه IOP</h2>
              </div>
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

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckmarkIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">راه‌های ارتباط</h2>
              </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                برای مشارکت در IOP می‌توانید از راه‌های زیر با ما در ارتباط باشید:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <CheckmarkIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span><strong>GitHub:</strong> برای مشارکت در کد و مستندات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckmarkIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span><strong>ایمیل:</strong> برای سوالات و پیشنهادات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckmarkIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span><strong>جلسات منظم:</strong> برای بحث و تصمیم‌گیری</span>
                </li>
              </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

