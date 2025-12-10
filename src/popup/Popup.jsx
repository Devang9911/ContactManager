import { usePopup } from "../hooks/usePopup";

const Popup = () => {
    const { popup, hidePopup } = usePopup();

    if (!popup.visible) return null;

    return (
        <>
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes popupZoom {
                    0% { transform: scale(0.85); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .fade-in {
                    animation: fadeIn 0.25s ease-out;
                }
                .popup-zoom {
                    animation: popupZoom 0.25s ease-out;
                }
                `}
            </style>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-9999 animate-fadeIn">
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 w-[320px] text-center scale-95 animate-popup">

                    <h2 className="font-semibold text-2xl text-gray-800 mb-3">
                        {popup.title}
                    </h2>

                    <p className="text-gray-600 mb-5 leading-relaxed">
                        {popup.message}
                    </p>

                    <button
                        className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                        onClick={hidePopup}
                    >
                        OK
                    </button>

                </div>
            </div>
        </>
    );
};

export default Popup;
