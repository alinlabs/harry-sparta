import { useLanguage } from '@/contexts/LanguageContext';

export type CapabilityGroupId = 'devices' | 'infrastructure' | 'it-solutions' | 'connectivity-support';
export type CorePillarId = 'hardware-pillar' | 'solutions-pillar';

export interface CoreCapabilityPillar {
  id: CorePillarId;
  kicker: string;
  title: string;
  keywords: string;
  modal: {
    badge: string;
    subtitle: string;
    title: string;
    metric: string;
    metricLabel: string;
    summary: string;
    highlights: string[];
    footerLabel: string;
    footerValue: string;
    accent: 'red' | 'slate';
  };
}

export interface CapabilityGroupCard {
  id: CapabilityGroupId;
  title: string;
  category: string;
  subcategories: string[];
  image?: string;
  imageAlt?: string;
  mockupHighlight: string;
  modal: {
    badge: string;
    subtitle: string;
    title: string;
    metric: string;
    metricLabel: string;
    image?: string;
    imageAlt?: string;
    summary: string;
    highlights: string[];
    footerLabel: string;
    footerValue: string;
    accent: 'red' | 'slate';
  };
}

export interface Slide03Data {
  eyebrow: string;
  title: string;
  positioningLabel: string;
  positioningStatement: string;
  positioningCaveat: string;
  valueBridgeLabel: string;
  valueBridgeSteps: string[];
  pillarsSectionLabel: string;
  pillars: CoreCapabilityPillar[];
  ownerCard: {
    kicker: string;
    title: string;
    keywords: string;
    caveat: string;
    modal: {
      badge: string;
      subtitle: string;
      title: string;
      summary: string;
      highlights: string[];
      footerLabel: string;
      footerValue: string;
      accent: 'red' | 'slate';
    };
  };
  proofCard: {
    kicker: string;
    title: string;
    keywords: string;
    caveat: string;
    modal: {
      badge: string;
      subtitle: string;
      title: string;
      summary: string;
      highlights: string[];
      footerLabel: string;
      footerValue: string;
      accent: 'red' | 'slate';
    };
  };
  mockup: {
    kicker: string;
    title: string;
    desktopLabel: string;
    mobileLabel: string;
    siteTitle: string;
    heroTag: string;
    heroHeadline: string;
    simulatedCta: string;
    activePreviewLabel: string;
    disclaimer: string;
  };
  capabilitiesSectionLabel: string;
  capabilityGroups: CapabilityGroupCard[];
}

