import { create } from 'zustand';

interface SheetProps {
    isSheetOpen: boolean;
    onSheetOpen: () => void;
    onSheetClose: () => void;
}

export const useSheet = create<SheetProps>((set) => ({
    isSheetOpen: false,
    onSheetOpen: () => set({ isSheetOpen: true }),
    onSheetClose: () => set({ isSheetOpen: false })
}))