# Étape 1 : Installation des dépendances
FROM node:16.14.2 AS build

WORKDIR /app

# Copie uniquement package*.json en premier pour profiter du cache de construction de Docker
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du reste des fichiers de l'application
COPY . .

# Construction de l'application Nuxt.js
RUN npm run build

# Étape 2 : Production
FROM node:16.14.2 AS production

# Copie de la sortie de l'étape de construction vers l'étape de production
COPY --from=build /app/.output /app/.output

# Définition des variables d'environnement
ENV NUXT_HOST=0.0.0.0
ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}
ENV NODE_ENV=production

# Démarrage de l'application
CMD ["node", "/app/.output/server/index.mjs"]