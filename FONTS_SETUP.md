# Configuration des Fonts - Haven Brunch

## Fonts utilisées

- **TAN New York** : Police principale pour les titres (font-display)
- **Adumu Regular** : Police principale pour le corps de texte (font-body)
- **Inter** : Police de fallback (font-inter)

## Installation des fichiers de fonts

Pour que les nouvelles fonts fonctionnent, vous devez ajouter les fichiers de fonts dans le dossier `public/fonts/` :

### 1. TAN New York
- Fichier : `public/fonts/TAN-NewYork.ttf` (à ajouter)
- Format : TTF (fonctionne parfaitement)
- Usage : Titres principaux, headers

### 2. Adumu Regular
- Fichier : `public/fonts/Adumu.ttf` ✅ **AJOUTÉ**
- Format : TTF (fonctionne parfaitement)
- Usage : Corps de texte, paragraphes

## Structure des fichiers

```
public/
└── fonts/
    ├── TAN-NewYork.ttf (à ajouter)
    └── Adumu.ttf ✅
```

## Configuration

Les fonts sont configurées dans :
- `app/layout.tsx` : Import et configuration des fonts
- `tailwind.config.js` : Classes CSS pour les fonts
- `app/globals.css` : Styles de base

## Classes CSS disponibles

- `font-display` : TAN New York (titres)
- `font-body` : Adumu Regular (corps de texte)
- `font-inter` : Inter (fallback)

## Fallback

Si les fonts personnalisées ne sont pas disponibles, le système utilisera :
- TAN New York → serif
- Adumu Regular → sans-serif
- Inter → Inter (Google Fonts)
