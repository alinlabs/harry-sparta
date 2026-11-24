# Dokumentasi Arsitektur & Standar Pengembangan Web Presentasi
## PT Sparta Computindo — *Driving The Growth: Winning The Market* (2026–2027)

Dokumen ini adalah **Single Source of Truth** untuk memahami arsitektur teknis, hierarki aplikasi, urutan 30 slide presentasi, sistem desain visual, standar komponen klikable & modal, serta panduan membaca dan memodifikasi kode bagi **Developer** maupun **AI Agent**.

---

## 1. Identitas Proyek & Konfigurasi Inti

| Atribut | Nilai Resmi Saat Ini | Sumber Kebenaran |
|---|---|---|
| **Perusahaan** | **PT Sparta Computindo** | `index.html`, `metadata.json`, `Header.tsx`, `SplashScreen.tsx` |
| **Judul Presentasi** | *Driving The Growth: Winning The Market* (Strategic Business Plan 2026–2027) | `metadata.json`, `src/slide/01/data.ts` |
| **Presenter & Posisi** | **Harry Gultom** — *Candidate Sales Manager* | `Sidebar.tsx`, `src/slide/01/data.ts`, `src/slide/30/data.ts` |
| **Domain Produksi** | `https://harry-sparta.vercel.app/` | `package.json`, `index.html`, `public/sitemap.xml` |
| **Jumlah Slide Aktif** | **30 Slide** (`01` s/d `30`, termasuk Cover & Penutup) | `src/slide/registry.ts`, `src/utils/urlManager.ts` |
| **Tema Default Awal** | **`light`** (Terang) | `src/utils/urlManager.ts`, `index.html` |
| **Bahasa Default Awal** | **`in`** (Bahasa Indonesia) | `src/utils/urlManager.ts`, `index.html` |
| **Aksen Warna Brand** | **Sparta Red** (`#dc2626` / Tailwind `red-600` & `brand-600`, selaras `/public/logo.webp`) | `index.html`, `src/index.css` |
| **Tipografi** | **Inter** (`tabular-nums` untuk seluruh angka & metrik) | `index.html`, `src/index.css` |

> **Catatan tentang Dokumen Lama di Root (`/`):**
> File seperti `EXECUTE_STANDARD.md`, `LOTTIE_GUIDE.md`, `POSITIONING.md`, `PRESENTATION-PLAN.md`, dan `new-slide-plan.md` di root repository adalah catatan historis dari fase awal (saat masih memakai nama perusahaan/aksen lama atau 31 slide). **Dokumen `/public/README.md` ini adalah acuan terbaru yang sinkron dengan kondisi aktual kode saat ini.**

---

## 2. Tech Stack & Perintah CLI

### Stack Utama
- **Framework**: React `19.2.1` + TypeScript `~5.8.2` + Vite `6.2.0`
- **Styling**: Tailwind CSS (via CDN config di `index.html` + custom CSS anti-glitch di `src/index.css`) + `clsx` + `tailwind-merge` (`src/lib/utils.ts`)
- **Animasi**: `framer-motion` `^12.23.26`, `lottie-react` `^3.1.2`, `canvas-confetti` `^1.9.4`
- **Visualisasi Data & Peta**: `recharts` `^3.5.1`, `leaflet` `^1.9.4`, `lucide-react` `^0.559.0`
- **Deployment**: Vercel (`vercel.json` dengan SPA rewrite ke `/index.html` & cache header `/assets/*`)

### Perintah Pengembangan
```bash
npm run dev       # Menjalankan Vite dev server pada port 3000 (0.0.0.0)
npm run lint      # Validasi TypeScript menyeluruh (tsc --noEmit)
npm run build     # Build produksi ke folder dist/
npm run preview   # Preview hasil build produksi
```

> **Catatan CLI:** Di `package.json` terdapat script `check` dan `sync` yang merujuk ke `scripts/*.cjs`, namun direktori `scripts/` saat ini tidak ada di repository. Gunakan `npm run lint` dan `npm run build` sebagai verifikasi resmi, serta kelola urutan slide langsung melalui `src/slide/registry.ts` dan `src/utils/urlManager.ts`.

---

## 3. Struktur Direktori Lengkap

