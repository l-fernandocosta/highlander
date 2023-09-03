import { create } from "zustand";
import { ModalAction } from "./modal/action";
import { ModalState } from "./modal/state";

export const useCommandAddress = create<ModalState & ModalAction>((set) => ({
  isOpen: false,
  toggle: (isOpen) => set(() => ({isOpen})), 
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
}));
