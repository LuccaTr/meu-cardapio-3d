import AllergenBadge from './AllergenBadge';

export default function DishCard({ dish, currency, onOpen3D }) {
  const has3D = Boolean(dish.model3dGlb);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex justify-between gap-4 border border-gray-100">
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{dish.name}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{dish.description}</p>
        
        {/* Badges de Alérgenos */}
        <div className="flex flex-wrap gap-1 mt-2">
          {dish.allergens.map((allergen) => (
            <AllergenBadge key={allergen} label={allergen} />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-green-600">{currency} {dish.price.toFixed(2)}</span>
          
          {has3D && (
            <button
              onClick={() => onOpen3D(dish)}
              className="bg-black text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 hover:bg-gray-800 transition"
            >
              👁️ Ver 3D
            </button>
          )}
        </div>
      </div>
    </div>
  );
}