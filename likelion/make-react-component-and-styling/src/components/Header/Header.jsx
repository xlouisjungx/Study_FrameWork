import './Header.css';

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          멋사몰
        </a>
        <nav className="header__nav">
          <a href="/products" className="header__nav-link">
            상품목록
          </a>
          <a href="/cart" className="header__nav-link header__cart">
            장바구니
            {cartCount > 0 && (
              <span className="header__cart-badge">{cartCount}</span>
            )}
          </a>
        </nav>
      </div>
    </header>
  );
}
