import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Link from 'next/link'
import IsometricIllustration from '@/components/IsometricIllustration'
import { ShieldIcon, CheckmarkIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-start mb-8">
                  <Logo size="large" showText={true} />
                </div>
                <h1 className="text-5xl font-bold mb-6 text-black">Iran Open Privacy (IOP)</h1>
                <p className="text-xl text-gray-600 mb-8">استاندارد باز و بی‌طرف حریم خصوصی در ایران</p>
                <p className="text-lg leading-relaxed mb-12 text-gray-700">
                  Iran Open Privacy یک چارچوب آزاد، شفاف و غیرانتفاعی برای تعریف حداقل استانداردهای حریم خصوصی در محصولات دیجیتال ایران است. هدف ما ایجاد اعتماد میان مردم و فناوری و ارائه‌ی راهنمایی عملی برای کسب‌وکارهاست تا بتوانند روی حفظ حریم خصوصی کاربران استاندارد عمل کنند.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/about" 
                    className="px-8 py-3 bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm"
                  >
                    مطالعه مانیفست
                  </Link>
                  <Link 
                    href="/community" 
                    className="px-8 py-3 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-colors rounded-sm"
                  >
                    مشارکت در پروژه
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <IsometricIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* What is IOP Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-accent">IOP چیست؟</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              IOP یک استاندارد باز و جامعه‌محور است که بدون وابستگی به هیچ نهاد دولتی یا تجاری، اصول اخلاقی، الزامات فنی و چک‌لیست‌های اجرایی حفاظت از داده‌های کاربران را تعریف می‌کند. تمام تصمیم‌ها به صورت شفاف و با مدل حکمرانی باز و مشارکت متخصصان، توسعه‌دهندگان، فعالان آزادی اینترنت و علاقه‌مندان گرفته می‌شود.
            </p>
          </div>
        </section>

        {/* Three Columns Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldIcon className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-semibold text-accent">استاندارد</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  تعریف اصول اخلاقی و الزامات فنی برای حفاظت از حریم خصوصی کاربران در محصولات دیجیتال
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckmarkIcon className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-semibold text-accent">گواهی</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  ارائه‌ی فرآیند شفاف برای ارزیابی و گواهی محصولات دیجیتال بر اساس استاندارد IOP
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldIcon className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-semibold text-accent">جامعه</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  ایجاد جامعه‌ای از متخصصان، توسعه‌دهندگان و علاقه‌مندان برای پیشبرد استاندارد
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

