# Déploiement public HTTPS

## Frontend Vercel

1. Ouvrir https://vercel.com/new.
2. Importer `Solene-hgs/ALStudio`.
3. Dans **Root Directory**, sélectionner `apps/web`.
4. Vercel détectera Vite. Vérifier :
   - Build command : `npm run build`
   - Output directory : `dist`
5. Définir `VITE_API_URL` avec l'URL Render de l'API.
6. Déployer.

Le frontend sera disponible sur une URL HTTPS Vercel, par exemple `https://alstudio.vercel.app`.

## API Render

1. Ouvrir https://dashboard.render.com/select-repo.
2. Sélectionner `Solene-hgs/ALStudio`.
3. Créer un Web Service avec :
   - Root directory : `apps/api`
   - Build command : `npm install`
   - Start command : `npm start`
4. Ajouter `CLIENT_URL` avec l'URL Vercel.

L'API sera disponible sur une URL HTTPS Render, par exemple `https://alstudio-api.onrender.com`.

## Important

Les plateformes de déploiement exigent une connexion et une autorisation du propriétaire du compte. Une URL publique réelle ne peut être générée qu'après validation de ces deux services.
