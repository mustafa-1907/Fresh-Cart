import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

export default function FeatureItem({ 
  icon, 
  title, 
  description, 
  iconColor 
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}