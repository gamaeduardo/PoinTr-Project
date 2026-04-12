import React from "react";
import StatCard from "../Components/StatCard";
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
import TopPerformerWidget from "../Components/widgets-dashboard/TopPerformerWidget";
import ActiveNowWidget from "../Components/widgets-dashboard/ActiveNowWidget";
import DepartmentSplitWidget from "../Components/widgets-dashboard/DepartmentSplitWidget";
import OvertimeAlertWidget from "../Components/widgets-dashboard/OvertimeAlertWidget";
import IdleAlertWidget from "../Components/widgets-dashboard/IdleAlertWidget";
import ShiftCoverageWidget from "../Components/widgets-dashboard/ShiftCoverageWidget";
import LateArrivalsWidget from "../Components/widgets-dashboard/LateArrivalsWidget";
import WorkloadbalanceWidget from "../Components/widgets-dashboard/WorkloadBalanceWidget";
import DeviceTypeWidget from "../Components/widgets-dashboard/DeviceTypeWidget";
import BreakTimeWidget from "../Components/widgets-dashboard/BreakTimeWidget";
import GeofecingAlertWidget from "../Components/widgets-dashboard/GeofencingAlertWidget";
import WeeklyTrendWidget from "../Components/widgets-dashboard/WeeklyTrendWidget";
import HolidayForecastWidget from "../Components/widgets-dashboard/HolidayForecastWidget";
import SummerLiabilityWidget from "../Components/widgets-dashboard/SummerLiabilityWidget";
import SystemHealthWidget from "../Components/widgets-dashboard/SystemHealthWidget";
import ContractEndWidget from "../Components/widgets-dashboard/ContractEndWidget";
import ManualAdjustmentWidget from "../Components/widgets-dashboard/ManualAdjustmentWidget";
import MissingCheckOutWidget from "../Components/widgets-dashboard/MissingCheckOutWidget";
import TurnoverRateWidget from "../Components/widgets-dashboard/TurnoverRateWidget";
import TopOvertimeTableWidget from "../Components/widgets-dashboard/TopOvertimeTableWidget";
import DepartmentCostTableWidget from "../Components/widgets-dashboard/DepartmentCostTableWidget";
import MissingDocsTableWidget from "../Components/widgets-dashboard/MissingDocsTableWidget";
import WeeklyShiftTableWidget from "../Components/widgets-dashboard/WeeklyShiftTableWidget";
import HolidayImpactTableWidget from "../Components/widgets-dashboard/HolidayImpactTableWidget";
import ManualAdjustTableWidget from "../Components/widgets-dashboard/ManualAdjustTableWidget";
import EmployeeStatusTableWidget from "../Components/widgets-dashboard/EmployeeStatusTableWidget";
import ContractRenewalTableWidget from "../Components/widgets-dashboard/ContractRenewalTableWidget";
import AnomaliesTableWidget from "../Components/widgets-dashboard/AnomaliesTableWidget";
import PageFilters from "../Components/PageFilters";
import WeeklyActivityChart from "../Components/widgets-dashboard/WeeklyActivityChart";
import DepartmentDistributionChart from "../Components/widgets-dashboard/DepartmentDistributionChart";
import AbsenceTrendChart from "../Components/widgets-dashboard/AbsenceTrendChart";
import LaborCostRadialChart from "../Components/widgets-dashboard/LaborCostRadialChart";
import PeakHoursHeatmapChart from "../Components/widgets-dashboard/PeakHoursHeatmapChart";
import TurnoverMonthlyChart from "../Components/widgets-dashboard/TurnoverMonthlyChart";
import EfficiencyBubbleChart from "../Components/widgets-dashboard/EfficiencyBubbleChart";

