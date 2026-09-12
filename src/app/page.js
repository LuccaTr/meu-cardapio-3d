'use client';

import { useState } from 'react';
import menuData from '../data/menu.json';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import DishCard from '../components/DishCard';
import ModelViewerModal from '../components/ModelViewerModal';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0].id);
  const [active3DDish, setActive3DDish] = useState(null);

  const filteredDishes = menuData.dishes.filter(
    (dish) => dish.categoryId === selectedCategory
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <Header 
        restaurantName={menuData.restaurantName} 
        subtitle="Dublin - Temple Bar" 
      />

      <CategoryFilter
        categories={menuData.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="p-4 max-w-md mx-auto">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            currency={menuData.currency}
            onOpen3D={(d) => setActive3DDish(d)}
          />
        ))}
      </div>

      <ModelViewerModal
        dish={active3DDish}
        onClose={() => setActive3DDish(null)}
      />
    </main>
  );
}