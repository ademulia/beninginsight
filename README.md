# beninginsight
sebuah website untuk monitoring dan analisis media

Repository: https://github.com/ademulia/beninginsight

## Git Branch Management

### Cara Menghapus Branch

#### 1. Menghapus Branch Lokal
```bash
# Menghapus branch lokal yang tidak aktif
git branch -d nama-branch

# Menghapus branch lokal secara paksa (force delete)
git branch -D nama-branch
```

#### 2. Menghapus Branch Remote
```bash
# Menghapus branch di remote repository
git push origin --delete nama-branch

# Alternatif cara menghapus branch remote
git push origin :nama-branch
```

#### 3. Menghapus Branch Lokal dan Remote Sekaligus
```bash
# Hapus branch lokal
git branch -d nama-branch

# Hapus branch remote
git push origin --delete nama-branch
```

#### 4. Membersihkan Referensi Branch Remote yang Sudah Dihapus
```bash
# Update referensi lokal dan hapus branch remote yang sudah tidak ada
git fetch --prune
# atau
git remote prune origin
```

### Contoh Penggunaan untuk Branch Saat Ini
Untuk menghapus branch `copilot/fix-c1134b74-930a-4341-925f-47a5f280bb62`:

```bash
# 1. Pindah ke branch main terlebih dahulu
git checkout main

# 2. Hapus branch lokal
git branch -d copilot/fix-c1134b74-930a-4341-925f-47a5f280bb62

# 3. Hapus branch remote
git push origin --delete copilot/fix-c1134b74-930a-4341-925f-47a5f280bb62
```

### Development Workflow

#### Setup Project
```bash
# Clone repository
git clone https://github.com/ademulia/beninginsight.git
cd beninginsight

# Install dependencies
npm install

# Run development server
npm run dev
```

#### Build & Deploy
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

#### Code Quality
```bash
# Run linter
npm run lint
```