const GeralContent = ({ onSearchClick }) => {

    const filters = [
        { id: 'all', label: 'Visão Geral' },
        { id: 'finance', label: 'Financeiro' },
        { id: 'operation', label: 'Operacional' },
        { id: 'hr', label: 'Recursos Humanos' },
        { id: 'security', label: 'Segurança' },
        { id: 'compliance', label: 'Compliance' },
    ];

    const dadosDashboard = {
        totalHoras: 1240,
        custoMensal: 45200,
        taxaAbsenteismo: 4.2,
        scoreEficiencia: 88,
        projetoAtivo: { name: "Expansão Sede Norte", progress: 65 },
        membrosOnline: [
            { id: 1, name: "Ronaldinho Gaúcho", role: "Designer", online: true },
            { id: 2, name: "Ronaldo Fenomeno", role: "Marketing", online: true },
            { id: 3, name: "Cristiano Ronaldo", role: "Dev", online: false },
        ],
        alertasExtras: [
            { id: 1, userName: 'Lucas Moura', amount: 2.5 },
            { id: 2, userName: 'Alexandre Pato', amount: 4.0 },
        ],
        performerDoMes: {
            name: "Cristiano Ronaldo",
            hours: 172,
            avatar: "https://ui-avatars.com/api/?name=Cristiano+Ronaldo&background=6366f1&color=fff"
        },
        logsSeguranca: [
            { id: 1, type: 'warning', event: 'Tentativa de login (IP: 192.168.1.45)', time: 'Há 5 min', user: 'marcos.silva' },
            { id: 2, type: 'info', event: 'Backup automático concluído', time: 'Há 3h', user: 'Sistema PoinTr' },
        ]
    };

    return (
        <main className="w-full p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Painel Geral" onSearchClick={onSearchClick}/>

            <PageFilters options={filters} />
            
            <div className="p-8">
                <div className="grid grid-cols-12 gap-6">

                    {/* Fazer Dicionário ou Matriz de Widgets */}
                    
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
                        rate={dadosDashboard.taxaAbsenteismo}
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
                        logs={dadosDashboard.logsSeguranca}
                        className="col-span-15 md:col-span-7" 
                    />

                    <DepartmentSplitWidget 
                        className="col-span-12 md:col-span-6 lg:col-span-4"
                    />

                    <OvertimeAlertWidget 
                        alerts={dadosDashboard.alertasExtras}
                        className="col-span-12 md:col-span-6 lg:col-span-4"
                    />

                    <IdleAlertWidget 
                        count={8}
                        className="col-span-12 md:col-span-4 lg:col-span-3"
                    />

                    <TopPerformerWidget
                        performer={dadosDashboard.performerDoMes}
                        className="col-span-12 md:col-span-4"
                    />

                    <ActiveNowWidget
                        members={dadosDashboard.membrosOnline}
                        className="col-span-12 md:col-span-4"
                    />

                    <ShiftCoverageWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <LateArrivalsWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <WorkloadbalanceWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <DeviceTypeWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <BreakTimeWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <GeofecingAlertWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <WeeklyTrendWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <HolidayForecastWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <SummerLiabilityWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <SystemHealthWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <ContractEndWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <ManualAdjustmentWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <MissingCheckOutWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <TurnoverRateWidget
                        rate={15}
                        className="col-span-12 md:col-span-4"
                    />

                    <TopOvertimeTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <DepartmentCostTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <MissingDocsTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <WeeklyShiftTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <HolidayImpactTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <ManualAdjustTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <EmployeeStatusTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <ContractRenewalTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <AnomaliesTableWidget
                        className="col-span-12 md:col-span-4"
                    />

                    <WeeklyActivityChart
                        className="col-span-12 md:col-span-4"
                    />

                    <DepartmentDistributionChart
                        className="col-span-12 md:col-span-4"
                    />

                    <AbsenceTrendChart
                        className="col-span-12 md:col-span-4"
                    />

                    <LaborCostRadialChart
                        className="col-span-12 md:col-span-4"
                    />

                    <PeakHoursHeatmapChart
                        className="col-span-12 md:col-span-4"
                    />

                    <TurnoverMonthlyChart
                        className="col-span-12 md:col-span-4"
                    />

                    <EfficiencyBubbleChart
                        className="col-span-12 md:col-span-4"
                    />


                </div>
            </div>
        </main>
    );
};

export default GeralContent;