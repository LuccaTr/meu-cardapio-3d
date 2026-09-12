export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-[65px] z-10">
      <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar max-w-md mx-auto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-black text-white shadow-sm scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}