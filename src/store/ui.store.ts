import { create } from "zustand";

interface UIState {
  /** Sidebar collapse/expand */
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;

  /** Global modal */
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  /** Global loading overlay */
  loading: boolean;
  setLoading: (value: boolean) => void;

  /** Toast notification */
  toastMessage: string | null;
  setToast: (message: string) => void;
  clearToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),

  loading: false,
  setLoading: (value: boolean) => set({ loading: value }),

  toastMessage: null,
  setToast: (message: string) => set({ toastMessage: message }),
  clearToast: () => set({ toastMessage: null }),
}));