export const slideDataId: Slide03Data = {
  eyebrow: "Profil Perusahaan",
  title: "Identitas, Positioning & Kapabilitas Terpadu",
  positioningLabel: "Usulan Positioning",
  positioningStatement: "Mitra penyedia perangkat dan solusi IT untuk kebutuhan personal, bisnis, dan institusi.",
  positioningCaveat: "Redaksi menunggu validasi Direksi",
  valueBridgeLabel: "Alur Nilai",
  valueBridgeSteps: ["Perangkat IT", "Pintu Masuk Relasi", "Solusi & Layanan"],
  pillarsSectionLabel: "Dua Kelompok Kemampuan",
  pillars: [
    {
      id: "hardware-pillar",
      kicker: "Kelompok 01",
      title: "Perangkat (New & Second)",
      keywords: "PC • Laptop • Server • Jaringan • Brand Pribadi",
      modal: {
        badge: "Kelompok 01",
        subtitle: "Arahan Perusahaan",
        title: "Penyediaan Perangkat IT & Brand Pribadi",
        metric: "New + Second",
        metricLabel: "Basis Produk",
        summary: "Perangkat menjadi fondasi penjualan dan pintu masuk relasi lintas segmen personal, bisnis, dan institusi.",
        highlights: [
          "Mencakup PC, laptop, server enterprise, networking, router/switch, dan sparepart.",
          "Tersedia opsi unit baru maupun second/refurbished dengan transparansi kondisi.",
          "Usulan kandidat mengangkat pengembangan Brand Pribadi dan halaman produk khusus."
        ],
        footerLabel: "Status Data",
        footerValue: "Daftar merek, garansi & basis stok 70/30 menunggu konfirmasi resmi",
        accent: "slate"
      }
    },
    {
      id: "solutions-pillar",
      kicker: "Kelompok 02",
      title: "Solusi & Layanan IT",
      keywords: "Instalasi • Maintenance • Internet • Software Dev",
      modal: {
        badge: "Kelompok 02",
        subtitle: "Arahan Perusahaan",
        title: "Solusi Infrastruktur, Software, Internet & Maintenance",
        metric: "End-to-End",
        metricLabel: "Cakupan Solusi",
        summary: "Memperluas penjualan unit menjadi layanan instalasi, konektivitas, software development, dan pemeliharaan.",
        highlights: [
          "Instalasi serta pemeliharaan infrastruktur IT bersama tim teknis.",
          "Layanan konektivitas internet untuk bisnis maupun institusi.",
          "IT Solution dan software development sesuai kebutuhan pelanggan."
        ],
        footerLabel: "Status Data",
        footerValue: "Kompetensi tim, daftar aplikasi, SLA & portofolio menunggu verifikasi",
        accent: "slate"
      }
    }
  ],
  ownerCard: {
    kicker: "Personal Branding Owner",
    title: "Narasi Kepemimpinan",
    keywords: "Perjalanan • Prinsip • Kompetensi • Visi",
    caveat: "Foto & profil menunggu aset resmi",
    modal: {
      badge: "Personal Branding",
      subtitle: "Usulan Profil Interaktif",
      title: "Kerangka Narasi Owner",
      summary: "Menampilkan kepemimpinan Owner melalui empat pilar relevan untuk membangun kepercayaan B2B dan institusi.",
      highlights: [
        "Perjalanan Bisnis & Visi membangun mitra teknologi jangka panjang.",
        "Prinsip Layanan yang jujur pada kondisi unit, kualitas, dan purnajual.",
        "Kompetensi pada perangkat keras, infrastruktur server/jaringan, dan solusi."
      ],
      footerLabel: "Batas Konten",
      footerValue: "Tanpa biografi/foto rekaan; menunggu foto & naskah resmi Owner",
      accent: "slate"
    }
  },
  proofCard: {
    kicker: "Bukti Kemampuan",
    title: "Checklist Verifikasi",
    keywords: "Stok & QC • Teknis • Garansi • Proyek • Partner",
    caveat: "Menunggu dokumen internal resmi",
    modal: {
      badge: "Verifikasi Bukti",
      subtitle: "Kelengkapan Profil",
      title: "Bukti Kemampuan yang Harus Disiapkan",
      summary: "Seluruh klaim profil wajib didukung data internal agar kredibel di mata pelanggan bisnis dan pemerintah.",
      highlights: [
        "Data stok riil, standar QC, serta ketentuan garansi unit baru dan second.",
        "Kesiapan tim teknis, daftar layanan/software nyata, serta wilayah SLA.",
        "Daftar merek, partner resmi, dan studi kasus proyek yang boleh dipublikasikan."
      ],
      footerLabel: "Prinsip Klaim",
      footerValue: "Tidak menampilkan sertifikasi atau status partner sebelum bukti terverifikasi",
      accent: "slate"
    }
  },
  mockup: {
    kicker: "Simulasi Konsep Web • Proposal",
    title: "Interactive Company Profile",
    desktopLabel: "Desktop",
    mobileLabel: "Mobile",
    siteTitle: "Portal Profil & Solusi IT",
    heroTag: "Perangkat → Solusi",
    heroHeadline: "Perangkat IT & Solusi Terpadu",
    simulatedCta: "Lihat kebutuhan / Konsultasi",
    activePreviewLabel: "Pratinjau Kategori",
    disclaimer: "Mockup konsep UI (bukan situs aktif maupun katalog lengkap)"
  },
  capabilitiesSectionLabel: "Empat Kelompok Kapabilitas",
  capabilityGroups: [
    {
      id: "devices",
      title: "Devices",
      category: "Perangkat Keras",
      subcategories: ["Komputer & PC", "Laptop New / Second", "Sparepart", "Brand Pribadi"],
      image: "/gambar/smart-display-solution.png",
      imageAlt: "Ilustrasi perangkat display dan komputasi IT",
      mockupHighlight: "PC & laptop baru/refurbished teruji + opsi brand pribadi.",
      modal: {
        badge: "Kapabilitas 01",
        subtitle: "Perangkat & Brand Pribadi",
        title: "Devices — Komputasi & Sparepart",
        metric: "New & Second",
        metricLabel: "Opsi Unit",
        image: "/gambar/smart-display-solution.png",
        imageAlt: "Ilustrasi perangkat komputasi dan display",
        summary: "Menyediakan komputer, laptop baru dan second/refurbished, sparepart, serta pengembangan brand pribadi.",
        highlights: [
          "PC/komputer kerja dan laptop consumer, business, maupun gaming.",
          "Opsi unit baru dan second/refurbished beserta sparepart pendukung.",
          "Pengembangan Brand Pribadi menunggu peta SKU, QC, dan standar garansi."
        ],
        footerLabel: "CTA Simulasi",
        footerValue: "Lihat kebutuhan / Konsultasi",
        accent: "slate"
      }
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      category: "Enterprise Hardware",
      subcategories: ["Server Enterprise", "Networking", "Router & Switch", "Instalasi IT"],
      image: "/gambar/gpon-and-epon-olt.png",
      imageAlt: "Perangkat jaringan dan infrastruktur enterprise",
      mockupHighlight: "Server baru/second, router, switch & instalasi infrastruktur.",
      modal: {
        badge: "Kapabilitas 02",
        subtitle: "Server & Jaringan",
        title: "Infrastructure — Server, Networking & Instalasi",
        metric: "Server & Net",
        metricLabel: "Fokus B2B/B2G",
        image: "/gambar/gpon-and-epon-olt.png",
        imageAlt: "Perangkat infrastruktur jaringan enterprise",
        summary: "Menyediakan server enterprise (baru/second), perangkat networking, router/switch, dan instalasi IT.",
        highlights: [
          "Server enterprise baru dan second/refurbished sesuai beban kerja.",
          "Perangkat jaringan, router, dan switch untuk kantor maupun cabang.",
          "Instalasi infrastruktur bersama tim teknis (bukti partner & proyek menunggu konfirmasi)."
        ],
        footerLabel: "CTA Simulasi",
        footerValue: "Lihat kebutuhan / Konsultasi",
        accent: "slate"
      }
    },
    {
      id: "it-solutions",
      title: "IT Solutions",
      category: "Solusi & Software",
      subcategories: ["IT Solution Bisnis", "Software Development", "Integrasi Sistem", "Konsultasi Teknis"],
      mockupHighlight: "Solusi IT & software development sesuai proses bisnis.",
      modal: {
        badge: "Kapabilitas 03",
        subtitle: "Solusi & Software",
        title: "IT Solutions — Software Development & Integrasi",
        metric: "Product-to-Solution",
        metricLabel: "Pendekatan",
        summary: "Mengubah transaksi perangkat satuan menjadi solusi terintegrasi lewat IT Solution dan software development.",
        highlights: [
          "Konsultasi kebutuhan operasional lintas segmen bisnis dan institusi.",
          "Pengembangan serta penyesuaian software sesuai alur kerja klien.",
          "Daftar aplikasi siap jual dan kapasitas developer menunggu verifikasi."
        ],
        footerLabel: "CTA Simulasi",
        footerValue: "Lihat kebutuhan / Konsultasi",
        accent: "slate"
      }
    },
    {
      id: "connectivity-support",
      title: "Connectivity & Support",
      category: "Internet & Purnajual",
      subcategories: ["Layanan Internet", "Maintenance IT", "Dukungan Teknis", "Purnajual"],
      image: "/gambar/gpon-ont-2.4g-5g-powerful-wifi-router.png",
      imageAlt: "Perangkat router konektivitas dan dukungan jaringan",
      mockupHighlight: "Konektivitas internet, pemeliharaan IT & dukungan purnajual.",
      modal: {
        badge: "Kapabilitas 04",
        subtitle: "Internet & Maintenance",
        title: "Connectivity & Support — Internet & Purnajual",
        metric: "Recurring Care",
        metricLabel: "Retensi Klien",
        image: "/gambar/gpon-ont-2.4g-5g-powerful-wifi-router.png",
        imageAlt: "Perangkat konektivitas jaringan",
        summary: "Menjaga keandalan operasional klien pascapembelian lewat layanan internet dan pemeliharaan infrastruktur IT.",
        highlights: [
          "Layanan konektivitas internet untuk bisnis dan institusi.",
          "Pemeliharaan berkala infrastruktur IT dan dukungan teknis.",
          "Wilayah layanan dan SLA resmi menunggu konfirmasi internal."
        ],
        footerLabel: "CTA Simulasi",
        footerValue: "Lihat kebutuhan / Konsultasi",
        accent: "slate"
      }
    }
  ]
};

