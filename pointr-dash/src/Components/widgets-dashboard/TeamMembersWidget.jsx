import React from 'react';
import Widget from './Widget';
import { FiUsers } from 'react-icons/fi';

const TeamMembersWidget = ({ members, className }) => {
  return (
    <Widget title="Membros do Time" subtitle="Equipe PoinTr" icon={FiUsers} className={className}>
      <ul className="space-y-4">
        {members?.map((member) => (
          <li key={member.id} className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 border border-primary-text/10 flex items-center justify-center text-xs">
              {member.name.substring(0,2)}
            </div>
            <div className="flex-1">
              <p className="text-sm text-primary-text font-medium">{member.name}</p>
              <p className="text-[10px] text-gray-500">{member.role}</p>
            </div>
            <span className={`w-2 h-2 rounded-full ${member.online ? 'bg-green-500' : 'bg-slate-600'}`} />
          </li>
        ))}
      </ul>
    </Widget>
  );
};

export default TeamMembersWidget;