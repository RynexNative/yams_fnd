interface Toast {
  message: string;
  type?: "success" | "error" | "info";
}

interface UIState {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  clearToast: () => void;
}
