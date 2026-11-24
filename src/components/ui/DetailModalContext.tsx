import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import DetailModal, { DetailModalItem, DetailModalProps } from './DetailModal';

interface OpenModalOptions {
  size?: DetailModalProps['size'];
}

interface DetailModalContextType {
  isOpen: boolean;
  openModal: (item: DetailModalItem, options?: OpenModalOptions) => void;
  openModalGroup: (items: DetailModalItem[], initialIndex?: number, options?: OpenModalOptions) => void;
  closeModal: () => void;
}

const DetailModalContext = createContext<DetailModalContextType | undefined>(undefined);

export const DetailModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [item, setItem] = useState<DetailModalItem | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [size, setSize] = useState<DetailModalProps['size']>('lg');

  const openModal = useCallback((selectedItem: DetailModalItem, options?: OpenModalOptions) => {
    setItem(selectedItem);
    setSize(options?.size || 'lg');
    setIsOpen(true);
  }, []);

  const openModalGroup = useCallback(
    (groupItems: DetailModalItem[], initialIndex: number = 0, options?: OpenModalOptions) => {
      if (!groupItems || groupItems.length === 0) return;
      const safeIndex = Math.max(0, Math.min(initialIndex, groupItems.length - 1));
      setItem(groupItems[safeIndex]);
      setSize(options?.size || 'lg');
      setIsOpen(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DetailModalContext.Provider
      value={{
        isOpen,
        openModal,
        openModalGroup,
        closeModal,
      }}
    >
      {children}
      <DetailModal
        isOpen={isOpen}
        onClose={closeModal}
        item={item}
        size={size}
      />
    </DetailModalContext.Provider>
  );
};

export const useDetailModal = () => {
  const context = useContext(DetailModalContext);
  if (!context) {
    throw new Error('useDetailModal must be used within a DetailModalProvider');
  }
  return context;
};
