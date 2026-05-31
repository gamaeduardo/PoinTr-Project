import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiLogIn, FiArrowRight, FiCheck } from 'react-icons/fi';
import useCompanyStore from '../store/useCompanyStore';
import api from '../services/api';

const AddCompanyModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('selection');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { gestor, companies, setCompanies } = useCompanyStore();

  const [formData, setFormData] = useState({
    nome_empresa: '',
    cnpj: '',
    telefone: '',
    email: '',
    color: '#6366f1'
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/empresas', {
        id_gestor: gestor.id_gestor,
        nome_empresa: formData.nome_empresa,
        cnpj: formData.cnpj,
        telefone: formData.telefone,
        email: formData.email,
      });

      // adiciona a nova empresa na lista do store
      setCompanies([...companies, { ...response.data, color: formData.color }]);
      onClose();
      setStep('selection');
      setFormData({ nome_empresa: '', cnpj: '', telefone: '', email: '', color: '#6366f1' });
    } catch (e) {
      if (e.response?.status === 409) {
        setError('CNPJ já cadastrado.');
      } else if (e.response?.status === 400) {
        setError('Preencha os campos obrigatórios.');
      } else {
        setError('Erro ao criar empresa.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-card-primary border border-main-border w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-5 border-b border-main-border flex justify-between items-center bg-main-bg/30">
              <h2 className="text-xl font-bold tracking-tight text-white">
                {step === 'selection' ? 'Nova Organização' : step === 'create' ? 'Configurar Empresa' : 'Entrar em Empresa'}
              </h2>
              <button onClick={onClose} className="p-2 cursor-pointer hover:bg-white/5 rounded-full text-secondary-text transition-colors">
                <FiX size={20} />
              </button>
            </div>

            <div className="p-8">

              {step === 'selection' && (
                <div className="grid gap-4">
                  <button
                    onClick={() => setStep('create')}
                    className="flex cursor-pointer items-center p-6 bg-accent/10 border border-accent/20 rounded-3xl group hover:bg-accent transition-all duration-300"
                  >
                    <div className="p-4 bg-accent rounded-2xl text-white group-hover:bg-white group-hover:text-accent transition-colors">
                      <FiPlus size={24} />
                    </div>
                    <div className="text-left ml-4">
                      <p className="font-bold text-white">Criar Nova Empresa</p>
                      <p className="text-xs text-secondary-text group-hover:text-white/80">Fundar um novo ambiente de gestão.</p>
                    </div>
                    <FiArrowRight className="ml-auto text-accent group-hover:text-white" />
                  </button>

                  <button
                    onClick={() => setStep('join')}
                    className="flex cursor-pointer items-center p-6 bg-white/5 border border-main-border rounded-3xl group hover:border-white/20 transition-all"
                  >
                    <div className="p-4 bg-slate-800 rounded-2xl text-gray-400 group-hover:text-white transition-colors">
                      <FiLogIn size={24} />
                    </div>
                    <div className="text-left ml-4">
                      <p className="font-bold text-white">Entrar em Existente</p>
                      <p className="text-xs text-secondary-text">Usar um código de convite enviado.</p>
                    </div>
                    <FiArrowRight className="ml-auto text-secondary-text" />
                  </button>
                </div>
              )}

              {step === 'create' && (
                <form onSubmit={handleCreate} className="space-y-5">
                  {error && (
                    <p className="text-red-400 text-xs font-bold bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                      {error}
                    </p>
                  )}

                  <div>
                    <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">
                      Nome da Empresa *
                    </label>
                    <input
                      required
                      className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white focus:border-accent outline-none transition-all"
                      placeholder="Ex: Supcom Enterprise"
                      value={formData.nome_empresa}
                      onChange={(e) => setFormData({ ...formData, nome_empresa: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">
                      CNPJ *
                    </label>
                    <input
                      required
                      className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white focus:border-accent outline-none transition-all"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">
                        Telefone
                      </label>
                      <input
                        className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white focus:border-accent outline-none transition-all"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white focus:border-accent outline-none transition-all"
                        placeholder="contato@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">
                      Cor de Identidade
                    </label>
                    <div className="flex gap-3 py-1">
                      {['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6'].map(c => (
                        <button
                          key={c} type="button"
                          onClick={() => setFormData({ ...formData, color: c })}
                          className={`w-8 h-8 cursor-pointer rounded-full border-2 transition-transform ${formData.color === c ? 'scale-125 border-white' : 'border-transparent'}`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-main-border flex gap-3">
                    <button type="button" onClick={() => setStep('selection')} className="flex-1 cursor-pointer py-4 text-secondary-text font-bold text-sm">
                      Voltar
                    </button>
                    <button type="submit" disabled={loading} className="flex-1 cursor-pointer bg-accent py-4 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-50">
                      <FiCheck /> {loading ? 'Salvando...' : 'Concluir Cadastro'}
                    </button>
                  </div>
                </form>
              )}

              {step === 'join' && (
                <div className="space-y-8">
                  <p className="text-secondary-text text-sm text-center px-6">
                    Digite o código enviado pelo seu administrador para se vincular à organização.
                  </p>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <input
                        key={i} type="text" maxLength="1"
                        className="w-12 h-14 bg-main-bg border border-main-border rounded-xl text-center text-xl font-bold text-white focus:border-accent outline-none transition-all"
                      />
                    ))}
                  </div>
                  <button onClick={() => { onClose(); setStep('selection'); }} className="w-full cursor-pointer bg-accent py-4 rounded-2xl text-white font-bold text-sm">
                    Verificar Código
                  </button>
                  <button onClick={() => setStep('selection')} className="w-full cursor-pointer py-2 text-[10px] uppercase tracking-widest font-bold text-secondary-text hover:text-white transition-colors">
                    Voltar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddCompanyModal;