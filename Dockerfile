# Tahap 1: Build React App
# Menggunakan image Node.js yang ringan (alpine) sebagai basis
FROM node:18-alpine as build

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu
# Ini memanfaatkan cache Docker, sehingga 'npm install' hanya berjalan jika ada perubahan dependensi
COPY package.json ./
COPY package-lock.json ./

# Install semua dependensi proyek
RUN npm install

# Salin sisa file proyek ke dalam container
COPY . .

# Build aplikasi React untuk production
# Hasil build akan ada di folder /app/build
RUN npm run build

# ---

# Tahap 2: Serve dengan Nginx
# Menggunakan image Nginx yang ringan (alpine)
FROM nginx:stable-alpine

# Salin hasil build dari tahap sebelumnya ('build') ke direktori web root Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Salin file konfigurasi Nginx kustom kita
# Ini akan menimpa konfigurasi default Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Memberitahu Docker bahwa container akan berjalan di port 80
EXPOSE 80

# Perintah untuk menjalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]