import React, { ReactNode } from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';

interface AnalyticsCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ 
  title, 
  icon, 
  children, 
  className = ''
}) => {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <div className="bg-primary-100 p-2 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="font-heading font-semibold text-gray-800">{title}</h3>
        </div>
      </CardHeader>
      <CardBody className="pt-3">
        {children}
      </CardBody>
    </Card>
  );
};