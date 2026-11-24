import { useLanguage } from '@/contexts/LanguageContext';

export type InventoryKpiId = 'total-units' | 'stock-mix' | 'slow-moving' | 'stock-value';
export type AccessRoleId = 'sales' | 'warehouse' | 'finance' | 'manager-owner';

export interface Slide05ModalPayload {
  badge: string;
  subtitle: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  summary: string;
  highlights: string[];
  footerLabel: string;
  footerValue: string;
  accent: 'red' | 'slate';
}

export interface InventoryKpiCardData {
  id: InventoryKpiId;
  kicker: string;
  label: string;
  value: string;
  cue: string;
  modal: Slide05ModalPayload;
}

export interface MixChartSlice {
  name: string;
  value: number;
  color: string;
}

export interface AgingBucketBar {
  bucket: string;
  sampleIndex: number;
  note: string;
}

export interface SampleStockRow {
  sku: string;
  category: string;
  condition: string;
  entryDate: string;
  age: string;
  hpp: string;
  price: string;
  location: string;
  qcStatus: string;
}

export interface AccessRoleCardData {
  id: AccessRoleId;
  role: string;
  accessScope: string;
  restriction: string;
  modal: Slide05ModalPayload;
}

export interface Slide05Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  kpiSectionLabel: string;
  simulationTag: string;
  simulationNotice: string;
  benchmarkNote: string;
  kpis: InventoryKpiCardData[];
  mixPanel: {
    title: string;
    caveat: string;
    slices: MixChartSlice[];
  };
  tablePanel: {
    title: string;
    note: string;
    headers: {
      sku: string;
      category: string;
      condition: string;
      entryDate: string;
      age: string;
      hpp: string;
      price: string;
      location: string;
      qcStatus: string;
    };
    rows: SampleStockRow[];
  };
  agingPanel: {
    title: string;
    note: string;
    tooltipLabel: string;
    buckets: AgingBucketBar[];
  };
  rolesSectionLabel: string;
  rolesSectionNote: string;
  roles: AccessRoleCardData[];
  governanceNote: {
    label: string;
    text: string;
  };
}

