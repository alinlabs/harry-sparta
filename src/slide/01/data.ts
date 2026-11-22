import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide01Pillar {
  number: string;
  label: string;
  desc: string;
}

export interface Slide01AgendaItem {
  number: string;
  question: string;
}

export interface Slide01Content {
  subtitle: string;
  headlinePrimary: string;
  headlineAccent: string;
  thesisLabel: string;
  thesis: string;
  pillarsTitle: string;
  pillars: Slide01Pillar[];
  agendaTitle: string;
  agendaItems: Slide01AgendaItem[];
  closingLabel: string;
  closingLine: string;
  presenter: {
    name: string;
    role: string;
    company: string;
  };
}

export const slideDataId: Slide01Content = {
  subtitle: 'Dari Perdagangan IT Menuju Ekosistem Solusi Teknologi',
  headlinePrimary: 'Mitra Teknologi Sparta',
  headlineAccent: 'di Setiap Siklus Aset IT',
  thesisLabel: 'Tesis Inti',
  thesis: 'Kekuatan dagang baru & bekas sebagai pintu masuk layanan korporasi.',
  pillarsTitle: '4 Pilar Pertumbuhan',
  pillars: [
    { number: '01', label: 'Bisnis Inti', desc: 'Baru & bekas (ritel, grosir, B2B)' },
    { number: '02', label: 'Pasar Korporasi', desc: 'Pengadaan, tender, buyback, lelang' },
    { number: '03', label: 'Merek SPARTA', desc: 'AIO PC & Digital Display' },
    { number: '04', label: 'Ekspansi Terukur', desc: 'Ritel Jabodetabek & jalur DC' },
  ],
  agendaTitle: '5 Fokus Pembahasan',
  agendaItems: [
    { number: '01', question: 'Kantong peluang paling realistis' },
    { number: '02', question: 'Cara menang & diferensiasi' },
    { number: '03', question: 'Eksekusi sales & kontrol KPI' },
    { number: '04', question: 'Tahapan ritel & merek SPARTA' },
    { number: '05', question: 'Gerbang kelayakan data center' },
  ],
  closingLabel: 'Prinsip Eksekusi',
  closingLine: 'Pertumbuhan bertahap yang saling menguatkan.',
  presenter: {
    name: 'Harry Gultom',
    role: 'Kandidat Sales Manager',
    company: 'PT Sparta Computindo Teknologi',
  },
};

export const slideDataEn: Slide01Content = {
  subtitle: 'From IT Trading to a Technology Solutions Ecosystem',
  headlinePrimary: 'Sparta as a Tech Partner',
  headlineAccent: 'Across the IT Asset Lifecycle',
  thesisLabel: 'Core Thesis',
  thesis: 'New & used IT trading edge as the wedge into B2B lifecycle deals.',
  pillarsTitle: '4 Growth Pillars',
  pillars: [
    { number: '01', label: 'Core Trading', desc: 'New & used (retail, wholesale, B2B)' },
    { number: '02', label: 'Corporate Market', desc: 'Supply, tenders, buyback, auctions' },
    { number: '03', label: 'SPARTA Brand', desc: 'AIO PC & Digital Display' },
    { number: '04', label: 'Staged Growth', desc: 'Jabodetabek retail & DC path' },
  ],
  agendaTitle: '5 Key Focus Areas',
  agendaItems: [
    { number: '01', question: 'Most realistic demand pools' },
    { number: '02', question: 'Winning differentiation' },
    { number: '03', question: 'Sales execution & KPIs' },
    { number: '04', question: 'Phased retail & SPARTA rollout' },
    { number: '05', question: 'Data center readiness gates' },
  ],
  closingLabel: 'Execution Principle',
  closingLine: 'Measured near-term growth; compounding ecosystem.',
  presenter: {
    name: 'Harry Gultom',
    role: 'Sales Manager Candidate',
    company: 'PT Sparta Computindo Teknologi',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide01Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide01Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 1,
  folder: '01',
  sectionId: 0,
  navTitle: {
    in: 'Arah Eksekutif',
    en: 'Executive Direction',
  },
  headerTitle: {
    in: 'Arah Eksekutif — PT Sparta Computindo Teknologi',
    en: 'Executive Direction — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Arah Eksekutif',
    en: 'Executive Direction',
  },
  section: {
    in: 'Cover',
    en: 'Cover',
  },
};