```text
/
├── index.html                  # Entry HTML, meta SEO/OG, Tailwind darkMode & brand-red config, pre-paint theme/lang script
├── metadata.json               # Metadata applet (nama, deskripsi, kapabilitas)
├── package.json                # Dependencies & script dev/build/lint
├── tsconfig.json               # Konfigurasi TypeScript & alias path "@/*" -> "./src/*"
├── vite.config.ts              # Konfigurasi Vite (port 3000, vendor chunking, alias "@")
├── vercel.json                 # Routing SPA & security/cache headers untuk Vercel
│
├── public/                     # Aset statis yang disajikan langsung di root "/"
│   ├── README.md               # Dokumen arsitektur & panduan lengkap (file ini)
│   ├── logo.webp               # Logo resmi PT Sparta Computindo (acuan warna aksen merah)
│   ├── gambar/                 # Katalog gambar produk & mockup hardware (12 file .png/.webp)
│   ├── home-lottie.json        # Animasi Lottie utama
│   ├── outline-home-generated.json
│   ├── outline-signal-generated.json
│   ├── assets/aistudio/        # Aset internal lingkungan build
│   ├── robots.txt              # Konfigurasi crawler SEO
│   └── sitemap.xml             # Peta situs produksi (https://harry-sparta.vercel.app/)
│
└── src/
    ├── index.tsx               # Mount ReactDOM ke #root
    ├── index.css               # Global CSS, dark fallback, tema transition lock, Recharts & Leaflet GPU rules
    ├── types.ts                # Shared TypeScript interfaces & enums
    ├── App.tsx                 # Root provider tree, SplashScreen, state slide, keyboard & URL sync, 404 handler
    │
    ├── lib/
    │   └── utils.ts            # Helper cn() (clsx + tailwind-merge)
    │
    ├── utils/
    │   └── urlManager.ts       # Parser URL (?theme, ?lang, ?page), validasi 404, localStorage cache & default state
    │
    ├── contexts/
    │   ├── ThemeContext.tsx    # State tema (light/dark) + transisi CSS terisolasi (theme-transitioning)
    │   ├── LanguageContext.tsx # State bahasa ('in' | 'en', normalisasi 'id' -> 'in') + <html lang>
    │   └── NavigationContext.tsx # Step controller antar-sublangkah slide + Interaction Lock saat modal terbuka
    │
    ├── components/
    │   ├── Layout.tsx          # Shell utama: Sidebar docked + Area Kanan (Header, <main> AnimatePresence, BottomAction)
    │   ├── Header.tsx          # Logo PT Sparta Computindo, judul section, Full View toggle, Popup Settings, Menu
    │   ├── Sidebar.tsx         # Navigasi akordion dinamis dari registry.ts + info presenter di footer
    │   ├── BottomAction.tsx    # Progress bar merah + tombol Sebelumnya / halaman X/30 / Berikutnya (atau progress line saat Full View)
    │   ├── SplashScreen.tsx    # Intro layar pembuka (3.8 detik) dengan logo, slogan, nama presenter
    │   ├── DmsLogo.tsx         # Komponen logo resmi (/logo.webp) + teks PT. SPARTA COMPUTINDO
    │   ├── LottiePlayer.tsx    # Wrapper lottie-react
    │   ├── NotFoundPage.tsx    # Halaman 404 khusus parameter URL invalid + tombol reset ke canonical default
    │   ├── DashboardOverview.tsx / PrintDocument.tsx # Utilitas tampilan ringkasan/cetak
    │   ├── charts/             # Primitif grafik global (CircleChart, LineChart, HexagonalChart, BarChart)
    │   └── ui/                 # Komponen UI Standar Global
    │       ├── index.ts
    │       ├── DetailModal.tsx        # Modal global tunggal (tanpa tombol Tutup bawah, tanpa pagination/Next-Prev)
    │       ├── DetailModalContext.tsx # Provider & hook useDetailModal()
    │       ├── VisualDetailCard.tsx   # Kartu klikable terstandar (hanya ikon ArrowUpRight di pojok kanan atas)
    │       ├── CountUp.tsx            # Animasi angka counter
    │       ├── StepWrapper.tsx        # Pembungkus konten sub-step slide
    │       └── StepIntro.tsx          # Transisi intro antar sub-step
    │
    └── slide/
        ├── registry.ts         # SINGLE SOURCE OF TRUTH urutan slide, section, & menu Sidebar
        └── 01/ ... 30/         # 30 folder slide mandiri (data.ts, container.tsx, utils.ts, index.tsx, + chart/map lokal)
```

