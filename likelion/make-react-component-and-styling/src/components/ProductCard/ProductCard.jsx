import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, image } = product;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">
          {price.toLocaleString('ko-KR')}
          <span className="product-card__currency">원</span>
        </p>
        <button
          className="product-card__btn"
          onClick={() => onAddToCart(product)}
          aria-label={`${name} 장바구니에 넣기`}
        >
          장바구니에 넣기
        </button>
      </div>
    </article>
  );
}
