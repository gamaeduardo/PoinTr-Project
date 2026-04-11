import React from "react";
import StatCard from "../Components/StatCard";
import Gerar from "../assets/png/gerar.png";
import Header from "../Components/Header";
import ChartWrapper from "../Components/ChartWrapper";
import WorkProgressWidget from "../Components/widgets-dashboard/WorkProgressWidget";
import TotalHoursWidget from "../Components/widgets-dashboard/TotalHoursWidget";
import TeamMembersWidget from "../Components/widgets-dashboard/TeamMembersWidget";
import LaborCostWidget from "../Components/widgets-dashboard/LaborCostWidget";
import AbsentWidget from "../Components/widgets-dashboard/AbsentWidget";
import ProjectDeadlineWidget from "../Components/widgets-dashboard/ProjectDeadlineWidget";
import WorkIntensityWidget from "../Components/widgets-dashboard/WorkIntensityWidget";
import EfficiencyScoreWidget from "../Components/widgets-dashboard/EfficiencyScoreWidget";
import SecurityAuditWidget from "../Components/widgets-dashboard/SecurityAuditWidget";
import SentimentPulseWidget from "../Components/widgets-dashboard/SentimentPulseWidget";

const GeralContent = ({ onSearchClick }) => {

    const dadosDashboard = {
        totalHoras: 142,
        membrosOnline: [
            { id: 1, name: "Arlee St. Hill", role: "Designer", online: true },
            { id: 2, name: "João Silva", role: "Dev", online: false }
        ]
    };

    // Exemplo de como o SecurityAudir vai receber os logs
    const logsExemplo = [
        {
            id: 1,
            type: 'warning',
            event: 'Tentativa de login fora do horário permitido',
            time: 'Há 5 min',
            user: 'marcos.silva (IP: 192.168.1.45)',
        },
        {
            id: 2,
            type: 'info',
            event: 'Novo dispositivo móvel pareado à conta',
            time: 'Há 12 min',
            user: 'ana.clara (iPhone 15)',
        },
        {
            id: 3,
            type: 'warning',
            event: 'Acesso negado: Tentativa de editar folha de pagamento',
            time: 'Há 1h',
            user: 'rodrigo.adm (Permissão insuficiente)',
        },
        {
            id: 4,
            type: 'info',
            event: 'Backup automático do sistema concluído',
            time: 'Há 3h',
            user: 'Sistema PoinTr',
        }
    ];

    return (
        <main className="w-full p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Painel Geral" onSearchClick={onSearchClick}/>
            
            <div className="p-8">
                <div className="grid grid-cols-12 gap-6">
                    
                    <TotalHoursWidget 
                        totalHoras={dadosDashboard.totalHoras} 
                        className="col-span-12 md:col-span-6 lg:col-span-3"
                    />

                    <TotalHoursWidget 
                        totalHoras={5} 
                        className="col-span-12 md:col-span-6 lg:col-span-3"
                    />

                    <WorkProgressWidget 
                        className="col-span-12 lg:col-span-6" 
                    />

                    <TeamMembersWidget 
                        members={dadosDashboard.membrosOnline}
                        className="col-span-12 md:col-span-3" 
                    />

                    <WorkProgressWidget 
                        className="col-span-12 lg:col-span-9" 
                    />

                    <LaborCostWidget 
                        cost={45300}
                        className="col-span-15 md:col-span-6" 
                    />

                    <AbsentWidget
                        rate={10}
                        className="col-span-15 md:col-span-6" 
                    />

                    <ProjectDeadlineWidget 
                        projectName="PoinTr"
                        percentage={80}
                        className="col-span-15 md:col-span-4" 
                    />

                    <WorkIntensityWidget
                        className="col-span-15 md:col-span-8" 
                    />


                    <SentimentPulseWidget
                        className="col-span-15 md:col-span-7" 
                    />
                    <EfficiencyScoreWidget
                        score={15}
                        className="col-span-15 md:col-span-5" 
                    />

                    <SecurityAuditWidget
                        logs={logsExemplo}
                        className="col-span-15 md:col-span-7" 
                    />


                </div>
            </div>
        </main>
    );
};

export default GeralContent;