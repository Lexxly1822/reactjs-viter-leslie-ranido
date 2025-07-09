import React from "react";

const Race = () => {
  return (
    <>
      {/* Race */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">NEXT RACE</h2>
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-2xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Japanese Grand Prix</h3>
                <p className="text-gray-300">
                  Suzuka International Racing Course
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">April 7, 2025</p>
                <p className="text-gray-300">Round 4</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Race;
