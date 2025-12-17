import { useEffect } from "react";
import { useUIStore } from "@/store/ui.store";

export default function Toast() {
  const toastMessage = useUIStore((s) => s.toastMessage);
  const clearToast = useUIStore((s) => s.clearToast);

  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      clearToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="rounded-xl bg-slate-900 text-white px-4 py-3 shadow-lg text-sm">
        {toastMessage}
      </div>
    </div>
  );
}
