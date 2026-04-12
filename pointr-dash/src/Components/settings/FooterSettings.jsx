import React from "react";

const FooterSettings = ({ onClose }) => {

    return (
        <div className="p-6 border-t z-100 border-main-border flex justify-end space-x-4 bg-sidebar-primary">
            <button onClick={onClose} className="px-6 py-2 cursor-pointer text-primary-text hover:text-accent transition font-medium">
                Cancelar
            </button>

            <button className="px-6 py-2 cursor-pointer bg-accent hover:bg-accent-hover text-white rounded-lg transition font-bold">
                Salvar Alterações
            </button>
        </div>
    );
};

export default FooterSettings;