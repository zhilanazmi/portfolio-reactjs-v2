# Panduan Deployment Portfolio React di VPS dengan Docker

## Prerequisites
Pastikan VPS Anda sudah terinstall:
- Docker
- Docker Compose
- Git

## Langkah-langkah Deployment

### 1. Clone Repository
```bash
git clone <repository-url>
cd portfolio-reactjs-v2
```

### 2. Build dan Jalankan dengan Docker Compose
```bash
# Build dan jalankan aplikasi
docker-compose up -d --build

# Atau build terpisah
docker build -t portfolio-reactjs .
docker run -d -p 80:80 --name portfolio-reactjs portfolio-reactjs
```

### 3. Verifikasi Deployment
```bash
# Cek status container
docker ps

# Cek logs jika ada masalah
docker logs portfolio-reactjs
```

### 4. Akses Aplikasi
Buka browser dan akses: `http://IP_VPS_ANDA`

## Perintah Docker Berguna

### Menghentikan Aplikasi
```bash
docker-compose down
```

### Update Aplikasi
```bash
# Pull perubahan terbaru
git pull origin main

# Rebuild dan restart
docker-compose up -d --build
```

### Monitoring
```bash
# Lihat logs real-time
docker logs -f portfolio-reactjs

# Cek resource usage
docker stats portfolio-reactjs
```

### Backup dan Restore
```bash
# Backup image
docker save portfolio-reactjs > portfolio-backup.tar

# Restore image
docker load < portfolio-backup.tar
```

## Konfigurasi Tambahan

### Menggunakan Domain Custom
Edit `nginx.conf` dan ganti `server_name localhost;` dengan domain Anda:
```nginx
server_name yourdomain.com www.yourdomain.com;
```

### SSL/HTTPS dengan Let's Encrypt
Untuk HTTPS, Anda bisa menggunakan reverse proxy seperti Nginx Proxy Manager atau Traefik.

### Port Custom
Jika ingin menggunakan port selain 80, edit `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Aplikasi akan berjalan di port 8080
```

## Troubleshooting

### Container Tidak Bisa Start
```bash
# Cek logs error
docker logs portfolio-reactjs

# Cek port conflict
netstat -tulpn | grep :80
```

### Aplikasi Tidak Bisa Diakses
1. Pastikan firewall VPS membuka port 80
2. Cek apakah ada service lain yang menggunakan port 80
3. Verifikasi container berjalan dengan `docker ps`

### Update Node Modules
Jika ada perubahan dependencies:
```bash
# Rebuild tanpa cache
docker-compose build --no-cache
docker-compose up -d
``` 