export const slideDataId: Slide05Data = {
  eyebrow: "Inventory Intelligence",
  title: "Mengubah Stok Menjadi Aset Penjualan",
  subtitle: "Rancangan target visibilitas stok satu sumber data, stock aging, dan kontrol margin lintas divisi.",
  kpiSectionLabel: "Ringkasan Status Stok",
  simulationTag: "SIMULASI / RANCANGAN TARGET",
  simulationNotice: "Bukan sistem real-time aktif — assessment ERP/WMS/POS eksisting dilakukan terlebih dahulu",
  benchmarkNote: "Benchmark gagasan sistem: PT Astra (disesuaikan dengan skala bisnis, bukan menyalin sistem jadi)",
  kpis: [
    {
      id: "total-units",
      kicker: "Skala Brief",
      label: "Total Units",
      value: "Puluhan Ribu Unit",
      cue: "Jumlah eksak menunggu stock on hand",
      modal: {
        badge: "Data Brief",
        subtitle: "Kapasitas Stok",
        title: "Skala Persediaan Puluhan Ribu Unit",
        metric: "Puluhan Ribu",
        metricLabel: "Unit Dilaporkan",
        summary: "Volume persediaan yang besar harus dikelola dalam satu sumber data agar cepat terkonversi menjadi omzet.",
        highlights: [
          "Data awal: catatan tiap unit/SKU mencakup kode, kategori, merek/model, dan serial number.",
          "Status fisik dibedakan jelas: siap jual, perlu QC/servis, reserved, atau rusak/retur.",
          "Nilai total eksak per gudang ditetapkan setelah audit stok awal."
        ],
        footerLabel: "Data Diperlukan",
        footerValue: "Stock on hand aktual per SKU/unit dan lokasi rak",
        accent: "slate"
      }
    },
    {
      id: "stock-mix",
      kicker: "Basis Wajib Dikonfirmasi",
      label: "New / Refurbished Mix",
      value: "~70% / 30%",
      cue: "Second/Refurbished ~70% • Baru ~30%",
      modal: {
        badge: "Kualifikasi Metrik",
        subtitle: "Komposisi Stok",
        title: "Mix ~70% Second/Refurbished & ~30% Baru",
        metric: "70% / 30%",
        metricLabel: "Basis Belum Terkonfirmasi",
        summary: "Angka 70/30 berasal dari brief perusahaan, namun satuan dasarnya wajib dikonfirmasi sebelum dipakai sebagai metrik resmi.",
        highlights: [
          "Perlu dipastikan apakah 70/30 dihitung berdasarkan jumlah unit, jumlah SKU, atau nilai rupiah stok.",
          "Menentukan strategi penawaran: efisiensi harga pada second/refurbished vs tender/spesifikasi unit baru.",
          "Setiap unit second wajib mencantumkan hasil QC, kondisi fisik, dan cakupan garansi."
        ],
        footerLabel: "Tindakan Awal",
        footerValue: "Konfirmasi basis metrik (unit / SKU / nilai) saat audit stok",
        accent: "slate"
      }
    },
    {
      id: "slow-moving",
      kicker: "Data Diperlukan",
      label: "Slow Moving & Aging",
      value: "Data Diperlukan",
      cue: "Memerlukan tanggal masuk & usia stok",
      modal: {
        badge: "Kontrol Perputaran",
        subtitle: "Rancangan Alert",
        title: "Deteksi Stok Lambat & Peringatan Dini",
        metric: "5 Alert",
        metricLabel: "Pemicu Sistem",
        summary: "Mencegah modal mengendap terlalu lama di gudang melalui pelacakan usia stok dan sistem alert.",
        highlights: [
          "Alert target: stok lama, stok kritis, perubahan harga/HPP, barang ter-reservasi, dan selisih fisik-sistem.",
          "Terhubung ke quotation, sales order, pengiriman, retur, serta perhitungan margin.",
          "Mengubah stok slow-moving menjadi program promo/bundling terarah."
        ],
        footerLabel: "Data Diperlukan",
        footerValue: "Tanggal pembelian/masuk gudang dan histori penjualan historis",
        accent: "slate"
      }
    },
    {
      id: "stock-value",
      kicker: "Data Diperlukan",
      label: "Stock Value",
      value: "Data Diperlukan",
      cue: "Menunggu HPP, biaya refurbish & valuasi",
      modal: {
        badge: "Valuasi Finansial",
        subtitle: "Batas Klaim",
        title: "Nilai Stok & Integrasi HPP",
        metric: "Data Finance",
        metricLabel: "Sensitif / Terbatas",
        summary: "Nilai inventori riil tidak direkayasa sebelum data HPP dan biaya refurbish tersedia resmi dari Finance.",
        highlights: [
          "Menyatukan data HPP, biaya perbaikan/refurbish, serta harga jual dasar per SKU.",
          "Akses HPP dibatasi hanya untuk Finance dan otorisasi manajemen.",
          "Menjaga margin kotor tidak tergerus akibat diskon atau barang tertahan lama."
        ],
        footerLabel: "Data Diperlukan",
        footerValue: "HPP, biaya refurbish, retur, dan daftar harga dasar resmi",
        accent: "slate"
      }
    }
  ],
  mixPanel: {
    title: "Mix Stok (Brief)",
    caveat: "Basis angka (unit / SKU / nilai) wajib dikonfirmasi",
    slices: [
      { name: "Second / Refurbished (~70%)", value: 70, color: "#dc2626" },
      { name: "Produk Baru (~30%)", value: 30, color: "#64748b" }
    ]
  },
  tablePanel: {
    title: "Contoh Struktur Tabel Stok Target (Simulasi Kolom)",
    note: "Menunjukkan atribut data yang dicatat per SKU — nilai aktual menunggu audit",
    headers: {
      sku: "SKU / Kode",
      category: "Kategori",
      condition: "Kondisi",
      entryDate: "Tgl Masuk",
      age: "Umur",
      hpp: "HPP",
      price: "Harga Dasar",
      location: "Lokasi",
      qcStatus: "Status / QC"
    },
    rows: [
      {
        sku: "SKU-001*",
        category: "Laptop Bisnis",
        condition: "Refurbished",
        entryDate: "Tgl Masuk",
        age: "Umur (hr)",
        hpp: "Akses Finance",
        price: "Harga Jual",
        location: "Rak A-01",
        qcStatus: "Siap Jual (QC)"
      },
      {
        sku: "SKU-002*",
        category: "Server Enterprise",
        condition: "Baru",
        entryDate: "Tgl Masuk",
        age: "Umur (hr)",
        hpp: "Akses Finance",
        price: "Harga Jual",
        location: "Rak B-04",
        qcStatus: "Reserved"
      },
      {
        sku: "SKU-003*",
        category: "Router / Switch",
        condition: "Second",
        entryDate: "Tgl Masuk",
        age: "Umur (hr)",
        hpp: "Akses Finance",
        price: "Harga Jual",
        location: "Area Servis",
        qcStatus: "Perlu QC / Servis"
      }
    ]
  },
  agingPanel: {
    title: "Contoh Bucket Stock Aging",
    note: "Contoh pengelompokan (disesuaikan pola bisnis — nilai riil menunggu audit)",
    tooltipLabel: "Struktur bucket target (menunggu data riil)",
    buckets: [
      { bucket: "0–30 hr", sampleIndex: 45, note: "Rotasi Lancar (Contoh)" },
      { bucket: "31–60 hr", sampleIndex: 30, note: "Pantau Penawaran (Contoh)" },
      { bucket: "61–90 hr", sampleIndex: 15, note: "Dorong Bundling (Contoh)" },
      { bucket: ">90 hr", sampleIndex: 10, note: "Alert Slow-Moving (Contoh)" }
    ]
  },
  rolesSectionLabel: "Hak Akses Berjenjang (Role-Based Access)",
  rolesSectionNote: "Satu sumber data inventori — terhubung ke quotation, order, pengiriman, retur & margin",
  roles: [
    {
      id: "sales",
      role: "Sales",
      accessScope: "Lihat ketersediaan, status QC & harga jual",
      restriction: "Tidak melihat HPP sensitif",
      modal: {
        badge: "Role 01",
        subtitle: "Hak Akses Sales",
        title: "Sales — Availability, Reservasi & Harga Jual",
        metric: "Read + Reserve",
        metricLabel: "Hak Akses",
        summary: "Membantu tim Sales merespons penawaran secara cepat dengan info ketersediaan dan kondisi yang akurat.",
        highlights: [
          "Melihat stok siap jual, lokasi, garansi, hasil QC, dan harga jual dasar.",
          "Mengetahui barang yang sedang di-reserve agar tidak terjadi double booking.",
          "Terhubung langsung ke pembuatan quotation dan sales order."
        ],
        footerLabel: "Batas Akses",
        footerValue: "Data HPP dan margin internal Finance tetap terlindungi",
        accent: "slate"
      }
    },
    {
      id: "warehouse",
      role: "Warehouse",
      accessScope: "Ubah lokasi rak, status fisik, QC & retur",
      restriction: "Kendali pergerakan fisik",
      modal: {
        badge: "Role 02",
        subtitle: "Hak Akses Gudang",
        title: "Warehouse — Lokasi Rak, Status Fisik & QC",
        metric: "Physical Control",
        metricLabel: "Hak Akses",
        summary: "Menjaga keselarasan antara jumlah fisik di rak dan data yang terlihat di seluruh departemen.",
        highlights: [
          "Memperbarui lokasi rak, tanggal masuk, status QC/servis, serta barang rusak atau retur.",
          "Mencatat serial number unit bernilai tinggi saat penerimaan dan pengiriman.",
          "Memicu alert apabila ditemukan selisih antara stok fisik dan catatan sistem."
        ],
        footerLabel: "Keterkaitan",
        footerValue: "Sinkron dengan delivery order, reservasi Sales, dan klaim retur",
        accent: "slate"
      }
    },
    {
      id: "finance",
      role: "Finance",
      accessScope: "Kelola HPP, biaya refurbish & margin",
      restriction: "Validasi valuasi stok",
      modal: {
        badge: "Role 03",
        subtitle: "Hak Akses Keuangan",
        title: "Finance — HPP, Valuasi & Pengawasan Margin",
        metric: "Cost & Margin",
        metricLabel: "Hak Akses",
        summary: "Memastikan harga jual dan struktur promo tetap menjaga profitabilitas bersih perusahaan.",
        highlights: [
          "Mengelola pencatatan HPP pembelian, biaya refurbish, dan valuasi nilai stok.",
          "Mengawasi perhitungan gross margin per transaksi sebelum faktur diterbitkan.",
          "Mengirim alert apabila terjadi perubahan HPP atau biaya penggantian."
        ],
        footerLabel: "Keterkaitan",
        footerValue: "Menjadi dasar batas otoritas diskon berjenjang",
        accent: "slate"
      }
    },
    {
      id: "manager-owner",
      role: "Manager / Owner",
      accessScope: "Approval diskon, slow-moving & audit",
      restriction: "Kontrol menyeluruh",
      modal: {
        badge: "Role 04",
        subtitle: "Hak Akses Pimpinan",
        title: "Manager / Owner — Approval & Pengawasan Menyeluruh",
        metric: "Full Governance",
        metricLabel: "Hak Akses",
        summary: "Memberi visibilitas penuh bagi pimpinan untuk mengambil keputusan cepat atas harga, stok lama, dan retur.",
        highlights: [
          "Menyetujui penawaran di luar batas normal, pelepasan stok lama, atau pembukaan reservasi.",
          "Menerima peringatan dini stok kritis, barang macet >90 hari, dan deviasi margin.",
          "Menjadi dasar evaluasi koordinasi Sales, Warehouse, Purchasing, dan Finance."
        ],
        footerLabel: "Langkah Awal",
        footerValue: "Assessment ERP/WMS/POS eksisting sebelum pengembangan sistem",
        accent: "slate"
      }
    }
  ],
  governanceNote: {
    label: "Batas Klaim & Kesiapan",
    text: "Mockup ini adalah rancangan target (belum aktif real-time). Assessment terhadap ERP/WMS/POS yang sedang berjalan serta verifikasi basis metrik 70/30 dilakukan terlebih dahulu."
  }
};

