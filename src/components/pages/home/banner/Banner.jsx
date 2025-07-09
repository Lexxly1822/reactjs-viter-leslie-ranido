import React from 'react'

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">2025 FORMULA 1 SEASON</h2>
          <p className="text-xl mb-8">
            The fastest motorsport competition in the world
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            View Schedule
          </button>
        </div>
      </section>
    </>
  );
}

export default Banner
