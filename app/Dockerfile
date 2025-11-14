# Base
FROM node:20-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar todo el código
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
