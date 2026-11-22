/**
 * Single Source of Truth for Slide Order, Routes, Header Titles, URLs, and Sidebar Navigation.
 */

import React from 'react';
import {
  Layers,
  Users,
  Compass,
  LayoutGrid,
  BookOpen,
  LucideIcon,
} from 'lucide-react';
import type { Language } from '../contexts/LanguageContext';

import Slide01, { slideMeta as meta01 } from './01';
import Slide02, { slideMeta as meta02 } from './02';
import Slide03, { slideMeta as meta03 } from './03';
import Slide04, { slideMeta as meta04 } from './04';
import Slide05, { slideMeta as meta05 } from './05';
import Slide06, { slideMeta as meta06 } from './06';
import Slide07, { slideMeta as meta07 } from './07';
import Slide08, { slideMeta as meta08 } from './08';
import Slide09, { slideMeta as meta09 } from './09';
import Slide10, { slideMeta as meta10 } from './10';
import Slide11, { slideMeta as meta11 } from './11';
import Slide12, { slideMeta as meta12 } from './12';

export interface BilingualText {
  in: string;
  en: string;
}

export interface SlideMetaDefinition {
  slideNumber: number;
  folder: string;
  sectionId: number;
  navTitle: BilingualText;
  headerTitle: BilingualText;
  category: BilingualText;
  section: BilingualText;
}

export interface RegisteredSlideEntry {
  index: number;
  slideNumber: number;
  folder: string;
  Component: React.ComponentType<any>;
  meta: SlideMetaDefinition;
}

export interface SectionMetadata {
  id: number;
  title: BilingualText;
  icon: LucideIcon;
}

export const SECTION_CATALOG: Record<number, SectionMetadata> = {
  0: {
    id: 0,
    title: { in: 'Cover', en: 'Cover' },
    icon: LayoutGrid,
  },
  1: {
    id: 1,
    title: { in: 'Strategi & Komersial', en: 'Strategy & Commercial' },
    icon: Compass,
  },
  2: {
    id: 2,
    title: { in: 'Ekspansi & Produk', en: 'Expansion & Products' },
    icon: Layers,
  },
  3: {
    id: 3,
    title: { in: 'Tata Kelola', en: 'Governance' },
    icon: Users,
  },
  4: {
    id: 4,
    title: { in: 'Penutup & Komitmen', en: 'Closing & Commitment' },
    icon: BookOpen,
  },
};

export const SLIDE_REGISTRY: RegisteredSlideEntry[] = [
  {
    index: 0,
    slideNumber: 1,
    folder: '01',
    Component: Slide01,
    meta: meta01,
  },
  {
    index: 1,
    slideNumber: 2,
    folder: '02',
    Component: Slide02,
    meta: meta02,
  },
  {
    index: 2,
    slideNumber: 3,
    folder: '03',
    Component: Slide03,
    meta: meta03,
  },
  {
    index: 3,
    slideNumber: 4,
    folder: '04',
    Component: Slide04,
    meta: meta04,
  },
  {
    index: 4,
    slideNumber: 5,
    folder: '05',
    Component: Slide05,
    meta: meta05,
  },
  {
    index: 5,
    slideNumber: 6,
    folder: '06',
    Component: Slide06,
    meta: meta06,
  },
  {
    index: 6,
    slideNumber: 7,
    folder: '07',
    Component: Slide07,
    meta: meta07,
  },
  {
    index: 7,
    slideNumber: 8,
    folder: '08',
    Component: Slide08,
    meta: meta08,
  },
  {
    index: 8,
    slideNumber: 9,
    folder: '09',
    Component: Slide09,
    meta: meta09,
  },
  {
    index: 9,
    slideNumber: 10,
    folder: '10',
    Component: Slide10,
    meta: meta10,
  },
  {
    index: 10,
    slideNumber: 11,
    folder: '11',
    Component: Slide11,
    meta: meta11,
  },
  {
    index: 11,
    slideNumber: 12,
    folder: '12',
    Component: Slide12,
    meta: meta12,
  }
];

export const TOTAL_SLIDES: number = SLIDE_REGISTRY.length;

export interface ResolvedSlideConfig {
  id: number;
  slideNumber: number;
  folder: string;
  sectionId: number;
  title: string;
  navTitle: string;
  category: string;
  section: string;
  component: React.ReactElement;
  meta: SlideMetaDefinition;
}

/**
 * Menghasilkan konfigurasi seluruh slide yang aktif sesuai bahasa (`in` / `en`)
 */
export function getSlidesConfig(lang: Language | 'id' = 'in'): ResolvedSlideConfig[] {
  const key: 'in' | 'en' = lang === 'en' ? 'en' : 'in';
  return SLIDE_REGISTRY.map((entry) => {
    const SlideComponent = entry.Component;
    return {
      id: entry.index,
      slideNumber: entry.slideNumber,
      folder: entry.folder,
      sectionId: entry.meta.sectionId,
      title: entry.meta.headerTitle[key],
      navTitle: entry.meta.navTitle[key],
      category: entry.meta.category[key],
      section: entry.meta.section[key],
      component: React.createElement(SlideComponent, {
        slideNumber: entry.slideNumber,
        slideFolder: entry.folder,
        totalSlides: TOTAL_SLIDES,
      }),
      meta: entry.meta,
    };
  });
}

export interface SidebarStepItem {
  name: string;
  index: number;
  slideNumber: number;
  folder: string;
}

export interface SidebarSectionGroup {
  id: number;
  title: string;
  icon: LucideIcon;
  firstSlideIndex: number;
  steps: SidebarStepItem[];
}

/**
 * Menghasilkan struktur menu Sidebar secara dinamis dari SLIDE_REGISTRY.
 * Jika urutan slide berubah, dipindah, ditambah, atau dihapus di SLIDE_REGISTRY,
 * maka Sidebar otomatis menyesuaikan 100% tanpa risiko slide yatim/tidak sinkron.
 */
export function getSidebarSections(lang: Language | 'id' = 'in'): SidebarSectionGroup[] {
  const key: 'in' | 'en' = lang === 'en' ? 'en' : 'in';
  const groupsMap = new Map<number, SidebarSectionGroup>();

  SLIDE_REGISTRY.forEach((entry) => {
    const secId = entry.meta.sectionId;
    if (secId === 0) return; // Cover ditampilkan sebagai item utama di paling atas Sidebar

    const secDef = SECTION_CATALOG[secId] || SECTION_CATALOG[1];
    if (!groupsMap.has(secId)) {
      groupsMap.set(secId, {
        id: secId,
        title: secDef.title[key],
        icon: secDef.icon,
        firstSlideIndex: entry.index,
        steps: [],
      });
    }

    const group = groupsMap.get(secId)!;
    group.steps.push({
      name: entry.meta.navTitle[key],
      index: entry.index,
      slideNumber: entry.slideNumber,
      folder: entry.folder,
    });
  });

  return Array.from(groupsMap.values());
}

/**
 * Mengambil metadata slide cover (index 0 / sectionId 0) untuk tombol paling atas Sidebar
 */
export function getCoverSlideInfo(lang: Language | 'id' = 'in'): SidebarStepItem | null {
  const key: 'in' | 'en' = lang === 'en' ? 'en' : 'in';
  const coverEntry = SLIDE_REGISTRY.find((e) => e.meta.sectionId === 0) || SLIDE_REGISTRY[0];
  if (!coverEntry) return null;
  return {
    name: coverEntry.meta.navTitle[key],
    index: coverEntry.index,
    slideNumber: coverEntry.slideNumber,
    folder: coverEntry.folder,
  };
}
