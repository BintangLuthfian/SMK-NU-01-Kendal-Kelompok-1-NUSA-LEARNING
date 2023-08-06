const ProgressCard2 = () => {
    return (
      <div className="card flex-shrink-0 w-[780px] h-[200px] m-2  shadow-2xl border border-black border-t-2">
            <div className="card-body">
              <div className="card-title">
                <p className="py-1">Yang anda dapatan di pelatihan ini</p>
              </div>
              <div className="flex justify-between items-center text-[16px]">
                <div className="w-[50%] float-right">
                    <li>4 Menit total vidio pembelajaran</li>
                    <li>5 bahan bacaan</li>
                    <li>5 kontent yang dapat diunduh </li>
                </div>
                <div className="width-[25%] float-left">
                  <li>Kuis yang dapat dikerjakan</li>
                  <li>Sertifikat yang dapt diunduh</li>
                </div>
              </div>
            </div>
          </div>
    );

}

export default ProgressCard2;