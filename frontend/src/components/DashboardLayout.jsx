import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, role }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={role} />
      <div style={{ flex: 1, padding: '2.5rem', backgroundColor: 'var(--background)' }}>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
