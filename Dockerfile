# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expón el puerto en el que se ejecutará la aplicación (puerto 3000 en este caso)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
