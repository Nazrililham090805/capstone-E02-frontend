import React from 'react';
import { Link } from "react-router-dom";
import LatestReading from '../components/LatestReading';
import DataCard from '../components/DataCard';
import AnalysisHistory from '../components/AnalysisHistory';

const Dashboard = () => {
  const latestReadingData = {
    'pH': '7.0',
    'Kadar air': '25%',
    'Suhu': '28°C',
    'Kadar N': '1%',
    'Kadar P': '1%',
    'Kadar K': '1%'
  };

  const standardQualityData = {
    'pH': '6.80 - 7.49',
    'Kadar air': '≤ 50%',
    'Suhu': '≤ 30°C',
    'Kadar N': '≥ 0.40%',
    'Kadar P': '≥ 0.10%',
    'Kadar K': '≥ 0.20%'
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Smart Compost Analyzer</h1>
        
        {/* Grid Layout - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Column 1 - Pembacaan Terbaru */}
          <div>
            <LatestReading 
              title="Pembacaan Terbaru"
              data={latestReadingData}
              isStandard={false}
            />
          </div>

          {/* Column 2 - Standar Kualitas Kompos */}
          <div>
            <LatestReading 
              title="Standar Kualitas Kompos"
              data={standardQualityData}
              isStandard={true}
            />
          </div>

          {/* Column 3 - Statistics Cards */}
          <div className="space-y-4">
            <DataCard 
              count={15}
              label="Jumlah Analisis"
              type="total"
            />
            <DataCard 
              count={5}
              label="Tidak Sesuai Standar"
              type="not-compliant"
            />
            <DataCard 
              count={10}
              label="Sesuai Standar"
              type="compliant"
            />
          </div>
        </div>

        {/* Analysis History - Full Width Below */}
        <AnalysisHistory />
      </div>
    </div>
  );
};

export default Dashboard;