---

## 4. Arsitektur Hierarki Aplikasi & Alur Data

### A. Hierarki Provider & Shell (`src/App.tsx`)
Aplikasi membungkus seluruh tree dengan urutan provider berikut:

```text
App (parseUrl(window.location.search) -> deteksi 404 atau resolusi initial theme/lang/page)
 └── ThemeProvider (initialTheme)
      └── LanguageProvider (initialLang)
           └── NavigationProvider (stepController & isLocked)
                └── DetailModalProvider (global single-item DetailModal via Portal)
                     └── AppContent
                          ├── SplashScreen (tampil 3.8s saat awal kecuali dibuka dengan ?page=N atau setelah selesai)
                          └── Layout
                               ├── Sidebar (mode="docked", animasi width + opacity GPU-isolated)
                               └── Main Pane (bg-white dark:bg-brand-900 isolate)
                                    ├── Scoped Ambient Glow (terisolasi di dalam main pane)
                                    ├── Header (Logo, Section, Expand/Full View, Settings Gear, Hamburger)
                                    ├── <main> -> AnimatePresence mode="wait" -> Slide XX Container
                                    └── BottomAction (Progress bar + Prev / "X/30" / Next)
```

### B. Hierarki Data Slide (*Single Source of Truth*)
Setiap perubahan pada slide mengalir secara satu arah dari folder slide ke UI shell:

1. **`src/slide/XX/data.ts`**:
   - Mengekspor `slideMeta` (`slideNumber`, `folder`, `sectionId`, `navTitle`, `headerTitle`, `category`, `section` dalam format `{ in, en }`).
   - Menyimpan data konten bilingual (`slideData` / `useSlideData()`).
2. **`src/slide/XX/container.tsx`**:
   - Merender visual slide dan memetakan item ke `DetailModalItem` (atau menggunakan `VisualDetailCard` / `useDetailModal`).
3. **`src/slide/XX/utils.ts`**:
   - Fungsi kalkulasi/helper murni spesifik slide (jika dibutuhkan).
4. **`src/slide/XX/index.tsx`**:
   - Mengekspor `default` (Komponen Container) dan `slideMeta`.
5. **`src/slide/registry.ts`**:
   - Mengimpor `01` s/d `30`, mendefinisikan `SECTION_CATALOG` (`0: Cover`, `1: Strategi`, `2: Product`, `3: Team`, `4: Penutup & Komitmen`), dan mengekspor:
     - `SLIDE_REGISTRY` & `TOTAL_SLIDES` (`30`)
     - `getSlidesConfig(lang)` -> dipakai `App.tsx` untuk `Layout`, `Header`, dan render slide aktif
     - `getSidebarSections(lang)` & `getCoverSlideInfo(lang)` -> dipakai `Sidebar.tsx` untuk membangun seluruh menu akordion secara otomatis.

### C. Sistem URL, Cache, Default State & 404 (`src/utils/urlManager.ts`)
- **Parameter Canonical**: `?theme=light|dark&lang=in|en&page=1..30`
- **Urutan Prioritas Resolusi**:
  1. Nilai valid pada URL query parameter.
  2. Nilai tersimpan di `localStorage` (`sparta_theme_v2`, `sparta_language_v2`).
  3. Nilai fallback default: **`theme = 'light'`** dan **`lang = 'in'`**.
- **Aturan 404**:
  - Jika URL memiliki query parameter (`totalParamsCount > 0`), namun **0 parameter valid** (misal `?foo=bar` atau `?lang=id` karena kode resmi hanya `'in'` atau `'en'`, atau `?page=31`), maka `urlState.is404 = true` dan `NotFoundPage` ditampilkan.
  - Jika minimal ada 1 parameter valid, parameter invalid dibuang dan URL disinkronkan ulang ke bentuk canonical via `window.history.replaceState`.
- **Anti-FOUC (`index.html`)**: Script sinkron di `<head>` langsung membaca URL/localStorage sebelum Tailwind CDN/React berjalan agar background awal sesuai (`#ffffff` untuk light, `#09090b` untuk dark).

