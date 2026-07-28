export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container py-8 bg-surface-container-lowest">
      <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Right (RTL right is first element): Logo */}
{/* Logo */}
<div className="flex items-center gap-3 order-1">
  <div className="flex md:h-12 md:w-12 w-8 h-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
    <span className="text-xl text-white">⚜</span>
  </div>

  <div>
    <h2 className="font-arabic text-base font-extrabold text-on-surface">
      الجمهورية النيردية
    </h2>
    <p className="font-arabic text-xs text-on-surface-variant">
      NERD
    </p>
  </div>
</div>

        {/* Center: Copyright */}
        <div className="font-arabic text-sm text-on-surface-variant/70 text-center order-3 md:order-2">
          © 2026 الجمهورية النيردية المتحدة — جميع الحقوق محفوظة
        </div>

        {/* Left: President */}
        <div className="font-arabic text-sm text-on-surface-variant/70 order-2 md:order-3">
          رئيس الجمهورية: جو نيرد
        </div>
      </div>
    </footer>
  );
}