export const slideDataEn: Slide05Data = {
  eyebrow: "Inventory Intelligence",
  title: "Turning Stock into Sales Assets",
  subtitle: "Target-state design for single-source stock visibility, aging tracking, and cross-team margin control.",
  kpiSectionLabel: "Inventory Status Overview",
  simulationTag: "SIMULATION / TARGET DESIGN",
  simulationNotice: "Not an active live system — existing ERP/WMS/POS assessment comes first",
  benchmarkNote: "Concept benchmark: PT Astra (adapted to company scale, not copying an external system)",
  kpis: [
    {
      id: "total-units",
      kicker: "Brief Scale",
      label: "Total Units",
      value: "Tens of Thousands",
      cue: "Exact figures await stock-on-hand audit",
      modal: {
        badge: "Brief Fact",
        subtitle: "Inventory Scale",
        title: "Tens of Thousands of Units in Stock",
        metric: "10,000s",
        metricLabel: "Reported Scale",
        summary: "Large inventory requires a single trusted record so units convert rapidly into healthy revenue.",
        highlights: [
          "Target unit/SKU record covers code, category, brand/model, and serial number where relevant.",
          "Physical state tracked clearly: ready for sale, needs QC/service, reserved, or damaged/returned.",
          "Exact warehouse counts will be established during initial operational audit."
        ],
        footerLabel: "Required Data",
        footerValue: "Actual stock on hand per SKU/unit and shelf location",
        accent: "slate"
      }
    },
    {
      id: "stock-mix",
      kicker: "Basis Requires Confirmation",
      label: "New / Refurbished Mix",
      value: "~70% / 30%",
      cue: "Second/Refurbished ~70% • New ~30%",
      modal: {
        badge: "Metric Qualifier",
        subtitle: "Inventory Composition",
        title: "Mix ~70% Second/Refurbished & ~30% New",
        metric: "70% / 30%",
        metricLabel: "Basis Unconfirmed",
        summary: "The 70/30 split comes from the brief, but its measurement basis must be verified before formal reporting.",
        highlights: [
          "Must confirm whether 70/30 represents unit count, SKU count, or inventory value.",
          "Shapes segment strategy: cost-efficient refurbished tiers vs. new-only tenders.",
          "Every second/refurbished unit must disclose QC results, physical condition, and warranty limits."
        ],
        footerLabel: "First Action",
        footerValue: "Confirm metric basis (units / SKUs / value) during stock audit",
        accent: "slate"
      }
    },
    {
      id: "slow-moving",
      kicker: "Data Required",
      label: "Slow Moving & Aging",
      value: "Data Required",
      cue: "Requires entry dates & stock age",
      modal: {
        badge: "Velocity Control",
        subtitle: "Target Alerts",
        title: "Slow-Moving Detection & Early Alerts",
        metric: "5 Alerts",
        metricLabel: "System Triggers",
        summary: "Prevents working capital from stalling in the warehouse through age tracking and automated alerts.",
        highlights: [
          "Target alerts: aging stock, critical low stock, HPP/price changes, reserved units, and physical mismatch.",
          "Linked directly to quotation, order processing, delivery, returns, and margin tracking.",
          "Turns aging units into structured bundling or promotional campaigns."
        ],
        footerLabel: "Required Data",
        footerValue: "Purchase/entry dates and historical SKU sales velocity",
        accent: "slate"
      }
    },
    {
      id: "stock-value",
      kicker: "Data Required",
      label: "Stock Value",
      value: "Data Required",
      cue: "Awaiting COGS/HPP & refurbishment costs",
      modal: {
        badge: "Financial Valuation",
        subtitle: "Claim Boundary",
        title: "Inventory Value & COGS/HPP Integration",
        metric: "Finance Data",
        metricLabel: "Restricted Access",
        summary: "Inventory value is never fabricated prior to verified COGS/HPP and refurbishment cost data from Finance.",
        highlights: [
          "Consolidates purchase COGS/HPP, refurbishment costs, and base selling prices per SKU.",
          "COGS/HPP visibility remains strictly restricted to Finance and management approval.",
          "Protects gross margin against unapproved discounting or prolonged holding costs."
        ],
        footerLabel: "Required Data",
        footerValue: "COGS/HPP, refurbishment costs, returns, and official base pricing",
        accent: "slate"
      }
    }
  ],
  mixPanel: {
    title: "Stock Mix (Brief)",
    caveat: "Metric basis (units / SKUs / value) requires confirmation",
    slices: [
      { name: "Second / Refurbished (~70%)", value: 70, color: "#dc2626" },
      { name: "New Units (~30%)", value: 30, color: "#64748b" }
    ]
  },
  tablePanel: {
    title: "Target Stock Table Structure (Simulated Columns)",
    note: "Illustrates tracked attributes per SKU — actual values await audit",
    headers: {
      sku: "SKU / Code",
      category: "Category",
      condition: "Condition",
      entryDate: "Entry Date",
      age: "Age",
      hpp: "COGS/HPP",
      price: "Base Price",
      location: "Location",
      qcStatus: "Status / QC"
    },
    rows: [
      {
        sku: "SKU-001*",
        category: "Business Laptop",
        condition: "Refurbished",
        entryDate: "Entry Date",
        age: "Age (d)",
        hpp: "Finance Only",
        price: "Sell Price",
        location: "Rack A-01",
        qcStatus: "Ready (QC)"
      },
      {
        sku: "SKU-002*",
        category: "Enterprise Server",
        condition: "New",
        entryDate: "Entry Date",
        age: "Age (d)",
        hpp: "Finance Only",
        price: "Sell Price",
        location: "Rack B-04",
        qcStatus: "Reserved"
      },
      {
        sku: "SKU-003*",
        category: "Router / Switch",
        condition: "Second",
        entryDate: "Entry Date",
        age: "Age (d)",
        hpp: "Finance Only",
        price: "Sell Price",
        location: "Service Bay",
        qcStatus: "Needs QC"
      }
    ]
  },
  agingPanel: {
    title: "Example Stock Aging Buckets",
    note: "Configurable bucket structure (aligned to business pattern — values await audit)",
    tooltipLabel: "Target bucket example (awaiting real data)",
    buckets: [
      { bucket: "0–30 d", sampleIndex: 45, note: "Healthy Turn (Example)" },
      { bucket: "31–60 d", sampleIndex: 30, note: "Monitor Quotes (Example)" },
      { bucket: "61–90 d", sampleIndex: 15, note: "Bundle Focus (Example)" },
      { bucket: ">90 d", sampleIndex: 10, note: "Slow-Moving Alert (Example)" }
    ]
  },
  rolesSectionLabel: "Role-Based Access Control",
  rolesSectionNote: "Single inventory record linked to quotes, orders, delivery, returns & margin",
  roles: [
    {
      id: "sales",
      role: "Sales",
      accessScope: "View availability, QC status & sell price",
      restriction: "Sensitive COGS/HPP hidden",
      modal: {
        badge: "Role 01",
        subtitle: "Sales Permissions",
        title: "Sales — Availability, Reservations & Sell Price",
        metric: "Read + Reserve",
        metricLabel: "Access Level",
        summary: "Enables fast, accurate customer quoting with reliable stock availability and unit condition.",
        highlights: [
          "Views ready stock, location, warranty terms, QC outcome, and base selling price.",
          "Sees reserved inventory flags in real time to prevent double commitments.",
          "Connects directly into quotation and sales order workflows."
        ],
        footerLabel: "Boundary",
        footerValue: "Internal Finance COGS/HPP and cost breakdowns remain hidden",
        accent: "slate"
      }
    },
    {
      id: "warehouse",
      role: "Warehouse",
      accessScope: "Update shelf location, physical state & QC",
      restriction: "Physical movement control",
      modal: {
        badge: "Role 02",
        subtitle: "Warehouse Permissions",
        title: "Warehouse — Shelf Location, Physical State & QC",
        metric: "Physical Control",
        metricLabel: "Access Level",
        summary: "Maintains strict alignment between physical warehouse racks and cross-department system records.",
        highlights: [
          "Updates rack locations, entry dates, QC/service status, and damaged/returned units.",
          "Logs serial numbers on high-value hardware during receiving and dispatch.",
          "Triggers variance alerts when physical counts differ from system stock."
        ],
        footerLabel: "Linkage",
        footerValue: "Syncs with delivery orders, sales reservations, and returns",
        accent: "slate"
      }
    },
    {
      id: "finance",
      role: "Finance",
      accessScope: "Manage COGS/HPP, refurbish cost & margin",
      restriction: "Stock valuation control",
      modal: {
        badge: "Role 03",
        subtitle: "Finance Permissions",
        title: "Finance — COGS/HPP, Valuation & Margin Control",
        metric: "Cost & Margin",
        metricLabel: "Access Level",
        summary: "Protects net company profitability across all pricing tiers and promotional bundles.",
        highlights: [
          "Maintains purchase COGS/HPP, refurbishment expenses, and inventory valuation.",
          "Verifies transaction gross margin before order invoicing.",
          "Issues cost alerts whenever purchase HPP shifts."
        ],
        footerLabel: "Linkage",
        footerValue: "Establishes floor rules for tiered discount authority",
        accent: "slate"
      }
    },
    {
      id: "manager-owner",
      role: "Manager / Owner",
      accessScope: "Approve discounts, aging release & audits",
      restriction: "Full governance oversight",
      modal: {
        badge: "Role 04",
        subtitle: "Leadership Permissions",
        title: "Manager / Owner — Approvals & Full Oversight",
        metric: "Full Governance",
        metricLabel: "Access Level",
        summary: "Gives leadership complete visibility to act quickly on pricing approvals, aging stock, and returns.",
        highlights: [
          "Approves exceptional discounts, slow-moving release campaigns, and reservation overrides.",
          "Receives alerts on critical low stock, >90-day items, and margin deviations.",
          "Supports weekly coordination across Sales, Warehouse, Purchasing, and Finance."
        ],
        footerLabel: "First Step",
        footerValue: "Assess existing ERP/WMS/POS prior to any system build",
        accent: "slate"
      }
    }
  ],
  governanceNote: {
    label: "Claim Boundary & Readiness",
    text: "This mockup depicts a proposed target design (not a live real-time system). Assessment of current ERP/WMS/POS tools and confirmation of the 70/30 metric basis come first."
  }
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide05Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide05Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 5,
  folder: "05",
  sectionId: 1,
  navTitle: {
    in: "Inventory Intelligence",
    en: "Inventory Intelligence"
  },
  headerTitle: {
    in: "Inventory Intelligence - Mengubah Stok Menjadi Aset Penjualan",
    en: "Inventory Intelligence - Turning Stock into Sales Assets"
  },
  category: {
    in: "I. Memahami Bisnis",
    en: "I. Understanding the Business"
  },
  section: {
    in: "I. Memahami Bisnis",
    en: "I. Understanding the Business"
  }
};
