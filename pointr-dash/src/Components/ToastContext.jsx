import React, { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    // Função global acessível de qualquer componente
    const addToast = (mensagem, tipo = "sucesso") => {
        const novoToast = {
            id: Date.now() + Math.random(),
            mensagem,
            tipo
        };
        
        setToasts((toastsAntigos) => [...toastsAntigos, novoToast]);
    };

    const removerToast = (id) => {
        setToasts((toastsAntigos) => toastsAntigos.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            
            
            <div className="fixed top-6 right-6 z-9999 flex flex-col gap-3 pointer-events-none max-w-full">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast 
                            key={toast.id} 
                            {...toast} 
                            aoFechar={removerToast} 
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast deve ser utilizado dentro de um ToastProvider");
    }
    return context;
};

export default ToastContext;