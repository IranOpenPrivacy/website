import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">تماس با ما</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">ارسال پیام</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  نام
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white hover:bg-accent/90 transition-colors"
              >
                ارسال پیام
              </button>
            </form>
          </section>

          <section className="mb-16 border-t border-black pt-12">
            <h2 className="text-2xl font-semibold mb-6">راه‌های دیگر ارتباط</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">ایمیل</h3>
                <p>
                  <a href="mailto:contact@iop.ir" className="text-accent hover:underline">
                    contact@iop.ir
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p>
                  <a 
                    href="https://github.com/iran-open-privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/iran-open-privacy
                  </a>
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

