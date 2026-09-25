import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, ChevronRight, CloudSun, Heart, Home, Plus, Shirt, Sparkles, Star, WashingMachine } from 'lucide-react';
import './styles.css';

const styles = ['Look automne', 'Chic', 'Décontracté', 'Simple', 'Sport Wear', 'Bureau'];
const nav = [
  ['Accueil', Home], ['Dressing', Shirt], ['Calendrier', CalendarDays], ['Favoris', Heart], ['Coiffures', Sparkles], ['Indisponibles', WashingMachine],
] as const;

function App() {
  const [activeStyle, setActiveStyle] = React.useState(styles[0]);
  const [activeNav, setActiveNav] = React.useState('Accueil');
  const today = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">A</span><span>ALStudio</span></div>
      <nav>{nav.map(([label, Icon]) => <button className={activeNav === label ? 'nav-item active' : 'nav-item'} onClick={() => setActiveNav(label)} key={label}><Icon size={19}/>{label}</button>)}</nav>
      <div className="sidebar-bottom"><div className="avatar">S</div><div><strong>Solène</strong><small>Mon profil</small></div></div>
    </aside>
    <main className="main">
      <header className="mobile-header"><div className="brand"><span className="brand-mark">A</span><span>ALStudio</span></div><div className="avatar">S</div></header>
      <section className="topbar"><div><p className="eyebrow">{today}</p><h1>Bonjour, Solène <span>👋</span></h1><p className="muted">Voici votre inspiration mode du jour.</p></div><button className="profile avatar">S</button></section>
      <section className="weather"><div><p className="eyebrow">MÉTÉO LOCALE</p><h2>Paris, France</h2><div className="temp">18°</div><p>Partiellement nuageux</p></div><CloudSun size={76}/></section>
      <div className="section-heading"><h2>Votre look du jour</h2><button className="text-button">Modifier</button></div>
      <section className="outfit-card"><div className="outfit-art"><Shirt size={92}/><div className="sparkle"><Sparkles size={18}/></div></div><div className="outfit-info"><h2>Élégance automnale</h2><p>Blazer beige, chemise blanche et pantalon droit.</p><div className="tags"><span>18° adapté</span><span>Chic</span></div><p className="hair"><Sparkles size={17}/> Coiffure : cheveux lâchés</p></div><button className="round-arrow"><ChevronRight/></button></section>
      <div className="section-heading"><h2>Styles</h2><span className="muted">Faire défiler</span></div>
      <div className="filters">{styles.map(style => <button key={style} onClick={() => setActiveStyle(style)} className={activeStyle === style ? 'filter selected' : 'filter'}>{style}</button>)}</div>
      <div className="section-heading"><h2>Votre planning</h2><button className="text-button">Voir tout</button></div>
      <section className="calendar-card"><div className="calendar-icon"><CalendarDays/></div><div><strong>Aucune tenue planifiée demain</strong><p>Préparez votre prochain look à l’avance.</p></div><ChevronRight className="chevron"/></section>
      <button className="add-button"><Plus size={22}/> Ajouter un vêtement</button>
      <div className="mobile-nav">{nav.slice(0, 5).map(([label, Icon]) => <button onClick={() => setActiveNav(label)} className={activeNav === label ? 'mobile-nav-item active' : 'mobile-nav-item'} key={label}><Icon size={20}/><small>{label}</small></button>)}</div>
    </main>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
