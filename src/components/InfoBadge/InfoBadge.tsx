import React from 'react';

interface InfoBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export const InfoBadge = ({ icon, text }: InfoBadgeProps) => (
  <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
    <span className="text-green-600">{icon}</span>
    {text}
  </div>
);