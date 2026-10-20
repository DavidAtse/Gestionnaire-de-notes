# 📝 Mes Notes — Gestionnaire de notes

Une application web de prise de notes, simple et rapide, construite en **HTML, CSS et JavaScript pur** — sans framework ni dépendance.

Les notes sont sauvegardées dans le `localStorage` du navigateur : elles restent disponibles même après avoir fermé la page.

<!-- Remplace le lien ci-dessous par ton URL une fois le site hébergé -->
🔗 **Démo en ligne :** [Voir le site](https://davidatse.github.io/Gestionnaire-de-notes/)

## ✨ Fonctionnalités

- ➕ Ajouter une note avec un titre et un contenu
- 🗑️ Supprimer une note en un clic
- 💾 Sauvegarde automatique dans le navigateur (`localStorage`)
- 🔢 Compteur de notes en temps réel
- 🌙 Interface sombre et moderne, entièrement responsive (mobile & desktop)

## 🛠️ Technologies

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure sémantique de la page |
| CSS3 | Design (variables CSS, grid, animations, responsive) |
| JavaScript (ES6) | Logique de l'application et manipulation du DOM |
| localStorage | Persistance des données côté navigateur |

## 🚀 Lancer le projet

Aucune installation nécessaire :

1. Clone le dépôt :
   ```bash
   git clone https://github.com/DavidAtse/Gestionnaire-de-notes.git
   ```
2. Ouvre `index.html` dans ton navigateur. C'est tout !

## 📂 Structure du projet

```
gestionnaire-de-notes/
├── index.html    # Structure de la page
├── style.css     # Styles et design
├── script.js     # Logique (ajout, suppression, sauvegarde)
└── README.md
```

## 🧠 Ce que j'ai appris

- Manipuler le DOM en JavaScript (`createElement`, `addEventListener`, etc.)
- Persister des données avec `localStorage` et `JSON.stringify` / `JSON.parse`
- Construire une interface responsive avec CSS Grid et les variables CSS

## 🔮 Améliorations possibles

- [ ] Modifier une note existante
- [ ] Barre de recherche / filtrage
- [ ] Date de création sur chaque note
- [ ] Mode clair / sombre

---

Fait avec ❤️ par **David**
