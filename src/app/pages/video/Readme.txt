Création du multi module vidéo
  Commande : ng g module pages/video --routing --route "video" --module "app.module.ts"
  1. De générer un module dans le dossier pages/video ng g module pages/video
  2. Créer au passage un module de routing (identique à app-routing.module) qui sera ajouté dans VideoModule --routing
  3. Créer une route lazy loadé qui aura comme url 'video': --route "video"
  4. Ajouter cette route dans les routes du app.module (app.routing.module.ts) --module "app.module.ts"

La création d'un lazy loadé permet à charger la composant Vidéo que lorsque l'utilisateur essaye d'accéder à la route Vidéo
