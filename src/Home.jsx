import { useState, useEffect } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleYes = () => {
    window.location.href = "/offers"; // redirect to offers page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white relative">
      <h1 className="text-4xl font-bold">🚀 Hello Welcome To Igaming</h1>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-80">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Are you 18+ or Above?
            </h2>
            <button
              onClick={handleYes}
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
