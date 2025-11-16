import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ShieldIcon, DocumentIcon, CheckmarkIcon, LockIcon } from '@/components/Icons'

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <ShieldIcon className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-bold text-black">درباره IOP</h1>
            </div>
            
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <DocumentIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">مانیفست</h2>
              </div>
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

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckmarkIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">اهداف</h2>
              </div>
            <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
              {[
                'تعریف استانداردهای حداقلی برای حفاظت از حریم خصوصی کاربران در محصولات دیجیتال',
                'ایجاد اعتماد میان مردم و فناوری از طریق شفافیت و استانداردسازی',
                'ارائه‌ی راهنمایی عملی برای کسب‌وکارها برای پیاده‌سازی استانداردهای حریم خصوصی',
                'ایجاد جامعه‌ای از متخصصان و علاقه‌مندان برای پیشبرد استاندارد',
                'ارائه‌ی فرآیند شفاف برای ارزیابی و گواهی محصولات دیجیتال'
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckmarkIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </section>

            <section className="mb-16 border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <ShieldIcon className="w-7 h-7 text-accent" />
                <h2 className="text-2xl font-semibold text-accent">اصول</h2>
              </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <DocumentIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">باز بودن</h3>
                  <p>
                    تمام فرآیندها، تصمیم‌ها و مستندات به صورت باز و قابل دسترس برای همه هستند.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <ShieldIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">بی‌طرفی</h3>
                  <p>
                    IOP بدون وابستگی به هیچ نهاد دولتی یا تجاری عمل می‌کند و منافع کاربران را در اولویت قرار می‌دهد.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <CheckmarkIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">شفافیت</h3>
                  <p>
                    تمام تصمیم‌ها و فرآیندها به صورت شفاف و قابل ردیابی هستند.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <ShieldIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">مشارکت</h3>
                  <p>
                    IOP بر اساس مشارکت داوطلبانه متخصصان، توسعه‌دهندگان و علاقه‌مندان پیش می‌رود.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded">
                  <LockIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">غیرانتفاعی</h3>
                  <p>
                    IOP یک پروژه غیرانتفاعی است که هدف آن خدمت به جامعه و حفاظت از حریم خصوصی کاربران است.
                  </p>
                </div>
              </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