### D. Mekanisme Navigasi & Interaction Lock
- **Prioritas Navigasi (`App.tsx` + `NavigationContext.tsx`)**:
  - Saat user menekan `ArrowRight` / `Space` / `ArrowLeft` atau tombol di `BottomAction` atau klik area kosong luar konten di `Layout.tsx`:
    1. Jika `isLocked === true` (misal `DetailModal` sedang terbuka) atau `showSplash === true` -> navigasi slide **diabaikan** agar slide di belakang modal tidak berpindah secara tidak sengaja.
    2. Jika slide memiliki `controller` sub-langkah (`setStepController`), jalankan `controller.next()` / `controller.prev()` terlebih dahulu.
    3. Jika tidak ada sub-langkah tersisa, berpindah ke slide berikutnya/sebelumnya (`targetStep = 0` saat maju, `targetStep = -1` saat mundur ke slide sebelumnya) dan URL `?page=` ikut disinkronkan.
- **Auto Scroll Reset (`Layout.tsx`)**: Setiap pergantian slide mereset `scrollTop = 0` baik di `<main>`, kontainer scroll internal, maupun `window` melalui `useLayoutEffect` dan `onExitComplete`.

---

## 5. Urutan Presentasi Lengkap (30 Slide • 5 Bagian)

Total terdapat **30 slide** (`01`–`30`) yang dikelompokkan dalam **5 Section** pada `SECTION_CATALOG`:

### Section 0 — Cover (`Cover`)
| No | Folder | Judul Navigasi (ID) | Navigation Title (EN) | Pola UI & Interaksi Utama |
|---|---|---|---|---|
| **01** | `01` | Driving The Growth, Winning The Market | Driving The Growth, Winning The Market | Centerpiece Cover: Judul gradien Sparta Red, 3 kartu pilar (*Strategy, Product, Team*), atribusi presenter |

### Section 1 — Strategi (`Strategy`) — Slide 02 s/d 14
| No | Folder | Judul Navigasi (ID) | Navigation Title (EN) | Pola UI & Interaksi Utama |
|---|---|---|---|---|
| **02** | `02` | Ringkasan Eksekutif | Executive Summary | 5 kartu prioritas strategis (grid 3+2) + `DetailModal` per kartu |
| **03** | `03` | Kondisi Pasar Saat Ini | Current Market Position | Kartu metrik/audit kondisi saat ini & grafik Recharts + `DetailModal` |
| **04** | `04` | Tren Pasar ICT & FTTH | ICT & FTTH Trends | Kartu metrik pasar & macro drivers ICT/FTTH + `DetailModal` |
| **05** | `05` | Peluang & Segmentasi | Opportunities & Segments | Target cluster & kriteria ICP klikable + `DetailModal` |
| **06** | `06` | Kuadran Kompetisi | Competition Quadrant | **Kanvas 2D SWOT Interaktif** (4 filter kuadran I–IV + pin titik kompetitor + panel inspeksi SWOT inline di kanan) |
| **07** | `07` | Kompetitor 3-Tier | 3-Tier Competitors | **Mind-Map Orbit 3-Ring Interaktif** (Tier 1/2/3 SVG + panel inspeksi skor komposit & 5 bar dimensi inline di kanan) |
| **08** | `08` | Gap & Solusi | Gaps & Solutions | Matriks kesenjangan & pilar solusi klikable + `DetailModal` |
| **09** | `09` | ICP & Buyer Persona | ICP & Buyer Persona | Kartu Buyer Persona B2B + `DetailModal` |
| **10** | `10` | 8 Sales Playbooks | 8 Sales Playbooks | 8 skema playbook *Land, Develop & Expand* + `DetailModal` |
| **11** | `11` | Target Penjualan | Sales Targets | Skenario target penjualan + grafik `BudgetChart` (Recharts) + `DetailModal` |
| **12** | `12` | Roadmap 60 Hari | 60-Day Roadmap | Tahapan eksekusi Nov–Des 2026 + `DetailModal` |
| **13** | `13` | Roadmap 1 Tahun (2027) | 1-Year Roadmap (2027) | Rencana kuartalan Q1–Q4 2027 + `DetailModal` |
| **14** | `14` | Strategi Go to Growth | Go to Growth Strategy | Strategi akselerasi pertumbuhan & penetrasi pasar + `DetailModal` |

