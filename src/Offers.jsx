import React from "react";
import PaymentSlider from "./Slider";


const sites = [
  {
    name: "Odds96",
    bonus: "₹28,000",
    rating: "8.4 / 10",
    reviews: "58,995 User Reviews",
    winRate: "91.1%",
    colors: "from-teal-500 to-cyan-500",
  },
  {
    name: "RajaBets",
    bonus: "₹30,000",
    rating: "9.1 / 10",
    reviews: "69,765 User Reviews",
    winRate: "97.1%",
    colors: "from-indigo-500 to-purple-500",
  },
  {
    name: "4raBet",
    bonus: "₹28,000",
    rating: "9.4 / 10",
    reviews: "59,495 User Reviews",
    winRate: "95.1%",
    colors: "from-rose-500 to-pink-500",
  },
  {
    name: "1Win",
    bonus: "₹25,000",
    rating: "8.4 / 10",
    reviews: "58,495 User Reviews",
    winRate: "95.1%",
    colors: "from-amber-500 to-orange-500",
  },
];

export default function BettingSites() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-950 text-white px-4 py-8">
      <div>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Top Betting Sites 2025</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Looking for the best online betting in India? We’ve got you covered.
            Our experts spend hours testing and reviewing every site so you don’t have to.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs md:text-sm">
            <span className="px-3 py-1 bg-green-700 rounded-full">🇮🇳 India Accepted</span>
            <span className="px-3 py-1 bg-blue-700 rounded-full">⚡ Fast Payouts 24/7</span>
            <span className="px-3 py-1 bg-purple-700 rounded-full">✅ Fully Licensed</span>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 space-y-6 max-w-4xl mx-auto">
          {sites.map((site, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${site.colors} rounded-2xl p-[2px] shadow-lg`}
            >
              <div className="bg-gray-900 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between">
                {/* Mobile Layout */}
                <div className="flex flex-col gap-3 w-full md:hidden">
                  <div className="flex justify-between w-full">
                    {/* Left */}
                    <div>
                      <h2 className="text-base font-semibold">{site.name}</h2>
                      <p className="text-gray-300 text-xs">Welcome Bonus 100% Upto</p>
                      <p className="text-lg font-bold">{site.bonus}</p>
                      <p className="text-sm font-semibold mt-1">{site.rating}</p>
                    </div>
                    {/* Right */}
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">{site.reviews}</p>
                      <p className="text-green-400 text-xs font-medium">Winning Rate: {site.winRate}</p>
                       {/* Mobile Button */}
                  <div className="flex justify-start mt-2">
                    <button className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg">
                      Get Bonus
                    </button>
                  </div>
                    </div>
                  </div>
                 
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex flex-1 justify-between items-center">
                  {/* Site Info */}
                  <div>
                    <h2 className="text-xl font-semibold">{site.name}</h2>
                    <p className="text-gray-300 text-sm">Welcome Bonus 100% Upto</p>
                    <p className="text-2xl font-bold">{site.bonus}</p>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="text-center">
                    <p className="text-lg font-semibold">{site.rating}</p>
                    <p className="text-gray-400 text-sm">{site.reviews}</p>
                    <p className="text-green-400 text-sm font-medium">Winning Rate: {site.winRate}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl">
                      Get Bonus
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-gray-600 rounded-xl hover:bg-gray-800">
                      Visit Site
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="Terms-And-Conditions" className="hover:text-white">Terms & Conditions</a>
          <a href="Privecy-Policy" className="hover:text-white">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
