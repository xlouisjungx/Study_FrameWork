import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ products, activeCategory, onAddToCart }) {
  return (
    <section className="product-grid">
      <h2 className="product-grid__title">
        {activeCategory === '전체' ? '전체 상품' : activeCategory}
        <span className="product-grid__count">({products.length})</span>
      </h2>
      {products.length === 0 ? (
        <div className="product-grid__empty">
          <p>해당 카테고리에 상품이 없습니다.</p>
        </div>
      ) : (
        <ul className="product-grid__list">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
