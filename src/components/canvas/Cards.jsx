import react from "react";

function Cards() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#1a1a1a]">
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">Service 1</h3>
            <p className="text-gray-400">Description of Service 1</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">Service 2</h3>
            <p className="text-gray-400">Description of Service 2</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">Service 3</h3>
            <p className="text-gray-400">Description of Service 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
