import './CategoryFilter.css';

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <section className="category-filter">
      <span className="category-filter__label">카테고리</span>
      <ul className="category-filter__list" role="tablist">
        {categories.map((cat) => (
          <li key={cat} role="presentation">
            <button
              role="tab"
              aria-selected={active === cat}
              className={`category-filter__btn ${active === cat ? 'category-filter__btn--active' : ''}`}
              onClick={() => onChange(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
