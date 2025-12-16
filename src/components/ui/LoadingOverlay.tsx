export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-white border-t-transparent"></div>
    </div>
  );
}
