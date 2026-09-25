import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, ChevronRight, CloudSun, Compass, Eye, Heart, Home, Palette, Plus, Search, Shirt, Sparkles, Star, WashingMachine } from 'lucide-react';
import './styles.css';

const styles = ['Look automne', 'Chic', 'Décontracté', 'Simple', 'Sport Wear', 'Bureau'];
const nav = [
  ['Accueil', Home],
  ['Dressing', Shirt],
  ['Calendrier', CalendarDays],
  ['Favoris', Heart],
  ['Coiffures', Sparkles],
  ['Indisponibles', WashingMachine],
] as const;

const wardrobe = [
  { id: 1, name: 'Blazer Croisé Noir', category: 'Hauts', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80' },
  { id: 2, name: 'Jean Wide Leg Brut', category: 'Bas', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&q=80' },
  { id: 3, name: 'Robe Soie Champagne', category: 'Robes', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=900&q=80' },
  { id: 4, name: 'Baskets Leather Clean', category: 'Chaussures', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80' },
  { id: 5, name: 'Sac Cuir Structuré', category: 'Accessoires', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80' },
  { id: 6, name: 'Trench Coat Beige', category: 'Manteaux', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80' },
];

const lookOfDay = {
  title: 'Élégance automnale',
  subtitle: 'Power Dressing Minimal',
  description: 'Une alliance parfaite entre structure et fluidité, idéale pour vos rendez-vous de la journée.',
  image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&q=80',
  beauty: 'Coiffure: Chignon bas lissé · Maquillage: Nude glow & eyeliner fin',
};

function App() {
  const [activeStyle, setActiveStyle] = React.useState(styles[0]);
  const [activeNav, setActiveNav] = React.useState('Accueil');
  const today = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>ALStudio</span>
        </div>

        <nav className="nav">
          {nav.map(([label, Icon]) => (
            <button
              key={label}
              className={activeNav === label ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveNav(label)}
            >
              <Icon size={19} />
              {label}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="avatar">S</div>
          <div>
            <strong>Solène</strong>
            <small>Mon profil</small>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="mobile-header">
          <div className="brand">
            <span className="brand-mark">A</span>
            <span>ALStudio</span>
          </div>
          <div className="avatar">S</div>
        </header>

        <section className="topbar">
          <div>
            <p className="eyebrow">{today}</p>
            <h1>
              Bonjour, Solène <span aria-hidden="true">👋</span>
            </h1>
            <p className="muted">Voici votre inspiration mode du jour.</p>
          </div>
          <button className="cta-button">Découvrir</button>
        </section>

        <section className="weather">
          <div>
            <p className="eyebrow">MÉTÉO LOCALE</p>
            <h2>Paris, France</h2>
            <div className="temp">18°</div>
            <p>Partiellement nuageux</p>
          </div>
          <CloudSun size={76} />
        </section>

        <div className="section-heading">
          <h2>Votre look du jour</h2>
          <button className="text-button">Modifier</button>
        </div>

        <section className="outfit-card">
          <div className="outfit-art">
            <Shirt size={92} />
            <div className="sparkle">
              <Sparkles size={18} />
            </div>
          </div>
          <div className="outfit-info">
            <span className="tag">{lookOfDay.title}</span>
            <h3>{lookOfDay.subtitle}</h3>
            <p>{lookOfDay.description}</p>
            <div className="meta">
              <div>
                <strong>Style</strong>
                <span>Chic minimal</span>
              </div>
              <div>
                <strong>Confort</strong>
                <span>Très élevé</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-heading mt-32">
          <h2>Styles</h2>
          <span className="muted">Faire défiler</span>
        </div>

        <div className="filters">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={activeStyle === style ? 'filter selected' : 'filter'}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="section-heading mt-32">
          <h2>Votre planning</h2>
          <button className="text-button">Voir tout</button>
        </div>

        <section className="calendar-card">
          <div className="calendar-icon">
            <CalendarDays />
          </div>
          <div>
            <strong>Aucune tenue planifiée demain</strong>
            <p>Préparez votre prochain look à l’avance.</p>
          </div>
          <button className="mini-button">
            <Plus size={18} />
            Ajouter
          </button>
        </section>

        <div className="section-heading mt-32">
          <h2>Pièces clés récentes</h2>
          <button className="text-button">Tout voir</button>
        </div>

        <div className="wardrobe-grid">
          {wardrobe.map((item) => (
            <article key={item.id} className="wardrobe-card">
              <div className="wardrobe-image">
                <img src={item.image} alt={item.name} />
                <button className="favorite-btn" aria-label={`Ajouter ${item.name} aux favoris`}>
                  <Heart size={14} />
                </button>
              </div>
              <div className="wardrobe-copy">
                <h4>{item.name}</h4>
                <div className="wardrobe-meta">
                  <span>{item.category}</span>
                  <span className="chip">Chic</span>
                </div>
                <button className="try-btn">
                  <Eye size={12} />
                  Essayage 3D
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="beauty-box">
          <div className="beauty-icon">
            <Palette size={18} />
          </div>
          <div>
            <strong>Mise en beauté conseillée</strong>
            <p>{lookOfDay.beauty}</p>
          </div>
        </div>

        <button className="add-button">
          <Plus size={22} /> Ajouter un vêtement
        </button>

        <div className="mobile-nav">
          {nav.slice(0, 5).map(([label, Icon]) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={activeNav === label ? 'mobile-nav-item active' : 'mobile-nav-item'}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



																																																																																																			
