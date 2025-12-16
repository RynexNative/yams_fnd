interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="fixed top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg flex items-center space-x-2">
      <span>{message}</span>
      <button onClick={onClose} className="font-bold">×</button>
    </div>
  );
}
