import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Governance() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">حکمرانی باز</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">مقدمه</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                IOP بر اساس مدل حکمرانی باز و مشارکتی عمل می‌کند. تمام تصمیم‌ها به صورت شفاف 
                و با مشارکت جامعه گرفته می‌شوند. هیچ نهاد یا فردی به تنهایی کنترل پروژه را در دست ندارد.
              </p>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">کمیته‌ها</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">کمیته فنی</h3>
                <p>
                  مسئولیت توسعه و نگهداری استانداردهای فنی و چارچوب IOP را بر عهده دارد. 
                  این کمیته شامل متخصصان امنیت، حریم خصوصی و توسعه‌دهندگان است.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">کمیته گواهی</h3>
                <p>
                  مسئولیت فرآیند ارزیابی و گواهی محصولات دیجیتال بر اساس استاندارد IOP را بر عهده دارد.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">کمیته جامعه</h3>
                <p>
                  مسئولیت مدیریت جامعه، رویدادها و ارتباطات را بر عهده دارد.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">مشارکت‌کنندگان</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                تمام مشارکت‌کنندگان در IOP به صورت داوطلبانه فعالیت می‌کنند. هر کسی می‌تواند 
                در توسعه استاندارد، بررسی کد، نوشتن مستندات و یا مشارکت در بحث‌ها شرکت کند.
              </p>
              <p>
                مشارکت‌کنندگان بر اساس میزان مشارکت و تخصص خود می‌توانند به عضویت کمیته‌ها درآیند.
              </p>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">قوانین تصمیم‌گیری</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                تمام تصمیم‌های مهم در IOP از طریق بحث‌های باز و رای‌گیری جامعه گرفته می‌شوند. 
                فرآیند تصمیم‌گیری به صورت شفاف و قابل ردیابی است.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>پیشنهادات از طریق GitHub Issues و Pull Requests ارائه می‌شوند</li>
                <li>بحث‌ها در فضاهای عمومی و باز انجام می‌شوند</li>
                <li>تصمیم‌ها بر اساس اجماع جامعه گرفته می‌شوند</li>
                <li>تمام تصمیم‌ها مستند و قابل ردیابی هستند</li>
              </ul>
            </div>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">شفافیت</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                تمام فرآیندهای حکمرانی در IOP به صورت شفاف و قابل دسترس برای همه هستند. 
                جلسات، تصمیم‌ها و مستندات در دسترس عموم قرار دارند.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

