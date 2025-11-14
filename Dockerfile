# Base
FROM node:20-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json primero (cache)
COPY app/package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY app/ .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