export const slideDataEn: Slide03Data = {
  eyebrow: "Company Profile",
  title: "Identity, Positioning & Integrated Capabilities",
  positioningLabel: "Proposed Positioning",
  positioningStatement: "A trusted partner providing IT hardware and technology solutions for personal, business, and institutional needs.",
  positioningCaveat: "Copy awaiting Board validation",
  valueBridgeLabel: "Value Flow",
  valueBridgeSteps: ["IT Devices", "Relationship Entry", "Solutions & Services"],
  pillarsSectionLabel: "Two Core Capability Pillars",
  pillars: [
    {
      id: "hardware-pillar",
      kicker: "Pillar 01",
      title: "Devices (New & Second)",
      keywords: "PC • Laptops • Servers • Networking • Private Brand",
      modal: {
        badge: "Pillar 01",
        subtitle: "Company Mandate",
        title: "IT Devices Supply & Private Brand",
        metric: "New + Second",
        metricLabel: "Product Base",
        summary: "Hardware forms the commercial base and entry point across personal, corporate, and institutional segments.",
        highlights: [
          "Covers PCs, laptops, enterprise servers, networking, routers/switches, and spare parts.",
          "Offers new and second/refurbished options with transparent unit condition.",
          "Candidate proposal adds private-label brand development and product pages."
        ],
        footerLabel: "Data Status",
        footerValue: "Brands, warranty & 70/30 stock basis awaiting official confirmation",
        accent: "slate"
      }
    },
    {
      id: "solutions-pillar",
      kicker: "Pillar 02",
      title: "IT Solutions & Services",
      keywords: "Installation • Maintenance • Internet • Software Dev",
      modal: {
        badge: "Pillar 02",
        subtitle: "Company Mandate",
        title: "Infrastructure, Software, Internet & Maintenance Solutions",
        metric: "End-to-End",
        metricLabel: "Solution Scope",
        summary: "Expands one-off unit sales into infrastructure installation, internet, software development, and ongoing care.",
        highlights: [
          "IT infrastructure installation and maintenance with technical teams.",
          "Business and institutional internet connectivity services.",
          "IT Solutions and software development tailored to client workflows."
        ],
        footerLabel: "Data Status",
        footerValue: "Team skills, software list, SLAs & project proof awaiting verification",
        accent: "slate"
      }
    }
  ],
  ownerCard: {
    kicker: "Owner Personal Branding",
    title: "Leadership Narrative",
    keywords: "Journey • Principles • Competency • Vision",
    caveat: "Photo & copy await official assets",
    modal: {
      badge: "Personal Branding",
      subtitle: "Interactive Profile Proposal",
      title: "Owner Narrative Framework",
      summary: "Highlights Owner leadership across four relevant pillars to build trust with corporate and institutional buyers.",
      highlights: [
        "Business Journey & Vision for building a reliable long-term IT partner.",
        "Service Principles grounded in transparent grading, quality, and after-sales.",
        "Competency across hardware, enterprise servers/networks, and IT solutions."
      ],
      footerLabel: "Content Boundary",
      footerValue: "No fabricated bio/photo; awaits approved Owner portrait and copy",
      accent: "slate"
    }
  },
  proofCard: {
    kicker: "Capability Proof",
    title: "Verification Checklist",
    keywords: "Stock & QC • Technical • Warranty • Projects • Partners",
    caveat: "Awaiting internal documents",
    modal: {
      badge: "Evidence Verification",
      subtitle: "Profile Readiness",
      title: "Verifiable Proof Required",
      summary: "Every capability claim requires verifiable internal documentation to earn B2B and B2G buyer trust.",
      highlights: [
        "Actual stock data, QC standards, and warranty terms for new and second units.",
        "Technical team readiness, deliverable software list, and SLA coverage areas.",
        "Approved brand/partner list and non-confidential project references."
      ],
      footerLabel: "Claim Rule",
      footerValue: "No partner status or certification claimed without verified proof",
      accent: "slate"
    }
  },
  mockup: {
    kicker: "Web Concept Simulation • Proposal",
    title: "Interactive Company Profile",
    desktopLabel: "Desktop",
    mobileLabel: "Mobile",
    siteTitle: "IT Profile & Solutions Portal",
    heroTag: "Devices → Solutions",
    heroHeadline: "IT Hardware & Integrated Solutions",
    simulatedCta: "View Needs / Consult",
    activePreviewLabel: "Category Preview",
    disclaimer: "UI concept mockup (not a live site or full catalog)"
  },
  capabilitiesSectionLabel: "Four Capability Groups",
  capabilityGroups: [
    {
      id: "devices",
      title: "Devices",
      category: "Hardware Supply",
      subcategories: ["Computers & PCs", "Laptops New / Second", "Spare Parts", "Private Brand"],
      image: "/gambar/smart-display-solution.png",
      imageAlt: "Illustration of IT computing and display hardware",
      mockupHighlight: "Tested new & refurbished computing hardware + private brand options.",
      modal: {
        badge: "Capability 01",
        subtitle: "Devices & Private Brand",
        title: "Devices — Computing & Spare Parts",
        metric: "New & Second",
        metricLabel: "Unit Options",
        image: "/gambar/smart-display-solution.png",
        imageAlt: "Computing and display hardware illustration",
        summary: "Supplies PCs, new and second/refurbished laptops, spare parts, and private-label brand development.",
        highlights: [
          "Custom-build desktops plus consumer, business, and gaming laptops.",
          "New and second/refurbished options backed by essential spare parts.",
          "Private-label brand scope awaits SKU, QC, and warranty standards."
        ],
        footerLabel: "Simulated CTA",
        footerValue: "View Needs / Consult",
        accent: "slate"
      }
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      category: "Enterprise Hardware",
      subcategories: ["Enterprise Servers", "Networking", "Routers & Switches", "IT Installation"],
      image: "/gambar/gpon-and-epon-olt.png",
      imageAlt: "Enterprise networking and infrastructure hardware",
      mockupHighlight: "New/second servers, routers, switches & infrastructure installation.",
      modal: {
        badge: "Capability 02",
        subtitle: "Servers & Networking",
        title: "Infrastructure — Servers, Networking & Installation",
        metric: "Server & Net",
        metricLabel: "B2B/B2G Focus",
        image: "/gambar/gpon-and-epon-olt.png",
        imageAlt: "Enterprise network infrastructure hardware",
        summary: "Provides enterprise servers (new/second), networking gear, routers/switches, and IT installation.",
        highlights: [
          "New and second/refurbished enterprise servers sized to client workloads.",
          "Networking hardware, routers, and switches for offices and branches.",
          "On-site installation supported by technical staff (partners/cases await verification)."
        ],
        footerLabel: "Simulated CTA",
        footerValue: "View Needs / Consult",
        accent: "slate"
      }
    },
    {
      id: "it-solutions",
      title: "IT Solutions",
      category: "Solutions & Software",
      subcategories: ["Business IT Solutions", "Software Development", "System Integration", "Technical Consulting"],
      mockupHighlight: "Tailored IT solutions & software development aligned to business needs.",
      modal: {
        badge: "Capability 03",
        subtitle: "Solutions & Software",
        title: "IT Solutions — Software Development & Integration",
        metric: "Product-to-Solution",
        metricLabel: "Approach",
        summary: "Converts standalone hardware orders into integrated engagements through IT Solutions and software development.",
        highlights: [
          "Needs assessment for corporate and institutional workflows.",
          "Software development and customization aligned with client operations.",
          "Deliverable app list and engineering capacity await internal verification."
        ],
        footerLabel: "Simulated CTA",
        footerValue: "View Needs / Consult",
        accent: "slate"
      }
    },
    {
      id: "connectivity-support",
      title: "Connectivity & Support",
      category: "Internet & After-Sales",
      subcategories: ["Internet Services", "IT Maintenance", "Technical Support", "After-Sales"],
      image: "/gambar/gpon-ont-2.4g-5g-powerful-wifi-router.png",
      imageAlt: "Connectivity router and network support hardware",
      mockupHighlight: "Internet connectivity, IT maintenance & ongoing after-sales support.",
      modal: {
        badge: "Capability 04",
        subtitle: "Internet & Maintenance",
        title: "Connectivity & Support — Internet & After-Sales",
        metric: "Recurring Care",
        metricLabel: "Client Retention",
        image: "/gambar/gpon-ont-2.4g-5g-powerful-wifi-router.png",
        imageAlt: "Network connectivity router hardware",
        summary: "Sustains post-purchase client operations through internet connectivity and ongoing IT maintenance.",
        highlights: [
          "Business and institutional internet connectivity services.",
          "Scheduled IT infrastructure maintenance and responsive technical support.",
          "Coverage areas and official SLA terms await internal confirmation."
        ],
        footerLabel: "Simulated CTA",
        footerValue: "View Needs / Consult",
        accent: "slate"
      }
    }
  ]
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide03Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide03Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 3,
  folder: "03",
  sectionId: 1,
  navTitle: {
    in: "Profil Perusahaan",
    en: "Company Profile"
  },
  headerTitle: {
    in: "Profil Perusahaan - Identitas dan Positioning",
    en: "Company Profile - Identity and Positioning"
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
