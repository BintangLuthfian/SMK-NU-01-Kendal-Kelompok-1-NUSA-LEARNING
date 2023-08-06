import React from 'react';
import './ProgressCard';
import ProgressCard from './ProgressCard';
import ProgressCard2 from './ProgressCard2';
import Ulasan from './Ulasan';


const Modul = () => {
  return (
    <div className="hero min-h-screen bg-base-200 p-3 m-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div>
            <ProgressCard2/>
            <Ulasan/>
          </div>
          <div>
          </div>
        </div>
        <div className="card flex justify-left items-left w-[400px] h-[600px] m-2 shadow-2xl border border-black border-t-2">
          <div className="card-body">
            <div>
              <ProgressCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Modul;
