# Haven Brunch - Website

Un site web professionnel pour **Haven Brunch**, restaurant de brunch raffiné à Paris. Site développé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🎨 Design & Brand Identity

- **Nom**: Haven Brunch
- **Slogan**: "Un brunch raffiné pour sublimer vos moments précieux."
- **Positionnement**: Chic & gourmand, élégance accessible
- **Palette de couleurs**:
  - Cream `#FAF4EF` (arrière-plans, zones douces)
  - Golden Beige `#E8D8C3` (cartes, surfaces secondaires)
  - Golden Caramel `#B98565` (accents, boutons, CTA)
  - Cocoa Brown `#4E342E` (texte principal, contraste)
  - Off-white `#FDFBF9` (surfaces et texte secondaires)
- **Typographie**:
  - Titres: Crimson Text (alternative à TAN New York)
  - Corps de texte: Inter

## ✨ Fonctionnalités

### Pages
- **Accueil** (`/`): Hero, présentation, offres, galerie, témoignages
- **Menu** (`/menu`): Catalogue complet avec catégories (Salé/Sucré/Boissons)
- **Réservation** (`/reservation`): Formulaire complet avec validation

### Composants Réutilisables
- Navbar responsive avec scroll effect
- Footer avec informations de contact
- Cards pour offres et plats
- Hero sections
- Galerie avec hover effects
- Témoignages clients
- Modales de confirmation

### Fonctionnalités Techniques
- Animations Framer Motion
- Formulaire de réservation avec validation
- API route pour traitement des réservations
- Envoi d'emails automatique (Nodemailer)
- SEO optimisé (meta tags, sitemap, robots.txt)
- Responsive design
- TypeScript strict

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd haven-brunch
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Configuration des variables d'environnement**
```bash
cp env.example .env.local
```

Éditer `.env.local` avec vos informations :
```env
# Configuration email pour Nodemailer
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
RESTAURANT_EMAIL=contact@havenbrunch.fr

# Configuration Stripe (optionnel)
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_PUBLISHABLE_KEY=pk_test_...

# Configuration Next.js
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

4. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📧 Configuration Email

Le site utilise Nodemailer pour l'envoi d'emails de confirmation de réservation.

### Configuration Gmail
1. Activer l'authentification à 2 facteurs sur votre compte Google
2. Générer un mot de passe d'application :
   - Google Account → Sécurité → Authentification à 2 facteurs → Mots de passe d'application
3. Utiliser ce mot de passe dans `EMAIL_PASS`

### Autres fournisseurs
Modifier la configuration dans `app/api/reservation/route.ts` :
```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.votre-fournisseur.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

## 🌐 Déploiement sur Netlify

### Déploiement automatique depuis GitHub

1. **Connecter le repository à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "New site from Git"
   - Choisir GitHub et sélectionner ce repository

2. **Configuration du build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Variables d'environnement**
   - Aller dans Site settings → Environment variables
   - Ajouter toutes les variables de `.env.local`

### Déploiement manuel

1. **Build de production**
```bash
npm run build
npm run export
```

2. **Déployer le dossier `out`** sur Netlify

## 📱 Structure du Projet

```
haven-brunch/
├── app/
│   ├── api/
│   │   └── reservation/
│   │       └── route.ts          # API route réservations
│   ├── menu/
│   │   └── page.tsx              # Page menu
│   ├── reservation/
│   │   └── page.tsx              # Page réservation
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── robots.ts                 # Configuration robots.txt
│   └── sitemap.ts                # Configuration sitemap
├── components/
│   ├── ui/                       # Composants UI de base
│   ├── footer.tsx                # Footer
│   ├── gallery.tsx               # Galerie photos
│   ├── hero.tsx                  # Section hero
│   ├── navbar.tsx                # Navigation
│   ├── offer-card.tsx            # Cartes d'offres
│   └── testimonials.tsx          # Témoignages
├── lib/
│   └── utils.ts                  # Utilitaires
├── next.config.js                # Configuration Next.js
├── tailwind.config.js            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── netlify.toml                  # Configuration Netlify
```

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  'cream': '#FAF4EF',
  'golden-beige': '#E8D8C3',
  'golden-caramel': '#B98565',
  'cocoa-brown': '#4E342E',
  'off-white': '#FDFBF9',
}
```

### Contenu
- **Offres**: Modifier dans `app/page.tsx` (variable `offers`)
- **Menu**: Modifier dans `app/menu/page.tsx` (variable `menuCategories`)
- **Témoignages**: Modifier dans `app/page.tsx` (variable `testimonials`)
- **Images**: Remplacer les URLs Unsplash par vos propres images

### Animations
Les animations sont configurées avec Framer Motion. Modifier dans les composants individuels.

## 🔧 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 📞 Support

Pour toute question technique :
- Vérifier la documentation Next.js
- Consulter la documentation Tailwind CSS
- Vérifier les logs de déploiement sur Netlify

## 🔐 Sécurité

- Variables d'environnement pour les clés sensibles
- Validation côté serveur pour les formulaires
- Headers de sécurité configurés
- Sanitisation des inputs utilisateur

## 📈 SEO

Le site inclut :
- Meta tags optimisés
- Open Graph tags
- Twitter Cards
- Sitemap XML automatique
- Fichier robots.txt
- URLs sémantiques
- Images avec alt text

---

Développé avec ❤️ pour Haven Brunch
