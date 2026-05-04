import { useState } from 'react';
import Header from './components/Header/Header';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Footer from './components/Footer/Footer';
import './App.css';

const PRODUCTS = [
  {
    id: 1,
    name: '따뜻한 코트',
    price: 120000,
    category: '상의',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
  },
  {
    id: 2,
    name: '따뜻한 코트',
    price: 120000,
    category: '상의',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
  },
  {
    id: 3,
    name: '린넨 셔츠',
    price: 65000,
    category: '상의',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
  },
  {
    id: 4,
    name: '와이드 팬츠',
    price: 89000,
    category: '하의',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400',
  },
  {
    id: 5,
    name: '데님 팬츠',
    price: 75000,
    category: '하의',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
  },
  {
    id: 6,
    name: '가죽 벨트',
    price: 35000,
    category: '악세서리',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  },
];

const CATEGORIES = ['전체', '상의', '하의', '악세서리'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [cart, setCart] = useState([]);

  const filteredProducts =
    activeCategory === '전체'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists)
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main className="main">
        <CategoryFilter
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <ProductGrid
          products={filteredProducts}
          activeCategory={activeCategory}
          onAddToCart={addToCart}
        />
      </main>
      <Footer />
    </div>
  );
}
