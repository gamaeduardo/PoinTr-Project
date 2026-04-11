import React from "react";

const FooterSettings = ({ onClose }) => {

    return (
        <div className="p-6 border-t border-slate-700 flex justify-end space-x-4 bg-[#080a1f]">
            <button onClick={onClose} className="px-6 py-2 cursor-pointer text-gray-400 hover:text-white transition font-medium">
                Cancelar
            </button>

            <button className="px-6 py-2 cursor-pointer bg-indigo-400 hover:bg-indigo-700 text-white rounded-lg transition font-bold">
                Salvar Alterações
            </button>
        </div>
    );
};

export default FooterSettings;