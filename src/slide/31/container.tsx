import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapPin,
  RotateCcw,
  Plus,
  Minus,
  Navigation,
  Building2,
  Landmark,
  Store,
  Truck,
  Users,
  Briefcase,
  Layers,
  Compass,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  useSlideData,
  type SalesChannelCategory,
  type SalesMapPin,
} from './data';

const CATEGORY_COLORS: Record<SalesChannelCategory, string> = {
  b2b: '#dc2626',
  b2g: '#2563eb',
  retail: '#059669',
  distribution: '#d97706',
  kam: '#9333ea',
};

const CATEGORY_ICONS: Record<SalesChannelCategory, LucideIcon> = {
  b2b: Building2,
  b2g: Landmark,
  retail: Store,
  distribution: Truck,
  kam: Users,
};

const FOCUS_BOUNDS = L.latLngBounds([-6.72, 105.84], [-5.84, 107.58]);

function createPinIcon(category: SalesChannelCategory, isSelected: boolean): L.DivIcon {
  const color = CATEGORY_COLORS[category];
  const scale = isSelected ? 1.28 : 1;
  const ringOpacity = isSelected ? 0.36 : 0.16;

  return L.divIcon({
    className: 'leaflet-custom-marker',
    iconSize: [24, 30],
    iconAnchor: [12, 27],
    tooltipAnchor: [0, -27],
    html: `
      <div class="marker-pin-inner" style="position:relative;width:24px;height:30px;transform:scale(${scale});">
        <div style="position:absolute;left:50%;top:24px;width:16px;height:16px;transform:translate(-50%,-50%);border-radius:9999px;background:${color};opacity:${ringOpacity};"></div>
        <svg width="24" height="30" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;filter:drop-shadow(0 2px 5px rgba(15,23,42,0.35));">
          <path d="M14 1C7.37258 1 2 6.37258 2 13C2 21.5 14 34 14 34C14 34 26 21.5 26 13C26 6.37258 20.6274 1 14 1Z" fill="${color}" stroke="#ffffff" stroke-width="2.4"/>
          <circle cx="14" cy="13" r="4.5" fill="#ffffff"/>
        </svg>
      </div>
    `,
  });
}