### Section 2 — Product (`Product`) — Slide 15 s/d 20
| No | Folder | Judul Navigasi (ID) | Navigation Title (EN) | Pola UI & Interaksi Utama |
|---|---|---|---|---|
| **15** | `15` | Existing Product | Existing Products | Katalog produk eksisting PT Sparta Computindo (dengan gambar `/public/gambar/`) + `DetailModal` |
| **16** | `16` | Pengembangan Produk | Product Development | Roadmap & fitur pengembangan portofolio produk + `DetailModal` |
| **17** | `17` | Ekspansi Produk | Product Expansion | Lini ekspansi produk & solusi baru + `DetailModal` |
| **18** | `18` | Produk Target | Product Targets | Headline stats & target kontribusi per kategori produk + `DetailModal` |
| **19** | `19` | 6 Vertikal Industri | 6 Industry Verticals | Matriks 6 vertikal industri B2B + `DetailModal` |
| **20** | `20` | Peta Sebaran Nasional | National Footprint Map | **Peta Indonesia Interaktif (Leaflet)** + kartu ringkasan nasional & hotspot penetrasi + `DetailModal` |

### Section 3 — Team (`Team`) — Slide 21 s/d 29
| No | Folder | Judul Navigasi (ID) | Navigation Title (EN) | Pola UI & Interaksi Utama |
|---|---|---|---|---|
| **21** | `21` | Formasi Tim Sales | Sales Team Formation | Kartu metrik ringkasan & struktur personel tim sales/marketing + `DetailModal` |
| **22** | `22` | Sales Management & KPI | Sales Management & KPI | Bobot KPI terukur, ritme supervisi (cadence), & peran manager + `DetailModal` |
| **23** | `23` | Pipeline & Forecast | Pipeline & Forecast | Funnel validasi & 10 kriteria bukti objektif pipeline + `DetailModal` |
| **24** | `24` | Product Knowledge | Product Knowledge | Jalur & pilar kurikulum *Product Knowledge Sharing* 2-mingguan + `DetailModal` |
| **25** | `25` | Regulasi & Kerangka APN | APN Regulation & Framework | Aturan peran & elemen kerangka *Account Planning Note* (APN) + `DetailModal` |
| **26** | `26` | Detail Contoh APN | APN Implementation Example | Contoh implementasi APN nyata siap pakai + `DetailModal` |
| **27** | `27` | Regulasi Bank Case | Bank Case Regulation | Regulasi, anatomi, dan objektif studi kasus *Bank Case* + `DetailModal` |
| **28** | `28` | Detail Contoh Bank Case | Bank Case Examples | Contoh skenario kasus perbankan/enterprise terstruktur + `DetailModal` |
| **29** | `29` | Remunerasi Tim | Team Remuneration | Skema remunerasi berbasis margin & aturan reimbursement tim + `DetailModal` |

### Section 4 — Penutup & Komitmen (`Closing & Commitment`)
| No | Folder | Judul Navigasi (ID) | Navigation Title (EN) | Pola UI & Interaksi Utama |
|---|---|---|---|---|
| **30** | `30` | Komitmen Eksekusi | Execution Commitment | Centerpiece Closing: Headline gradien, kutipan komitmen eksekusi, & atribusi **Harry Gultom** |

---

## 6. Standarisasi Visual, Kartu Ringkas & Modal (WAJIB DIPATUHI)

Bagian ini merangkum seluruh standar UX yang telah ditetapkan agar presentasi selalu tampil **bersih, visual-first, ringkas saat dipresentasikan, dan tetap kaya detail saat diklik**.

### A. Prinsip "Visual-First, Detail-on-Click" (Kartu Ringkas)
1. **Slide bukan dokumen teks**: Pada tampilan kartu di slide (`02`–`29`), **hindari paragraf deskripsi panjang atau daftar bullet panjang**. Cukup tampilkan elemen visual inti: ikon, badge/label kategori, judul kartu, serta angka/metrik singkat.
2. **Pindahkan detail ke Modal**: Seluruh penjelasan panjang, langkah eksekusi, sub-bagian, metrik pelengkap, dan kesimpulan ditempatkan ke dalam `DetailModalItem` agar baru muncul saat audiens/presenter mengklik kartu tersebut.

