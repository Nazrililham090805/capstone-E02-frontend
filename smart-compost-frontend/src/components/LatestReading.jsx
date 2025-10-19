import React from 'react';

const LatestReading = ({ title, data, isStandard = false }) => {
  const isCompliant = !isStandard; 

  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col h-full">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">{title.toUpperCase()}</h2>
      
      {!isStandard && (
        <div className="mb-4">
          <p className={`${isCompliant ? 'text-sm font-semibold text-green-800 ' : 'text-red-600'} font-semibold text-base mb-1`}>
            {isCompliant ? 'SESUAI STANDAR' : 'TIDAK SESUAI STANDAR'}
          </p>
          <p className="text-xs text-gray-500">17:29, 8 Mei 2025</p>
        </div>
      )}

      {isStandard && (
         <p className="text-sm font-medium text-gray-700 mb-4">SNI 19-7030-2004</p>

      )}

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 flex-grow text-sm">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="text-gray-600">
            <span className="font-normal">{key}: {value}</span>
          </div> 
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors text-sm">
          LIHAT DETAIL
        </button>
      </div>
    </div>
  );
};

export default LatestReading;