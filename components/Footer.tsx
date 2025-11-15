import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-black mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Logo size="small" showText={true} />
          <div className="text-center text-sm text-gray-600">
            <p>استاندارد باز و بی‌طرف حریم خصوصی در ایران</p>
            <p className="mt-2">© {new Date().getFullYear()} — تمام حقوق محفوظ است</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

