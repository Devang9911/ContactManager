import { useState, useEffect } from "react";
import { useUpdatePop } from "../hooks/useUpdatePop";
import { useContact } from "../hooks/useContact";

const UpdatePop = () => {

    const {updateState , closeUpdatePop} = useUpdatePop();
    const {updateContact} = useContact();
    const contact = updateState.contact;

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        if (contact) {
            setName(contact.name || "");
            setNumber(contact.number || "");
        }
    }, [contact]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedContact = {
            id : contact.id,
            name,
            number
        };

        await updateContact(updatedContact);
        closeUpdatePop();
    }

    if (!updateState.visible) return null;

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

            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-9999 fade-in">
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 w-[340px] text-center popup-zoom">

                    <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                        Update Contact
                    </h2>

                    <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter number"
                            className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                        >
                            Update
                        </button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default UpdatePop;
