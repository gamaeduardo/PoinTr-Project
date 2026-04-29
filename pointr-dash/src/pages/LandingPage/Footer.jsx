import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {

    return (
        <footer className="bg-white/2 border-t border-white/5 pt-20 pb-10 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-bold italic tracking-tighter text-white mb-6">
                    PoinTr
                </div>
                <p className="text-secondary-text max-w-xs text-sm leading-relaxed">
                Transformando a relação entre empresas e colaboradores através de tecnologia e transparência.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Produto</h4>
                <ul className="text-secondary-text text-sm space-y-4">
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Integrações</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
                <ul className="text-secondary-text text-sm space-y-4">
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#2030be] transition-colors">Cookies</a></li>
                </ul>
            </div>
            </div>
            
            <div className="border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-secondary-text uppercase tracking-widest">
            <span>© 2026 POINTR.</span>
            <span>SÃO PAULO, BRASIL</span>
            </div>
        </footer>
    );
};

export default Footer;