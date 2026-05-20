# Dossier Images

Ce dossier contient toutes les images utilisées dans votre portfolio.

## Structure

```
images/
├── portrait.png          # Image de portrait pour la section Hero
└── projects/             # Dossier contenant toutes les images des projets
    ├── project-1.jpg
    ├── project-2.jpg
    └── ...
```

## Utilisation

### Image de portrait
- Placez votre image de portrait dans ce dossier avec le nom `portrait.png`
- Elle sera automatiquement utilisée dans la section Hero
- Format recommandé : PNG ou JPG, haute résolution

### Images des projets
- Placez toutes les images de vos projets dans le dossier `projects/`
- Vous pouvez organiser par projet si nécessaire (ex: `projects/cafeteria-platform/`)
- Les images peuvent être référencées dans `constants.tsx` avec le chemin `/images/projects/nom-image.jpg`

## Note

Avec Vite, les fichiers dans le dossier `public` sont servis à la racine. 
Donc `public/images/portrait.png` est accessible via `/images/portrait.png` dans votre code.
