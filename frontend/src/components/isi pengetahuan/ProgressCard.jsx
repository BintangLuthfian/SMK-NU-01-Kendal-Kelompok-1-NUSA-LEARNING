import React, { useState } from 'react';

const ProgressCard = () => {
  const [currentModule, setCurrentModule] = useState(1);
  const [currentSubModule, setCurrentSubModule] = useState(1);

  const handleModuleClick = (moduleNumber) => {
    setCurrentModule(moduleNumber);
    setCurrentSubModule(1);
  };

  const handleSubModuleClick = (subModuleNumber) => {
    setCurrentSubModule(subModuleNumber);
  };

  const renderModules = () => {
    const numModules = 2; // Ganti dengan jumlah modul yang ada
    const modules = [];

    for (let moduleNumber = 1; moduleNumber <= numModules; moduleNumber++) {
      modules.push(
        <div
          key={`module-${moduleNumber}`}
          onClick={() => handleModuleClick(moduleNumber)}
          className={`border rounded-md p-4 ${
            currentModule === moduleNumber ? 'bg-blue-200' : 'bg-gray-200'
          }`}
        >
          Modul {moduleNumber}
        </div>
      );

      if (currentModule === moduleNumber) {
        const numSubModules = 4; // Ganti dengan jumlah sub modul pada modul tertentu
        const subModules = [];

        for (let subModuleNumber = 1; subModuleNumber <= numSubModules; subModuleNumber++) {
          subModules.push(
            <div
              key={`sub-module-${subModuleNumber}`}
              onClick={() => handleSubModuleClick(subModuleNumber)}
              className={`border rounded-md p-4 ${
                currentSubModule === subModuleNumber ? 'bg-green-200' : 'bg-gray-200'
              }`}
            >
              Sub Modul {subModuleNumber}
            </div>
          );
        }

        modules.push(
          <div key={`sub-modules-${moduleNumber}`} className="ml-8">
            {subModules}
          </div>
        );
      }
    }

    return modules;
  };

  return (
    <div>
      <div className="border rounded-md p-4 bg-yellow-200">Progress</div>
      <div className="border rounded-md p-4 mt-4">
        {renderModules()}
        <div className="mt-4">
          <div
            className={`border rounded-md p-4 ${
              currentModule === 'final-kuis' ? 'bg-pink-200' : 'bg-gray-200'
            }`}
          >
            Final Kuis
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
