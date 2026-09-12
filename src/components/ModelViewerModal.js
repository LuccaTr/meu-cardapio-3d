'use client';

export default function ModelViewerModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl overflow-hidden relative animate-fade-in">
        
        {/* Botão de Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center z-10 font-bold"
        >
          ✕
        </button>

        {/* Leitor 3D */}
        <div className="h-80 w-full bg-gray-50">
          <model-viewer
            src={dish.model3dGlb}
            ios-src={dish.model3dUsdz}
            alt={dish.name}
            ar
            camera-controls
            auto-rotate
            style={{ width: '100%', height: '100%' }}
          ></model-viewer>
        </div>

        <div className="p-4 bg-white">
          <h2 className="text-xl font-bold">{dish.name}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Gire o prato acima ou toque no ícone de cubo no canto do visualizador para projetar na sua mesa.
          </p>
        </div>
      </div>
    </div>
  );
}