export const Container: React.FC = () => {
  const { theme } = useTheme();
  const slideData = useSlideData();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<SalesChannelCategory | 'all'>('all');
  const [selectedPinId, setSelectedPinId] = useState<string>(slideData.pins[0]?.id ?? '');

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const baseTileLayerRef = useRef<L.TileLayer | null>(null);
  const refTileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const visiblePins = useMemo(() => {
    if (activeFilter === 'all') return slideData.pins;
    return slideData.pins.filter((pin) => pin.category === activeFilter);
  }, [activeFilter, slideData.pins]);

  const selectedPin: SalesMapPin | undefined = useMemo(() => {
    return (
      visiblePins.find((pin) => pin.id === selectedPinId) ||
      visiblePins[0] ||
      slideData.pins[0]
    );
  }, [visiblePins, selectedPinId, slideData.pins]);

  const selectedIndex = useMemo(() => {
    if (!selectedPin) return 0;
    const idx = visiblePins.findIndex((p) => p.id === selectedPin.id);
    return idx >= 0 ? idx : 0;
  }, [visiblePins, selectedPin]);

  // Keep selectedPinId synced when filter changes
  useEffect(() => {
    if (!visiblePins.some((p) => p.id === selectedPinId) && visiblePins[0]) {
      setSelectedPinId(visiblePins[0].id);
    }
  }, [visiblePins, selectedPinId]);

  // Initialize Leaflet Map once with strict focus corridor bounds
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [-6.23, 106.74],
      zoom: 9.5,
      minZoom: 9,
      maxZoom: 16,
      zoomSnap: 0.5,
      zoomDelta: 0.5,
      maxBounds: FOCUS_BOUNDS,
      maxBoundsViscosity: 1.0,
      zoomControl: false,
      attributionControl: false,
    });

    const markersLayer = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;
    markersLayerRef.current = markersLayer;

    const resizeTimer = window.setTimeout(() => {
      map.invalidateSize();
    }, 260);

    return () => {
      window.clearTimeout(resizeTimer);
      map.remove();
      mapInstanceRef.current = null;
      baseTileLayerRef.current = null;
      refTileLayerRef.current = null;
      markersLayerRef.current = null;
    };
  }, []);

  // Update clean native Light/Dark Gray Canvas + Reference map layers when theme changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (baseTileLayerRef.current) {
      map.removeLayer(baseTileLayerRef.current);
      baseTileLayerRef.current = null;
    }
    if (refTileLayerRef.current) {
      map.removeLayer(refTileLayerRef.current);
      refTileLayerRef.current = null;
    }

    const baseUrl = isDark
      ? 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
      : 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

    const refUrl = isDark
      ? 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
      : 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}';

    baseTileLayerRef.current = L.tileLayer(baseUrl, {
      maxNativeZoom: 16,
      maxZoom: 18,
    }).addTo(map);

    refTileLayerRef.current = L.tileLayer(refUrl, {
      maxNativeZoom: 16,
      maxZoom: 18,
    }).addTo(map);
  }, [isDark]);

  // Render pin markers whenever visiblePins or selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    visiblePins.forEach((pin) => {
      const isSelected = selectedPin?.id === pin.id;
      const marker = L.marker([pin.lat, pin.lng], {
        icon: createPinIcon(pin.category, isSelected),
        zIndexOffset: isSelected ? 600 : 100,
      });

      marker.bindTooltip(
        `<div style="background:${isDark ? '#0f172a' : '#ffffff'};color:${
          isDark ? '#f8fafc' : '#0f172a'
        };border:1px solid ${
          isDark ? '#334155' : '#e2e8f0'
        };border-radius:10px;padding:6px 10px;box-shadow:0 8px 20px rgba(15,23,42,0.18);font-size:11px;line-height:1.35;">
          <div style="font-weight:800;">${pin.name}</div>
          <div style="font-size:10px;opacity:0.75;">${pin.area}</div>
        </div>`,
        {
          direction: 'top',
          offset: [0, -4],
          className: 'leaflet-custom-tooltip',
          opacity: 1,
        }
      );

      marker.on('click', () => {
        setSelectedPinId(pin.id);
        map.flyTo([pin.lat, pin.lng], Math.max(map.getZoom(), 11), {
          duration: 0.45,
        });
      });

      marker.addTo(markersLayer);
    });
  }, [visiblePins, selectedPin?.id, isDark]);

  // Fit bounds when category filter changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || visiblePins.length === 0) return;

    const bounds = L.latLngBounds(visiblePins.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [24, 24], maxZoom: 12, animate: true });
  }, [activeFilter, visiblePins.length]);

  const handleResetView = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map || visiblePins.length === 0) return;
    const bounds = L.latLngBounds(visiblePins.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [24, 24], maxZoom: 12, animate: true });
  }, [visiblePins]);

  const handleStepPin = useCallback(
    (direction: -1 | 1) => {
      if (visiblePins.length === 0) return;
      const nextIdx = (selectedIndex + direction + visiblePins.length) % visiblePins.length;
      const nextPin = visiblePins[nextIdx];
      if (!nextPin) return;
      setSelectedPinId(nextPin.id);
      const map = mapInstanceRef.current;
      if (map) {
        map.flyTo([nextPin.lat, nextPin.lng], Math.max(map.getZoom(), 11), {
          duration: 0.45,
        });
      }
    },
    [selectedIndex, visiblePins]
  );

  const SelectedCategoryIcon = selectedPin ? CATEGORY_ICONS[selectedPin.category] : MapPin;
  const selectedCategoryColor = selectedPin ? CATEGORY_COLORS[selectedPin.category] : '#dc2626';
  const activeCategoryLabel = selectedPin
    ? slideData.categories.find((c) => c.id === selectedPin.category)?.label ||
      selectedPin.category.toUpperCase()
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header + Filter Tabs (Indicator + Text only, active card uses indicator color) */}
      <header className="flex flex-col gap-2 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {slideData.categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            const FilterIcon: LucideIcon =
              cat.id === 'all' ? Layers : CATEGORY_ICONS[cat.id];

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11.5px] sm:text-xs font-bold border transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/20 opacity-100'
                    : 'bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 opacity-65 hover:opacity-100 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FilterIcon size={13} className="shrink-0" aria-hidden="true" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Split: Clean Light/Dark Map (Left 8 cols) + Selected Pin Detail Panel (Right 4 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Left: Native Light/Dark Gray Map Canvas */}
        <div className="lg:col-span-8 relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-zinc-950 overflow-hidden shadow-xs min-h-[380px] sm:min-h-[430px]">
          <div ref={mapContainerRef} className="w-full h-[380px] sm:h-[430px] z-0" />

          {/* Top-Right Map Zoom & Reset Controls */}
          <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1.5">
            <button
              type="button"
              onClick={handleResetView}
              title={slideData.resetMapLabel}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 text-[10.5px] font-bold text-slate-800 dark:text-slate-100 shadow-sm hover:border-red-500/60 transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              <span className="hidden sm:inline">{slideData.resetMapLabel}</span>
            </button>
            <div className="flex flex-col rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden self-end">
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomIn()}
                aria-label="Zoom in"
                className="p-1.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border-b border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <Plus size={13} />
              </button>
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomOut()}
                aria-label="Zoom out"
                className="p-1.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <Minus size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Selected Pin Detail Information Panel */}
        <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between h-[380px] sm:h-[430px]">
          {selectedPin ? (
            <>
              <div className="space-y-3 overflow-y-auto pr-0.5">
                {/* Panel Eyebrow + Stepper */}
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Navigation
                      size={13}
                      style={{ color: selectedCategoryColor }}
                      className="shrink-0"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                      {slideData.selectedLabel}
                    </span>
                  </div>

                  {visiblePins.length > 1 && (
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleStepPin(-1)}
                        aria-label="Previous pin"
                        className="p-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={12} />
                      </button>
                      <span className="text-[10px] font-bold tabular-nums text-slate-500 dark:text-slate-400 px-1">
                        {selectedIndex + 1}/{visiblePins.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleStepPin(1)}
                        aria-label="Next pin"
                        className="p-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-pointer"
                      >
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Pin Title & Category Identity */}
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs"
                    style={{ backgroundColor: selectedCategoryColor }}
                  >
                    <SelectedCategoryIcon size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-bold uppercase tracking-wider">
                      <span style={{ color: selectedCategoryColor }}>
                        {activeCategoryLabel}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {selectedPin.statusTag}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                      {selectedPin.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {selectedPin.area}
                    </p>
                  </div>
                </div>

                {/* Structured Pin Details */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                    <div className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Briefcase size={11} className="shrink-0" />
                      <span>{slideData.roleLabel}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                      {selectedPin.picRole}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                    <div className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Layers size={11} className="shrink-0" />
                      <span>{slideData.focusLabel}</span>
                    </div>
                    <p
                      className="text-xs font-bold mt-1 leading-snug"
                      style={{ color: selectedCategoryColor }}
                    >
                      {selectedPin.focusProducts}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                    <div className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <MapPin size={11} className="shrink-0" />
                      <span>{slideData.coverageLabel}</span>
                    </div>
                    <p className="text-[11.5px] font-medium text-slate-700 dark:text-slate-200 mt-1 leading-relaxed">
                      {selectedPin.coverageNote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between px-1 pt-0.5 text-[10.5px]">
                    <span className="flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400">
                      <Compass size={11} />
                      {slideData.coordinatesLabel}
                    </span>
                    <span className="font-bold tabular-nums text-slate-700 dark:text-slate-300">
                      {selectedPin.lat.toFixed(4)}, {selectedPin.lng.toFixed(4)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[10px] font-normal text-slate-500 dark:text-slate-400 leading-snug shrink-0">
                {slideData.legendCaveat}
              </p>
            </>
          ) : null}
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
