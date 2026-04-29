import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, FiShield, FiZap, FiTarget, 
  FiCheckCircle, FiTrendingUp, FiLock, FiGlobe, FiCpu, FiLayers 
} from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';

// Animação padronizada de aparecer ao scrollar
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Ease-out (mais style, testar com outras opções)
};

const LandingPage = () => {
  // Scroll suave
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="bg-[#01011a] min-h-screen text-white selection:bg-[#2030be] selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="relative mt-16 pt-40 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-[#2030be]/10 blur-[120px] rounded-full -z-10" />
        
        <motion.span 
          {...fadeInUp}
          className="text-[#3144e8] text-[11px] font-black uppercase tracking-[0.4em] mb-8"
        >
          Inteligência em Gestão de Ponto
        </motion.span>

        <motion.h1 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black italic tracking-normal leading-tight md:leading-[1.1] mb-12"
        >
          O TEMPO É UM RECURSO <br /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2030be] to-[#0944c3]">
            NÓS SOMOS O SEU <br /> VEREDITO
          </span>
        </motion.h1>

        <motion.p 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="max-w-3xl text-gray-400 text-lg mb-12 font-medium"
        >
          Enquanto outros se perdem em planilhas e erros humanos, você governa com dados
          inquestionáveis. O PoinTr não é para quem busca ajuda, é para quem exige o controle
          absoluto da sua própria estrutura.
        </motion.p>

        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="flex gap-4 mb-48"
        >
          <button className="px-10 py-5 cursor-pointer bg-[#3144e8] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(99,102,241,0.3)] flex items-center gap-3">
            Começar Agora <FiArrowRight />
          </button>
          <button className="px-10 py-5 cursor-pointer bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all">
            Ver Demonstração
          </button>
        </motion.div>

        {/* Mockups do Dashboard (Fazer um carrousel) */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative w-full max-w-6xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#050510]/40 backdrop-blur-sm"
        >
          <img 
            src="https://imgs.search.brave.com/0vbrPjN4ss7NgLeiYyEHV2sR9DML-y1996x7v9AdP1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NDIxOTEwNC9wdC9m/b3RvL3N0b2NrLXRy/YWRpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWtlRlBP/b0lmdmY2SVd5czVH/Q1Jfb0xIbDNGYVRO/YWtOZmRDWVh1LUw1/Z009" 
            alt="PoinTr Dashboard Preview" 
            className="w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#01011a] via-transparent to-transparent" />
        </motion.div>
      </section>

      <div className="py-16 border-y border-white/5 opacity-30 grayscale overflow-hidden flex gap-20 whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {[1, 2, 3, 4, 5, 6].map(i => (
            <span key={i} className="text-4xl font-black italic uppercase tracking-tighter mx-10">
              PALAVRA_{i}
            </span>
          ))}
          {/* Duplicado para loop infinito */}
          {[1, 2, 3, 4, 5, 6].map(i => (
            <span key={`dup-${i}`} className="text-4xl font-black italic uppercase tracking-tighter mx-10">
              CLIENTE_{i}
            </span>
          ))}
        </motion.div>
      </div>


      <section id="features" className="py-48 px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
            RECURSOS DE <span className="text-[#2030be]">ALTA PERFORMANCE</span>
          </h2>
          <p className="text-gray-500 text-sm uppercase font-bold tracking-[0.4em]">Tecnologia nativa para escalar sua operação</p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <motion.div {...fadeInUp} className="col-span-12 lg:col-span-8 bg-white/3 border border-white/10 p-12 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 text-[#2030be]/5 group-hover:text-[#2030be]/10 transition-colors duration-700">
              <FiZap size={300} />
            </div>
            <div className="relative z-10">
              <FiShield className="text-[#2030be] mb-8" size={40} />
              <h3 className="text-3xl font-black italic uppercase mb-6">Auditoria Blindada</h3>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                Algoritmos de IA que detectam inconsistências, fraudes e padrões de comportamento em tempo real, garantindo conformidade absoluta.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay: 0.1}} className="col-span-12 lg:col-span-4 bg-[#2030be] p-12 rounded-[3rem] flex flex-col justify-between text-white shadow-2xl shadow-[#2030be]/20">
            <FiTarget size={50} />
            <div>
              <h3 className="text-3xl font-black italic uppercase mb-4 leading-tight">Geofencing & Biometria</h3>
              <p className="text-white/70 text-sm font-medium leading-relaxed">
                Cerca virtual e reconhecimento facial para garantir que o registro seja feito no local exato e pela pessoa certa.
              </p>
            </div>
          </motion.div>


          {[
            { icon: FiGlobe, title: "Multi-Region", desc: "Suporte a fusos horários globais e múltiplas filiais sem latência." },
            { icon: FiCpu, title: "API First", desc: "Integração total com ERPs e softwares de folha via Webhooks." },
            { icon: FiLayers, title: "Analytics", desc: "Relatórios customizáveis e dashboards cinematográficos em real-time." }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              {...fadeInUp}
              transition={{...fadeInUp.transition, delay: index * 0.1}}
              className="col-span-12 md:col-span-4 bg-white/2 border border-white/5 p-10 rounded-[2.5rem] hover:border-[#2030be]/50 transition-all group"
            >
              <item.icon className="text-[#2030be] mb-8 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black italic uppercase mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="pricing" className="py-48 px-8 bg-white/1 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div {...fadeInUp} className="lg:pr-12">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-8 leading-[1.1]">
              PLANOS QUE <br /> <span className="text-[#2030be]">EVOLUEM</span> COM VOCÊ
            </h2>
            <p className="text-gray-400 text-lg">
              Transparência total. Sem taxas ocultas, sem surpresas no final do mês.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay: 0.1}} className="bg-white/4 border-2 border-[#2030be] p-12 rounded-[3rem] relative shadow-2xl shadow-[#2030be]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2030be] text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full">
              Mais Popular
            </div>
            <span className="text-[11px] font-black uppercase text-gray-500 tracking-widest">Plano Corporativo</span>
            <div className="my-8">
              <span className="text-6xl font-black italic">R$ 59</span>
              <span className="text-gray-500 font-bold text-lg">/mês</span>
            </div>
            <ul className="space-y-5 mb-10 text-gray-400 font-medium">
              <li className="flex items-center gap-4"><FiCheckCircle className="text-[#2030be]" /> Usuários Ilimitados</li>
              <li className="flex items-center gap-4"><FiCheckCircle className="text-[#2030be]" /> Auditoria com IA</li>
              <li className="flex items-center gap-4"><FiCheckCircle className="text-[#2030be]" /> Suporte 24/7</li>
            </ul>
            <button className="w-full py-5 cursor-pointer bg-[#2030be] text-white text-[11px] font-black uppercase hover:opacity-90 transition tracking-[0.2em] rounded-2xl">Assinar Agora</button>
          </motion.div>

          <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay: 0.2}} className="bg-transparent border border-white/10 p-12 rounded-[3rem]">
            <span className="text-[11px] font-black uppercase text-gray-500 tracking-widest">Gratuito</span>
            <div className="my-8">
              <span className="text-6xl font-black italic">R$ 0</span>
              <span className="text-gray-500 font-bold text-lg">/mês</span>
            </div>
            <ul className="space-y-5 mb-10 text-gray-500">
              <li className="flex items-center gap-4">• Até 5 funcionários</li>
              <li className="flex items-center gap-4">• Registros básicos</li>
              <li className="flex items-center gap-4">• Dashboard padrão</li>
            </ul>
            <button className="w-full py-5 cursor-pointer border border-white/10 text-white text-[11px] font-black uppercase hover:bg-white/5 transition tracking-[0.2em] rounded-2xl">Começar Grátis</button>
          </motion.div>
        </div>
      </section>


      <section className="py-60 px-8 text-center">
        <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-24">
          DADOS QUE <span className="text-[#2030be]">MOLDAM</span> O TOPO
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-6xl mx-auto">
            {[
              { val: "99%", label: "Precisão de Auditoria" },
              { val: "+10M", label: "Pontos Registrados", delay: 0.2 },
              { val: "-40%", label: "Custos Operacionais", delay: 0.4 }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: stat.delay || 0 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-8xl md:text-9xl font-black italic ${i % 2 === 0 ? 'text-[#2030be]' : 'text-white'} mb-6 tracking-tighter`}>
                  {stat.val}
                </h3>
                <p className="text-[12px] font-black uppercase tracking-[0.6em] text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
        </div>
      </section>

      <section className="py-40 space-y-80 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <span className="text-[#2030be] font-black text-xs uppercase tracking-[0.4em] mb-8 block">// 01 AUDITORIA INTELIGENTE</span>
                <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-10 leading-none">
                    DETECÇÃO EM <span className="text-[#2030be]">REAL-TIME</span>
                </h2>
                <p className="text-secondary-text text-xl leading-relaxed mb-12">
                    Nossa IA analisa padrões de marcação, geolocalização e biometria para garantir que cada segundo registrado seja legítimo.
                </p>
                <div className="grid grid-cols-2 gap-6 text-sm font-black uppercase tracking-widest">
                    <div className="flex items-center gap-3"><FiCheckCircle className="text-[#2030be]"/> Biometria Facial</div>
                    <div className="flex items-center gap-3"><FiCheckCircle className="text-[#2030be]"/> GPS Fencing</div>
                </div>
            </motion.div>
            <div className="aspect-square bg-card-primary/30 border border-main-border rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
                <FiShield size={200} className="text-[#2030be]/10 group-hover:text-[#2030be]/20 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-tr from-[#2030be]/5 to-transparent" />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 aspect-square bg-[#2030be]/5 border border-[#2030be]/20 rounded-[4rem] flex items-center justify-center">
                <FiTrendingUp size={150} className="text-[#2030be] animate-pulse" />
            </div>
            <motion.div className="order-1 lg:order-2" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <span className="text-[#2030be] font-black text-xs uppercase tracking-[0.4em] mb-8 block">// 02 ANALYTICS DE PERFORMANCE</span>
                <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-10 leading-none">
                    DADOS QUE <span className="text-[#2030be]">DITAM</span> O FUTURO
                </h2>
                <p className="text-secondary-text text-xl leading-relaxed mb-12">
                    Transforme horas trabalhadas em insights acionáveis. Veja a eficiência das equipes em dashboards cinematográficos.
                </p>
                <button className="flex items-center gap-4 cursor-pointer text-sm font-bold uppercase tracking-wider hover:text-[#3144e8] transition-colors">
                    Explorar Dashboards <FiArrowRight />
                </button>
            </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA (Melhorar com alguma animação chamativa, bem como na cta inicial) --- */}
      <section className="py-64 px-8 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#2030be]/20 blur-[120px] rounded-full -z-10" />
        <motion.h2 
          {...fadeInUp}
          className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white mb-16 leading-none"
        >
          O FUTURO É AGORA <br /> <span className="text-[#2030be]">VOCÊ VEM?</span>
        </motion.h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-20 py-8 cursor-pointer bg-[#2030be] text-white text-[14px] font-black uppercase tracking-[0.4em] rounded-full shadow-2xl shadow-[#2030be]/40"
        >
          INICIAR EXPERIÊNCIA
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;