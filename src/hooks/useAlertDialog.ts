import { create } from 'zustand';

interface alertDialogProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useAlertDialog = create<alertDialogProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))