import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__section">
          <h2 className="footer__heading">About us</h2>
          <p className="footer__text">
            최고의 상품을 최고의 가격에 판매하는 멋사몰입니다.
          </p>
        </section>
        <section className="footer__section">
          <h2 className="footer__heading">Contact us</h2>
          <address className="footer__address">
            <p>
              <span className="footer__info-label">Email:</span>
              <a href="mailto:xxxx@xx.com" className="footer__link">
                xxxx@xx.com
              </a>
            </p>
            <p>
              <span className="footer__info-label">Address:</span>
              서울특별시 멋사구 멋사로 30 멋사빌딩 5층
            </p>
          </address>
        </section>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} 멋사몰. All rights reserved.
      </div>
    </footer>
  );
}