### B. Standar Indikator Kartu Klikable (`ArrowUpRight` Only)
1. **HANYA Ikon Panah Kanan Atas**: Setiap kartu yang bisa diklik **WAJIB** menggunakan ikon `ArrowUpRight` (`lucide-react`) di pojok kanan atas kartu (`absolute top-3.5 right-3.5`) sebagai penanda visual bahwa kartu interaktif.
2. **DILARANG Teks Tombol CTA**: **Tidak boleh** ada teks tombol seperti `"Lihat Detail"`, `"Lihat"`, `"Detail"`, `"Buka"`, `"Click for details"`, atau label CTA lainnya di dalam kartu.
3. Implementasi standar tersedia di `src/components/ui/VisualDetailCard.tsx` maupun pola kartu kustom yang menggunakan `useDetailModal()`.

### C. Standar Modal Global (`DetailModal.tsx` & `DetailModalContext.tsx`)
1. **Modal Spesifik per Kartu (Zero Pagination / Zero Next-Prev)**:
   - Setiap modal yang dibuka **WAJIB** spesifik menampilkan konten untuk **1 kartu yang diklik saja**.
   - **DILARANG** menampilkan indikator halaman/counter seperti `1 / 2` atau `2/2` baik di tampilan mobile maupun desktop.
   - **DILARANG** menampilkan tombol navigasi `Prev` / `Next` (ikon `ChevronLeft` / `ChevronRight`) ataupun perpindahan item via panah keyboard di dalam modal.
   - *(Catatan teknis: Hook `openModalGroup(items, idx)` tetap dipertahankan di `DetailModalContext` demi kompatibilitas pemanggilan di seluruh slide, namun secara internal langsung mengambil dan merender hanya `items[idx]` sebagai modal tunggal tanpa state grup/pagination).*
2. **Cara Menutup Modal (Zero Footer Close Button)**:
   - **DILARANG** membuat tombol teks `"Tutup"` atau `"Close"` di bagian bawah/footer modal.
   - Modal **hanya** dapat ditutup melalui:
     1. **Ikon `X`** di pojok kanan atas header modal.
     2. **Klik area di luar kotak modal** (backdrop overlay).
     3. **Menekan tombol `Esc`** pada keyboard.
3. **Penguncian Navigasi Belakang (`setInteractionLock`)**:
   - Selama `DetailModal` terbuka (`isOpen === true`), `setInteractionLock(true)` aktif sehingga `ArrowLeft`/`ArrowRight`/`Space` atau klik tidak menggeser slide di belakangnya.

---

## 7. Standar Styling, Tema, Aksen & Anti-Glitch

1. **Aksen Merah Sparta (Pengganti Biru)**:
   - Seluruh komponen global (`Header`, `Sidebar`, `BottomAction`, `SplashScreen`, `DmsLogo`, `DetailModal`, `VisualDetailCard`, `StepWrapper`, `StepIntro`) menggunakan spektrum warna merah Sparta (`brand-600: #dc2626`, `red-600`, `rose-600`, `brand-700: #b91c1c`) baik pada mode Terang maupun Gelap.
   - **Dilarang** mengembalikan aksen biru pada elemen branding/navigasi aktif.
2. **Anti-Glitch Transisi & Mode Gelap (`src/index.css` & `Layout.tsx`)**:
   - **Larangan `backdrop-blur` berat di Backdrop Modal**: `DetailModal` menggunakan solid tint (`bg-slate-950/65 dark:bg-black/75`) untuk mencegah artifact/kedipan compositor GPU saat modal muncul/hilang.
   - **Isolasi Background & Sidebar**:
     - `html`, `body`, dan `#root` langsung memiliki `background-color` native (`#ffffff` light / `#09090b` dark) + `html.dark aside { background-color: #0f172a; }` agar tidak pernah bocor warna putih saat transisi slide di tema gelap.
     - Area kanan (`Layout.tsx`) memakai `isolate`, dan ambient blur berada di dalamnya agar tidak merembes ke belakang `Sidebar`.
     - Transisi slide menggunakan `opacity` + `y` ringan (`duration: 0.22s`, `transform-gpu`) tanpa efek `filter: blur(...)` yang memicu glitch rendering di Chrome/Safari.
   - **Scoped Theme Transition**: Kelas `.theme-transitioning` hanya dipasang oleh `ThemeContext.tsx` selama `260ms` tepat ketika user menekan tombol ganti tema, sehingga transisi warna CSS tidak pernah bentrok dengan animasi Framer Motion atau drag/pan peta Leaflet.
   - **Leaflet & Recharts Guards**: `src/index.css` menonaktifkan transisi umum pada node Leaflet (`.leaflet-container * { transition: none; }`) dengan akselerasi `translate3d`, serta menghilangkan border/outline focus SVG Recharts.

