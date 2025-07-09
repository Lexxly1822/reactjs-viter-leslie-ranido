import React from "react";

const Winners = () => {
  return (
    <>
      {/* Winners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            RECENT WINNERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Race 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Bahrain GP</h3>
              <p className="text-gray-600 mb-4">March 2, 2025</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold">Max Verstappen</p>
                  <p className="text-sm text-gray-500">Red Bull Racing</p>
                </div>
              </div>
            </div>

            {/* Race 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Saudi Arabian GP</h3>
              <p className="text-gray-600 mb-4">March 9, 2025</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold">Sergio Perez</p>
                  <p className="text-sm text-gray-500">Red Bull Racing</p>
                </div>
              </div>
            </div>

            {/* Race 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Australian GP</h3>
              <p className="text-gray-600 mb-4">March 24, 2025</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold">Carlos Sainz</p>
                  <p className="text-sm text-gray-500">Ferrari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Winners;
