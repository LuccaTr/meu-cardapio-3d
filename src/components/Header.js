export default function Header({ restaurantName, subtitle }) {
  return (
    <header className="bg-white p-4 border-b border-gray-100 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">
            {restaurantName}
          </h1>
          {subtitle && (
            <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
          )}
        </div>
        
        {/* Indicador visual de mesa (exemplo dinâmico) */}
        <span className="bg-green-50 text-green-700 border border-green-200 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Mesa 04
        </span>
      </div>
    </header>
  );
}