---

## 8. Panduan Membaca & Memodifikasi Kode (Untuk Manusia & AI Agent)

### A. Cara Membaca Codebase Secara Cepat
1. **Mulai dari Alur Global**: Baca `src/App.tsx` -> `src/utils/urlManager.ts` -> `src/components/Layout.tsx`.
2. **Cek Daftar Slide & Urutan**: Selalu lihat `src/slide/registry.ts` (bukan menebak dari nama file lama).
3. **Pahami Pola Modal Global**: Baca `src/components/ui/DetailModal.tsx`, `src/components/ui/DetailModalContext.tsx`, dan `src/components/ui/VisualDetailCard.tsx`.
4. **Inspeksi Slide Spesifik**: Buka `src/slide/XX/data.ts` untuk melihat teks bilingual (`in` & `en`) serta struktur datanya, lalu `src/slide/XX/container.tsx` untuk melihat tata letak visual dan pemetaan ke `DetailModalItem`.

### B. Cara Menambah / Mengubah Konten & Slide
- **Mengubah Teks / Angka / Poin Detail Slide**:
  - Edit langsung di `src/slide/XX/data.ts`. Pastikan **kedua bahasa (`in` dan `en`)** diperbarui secara seimbang dan angka memakai gaya `tabular-nums`.
- **Menambah / Mengubah Kartu Interaktif**:
  - Gunakan `<VisualDetailCard>` atau tombol kartu dengan `<ArrowUpRight size={14} className="absolute top-3.5 right-3.5 ..." />` dan panggil `openModal(item)` (atau `openModalGroup(items, idx)` yang tetap membuka modal tunggal).
  - Jangan menaruh deskripsi panjang di wajah kartu dan jangan menambahkan teks tombol CTA `"Lihat Detail"`.
  - Jangan menambahkan paginasi (`1/2`), tombol `Next/Prev`, atau tombol `"Tutup"` bawah pada modal.
- **Menambah Aset Gambar atau Dokumen di `/public`**:
  - Gambar produk disimpan di `/public/gambar/<nama-file>.png|.webp` dan dipanggil di kode dengan path `/gambar/<nama-file>.png`.
  - File statis apa pun yang diletakkan di `/public/` (termasuk `README.md`, logo, gambar, atau file `.pdf` referensi apabila ditambahkan) langsung tersedia dari root URL `/` saat build/dev dan dapat dibaca langsung dari filesystem workspace.
- **Mengubah Urutan / Jumlah Slide**:
  - Pastikan folder `src/slide/01..NN`, `slideMeta` di setiap `data.ts`, `SLIDE_REGISTRY` di `src/slide/registry.ts`, dan `TOTAL_SLIDES` di `src/utils/urlManager.ts` selalu sinkron.
- **Mengubah Identitas Global / SEO**:
  - Jaga sinkronisasi antara `metadata.json`, `index.html` (`<title>`, `<meta>`, `og:*`, `twitter:*`), `Header.tsx`, `Sidebar.tsx`, dan `SplashScreen.tsx`.

### C. Checklist Verifikasi Wajib Sebelum Selesai
1. Pastikan default awal tetap `theme = 'light'` dan `lang = 'in'`, dengan aksen **Sparta Red** (`red-600` / `brand-600`).
2. Pastikan setiap kartu klikable pada slide hanya memiliki ikon `ArrowUpRight` di pojok kanan atas (tanpa teks tombol CTA) dan tanpa teks kartu yang penuh/ruwet.
3. Pastikan setiap modal hanya menampilkan **1 item spesifik** (tanpa `1/2` / `2/2`, tanpa `Prev/Next`) dan hanya ditutup lewat ikon `X` kanan atas, klik luar, atau `Esc`.
4. Jalankan validasi wajib:
   - `npm run lint` (`tsc --noEmit`) — harus lolos tanpa error tipe.
   - `npm run build` (`vite build`) — harus berhasil menghasilkan bundle `dist/`.
