import React from "react";
import { motion } from 'framer-motion';
import PoinTrLogo from "../assets/png/pointr_logo.png";

const LoadingScreen = ({ companyName }) => {

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-999 bg-main-bg flex flex-col items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-40 mb-8 relative z-10"
                >
                    <img src={PoinTrLogo} alt="Logo" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center flex flex-col items-center z-10"
                >
                    <h2 className="text-primary-text text-xl font-bold tracking-tight italic uppercase">
                        Acessando {companyName}
                    </h2>
                    <div className="mt-4 w-48 h-1 bg-main-border rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-accent"
                        />
                    </div>
                    <p className="text-secondary-text text-[10px] mt-4 uppercase tracking-[0.3em] font-medium opacity-50">
                        Sincronizando Painel...
                    </p>
                </motion.div>
            </div>

        </motion.div>
    )
};

export default LoadingScreen;