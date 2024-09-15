import React from "react";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

// Main item details component
export const ItemDetails: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header with back button */}
      <div className="bg-orange-100 p-4 rounded-b-3xl flex items-center">
        <button onClick={() => navigate(-1)} className="text-gray-800">
          <FaArrowLeft className="text-2xl" />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Item Details</h1>
      </div>

      {/* Item Image */}
      <div className="p-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Smart Touchscreen OLED TV"
          className="rounded-lg"
        />
      </div>

      {/* Item Details */}
      <div className="px-4">
        <h1 className="text-2xl font-bold mb-2">Smart Touchscreen OLED TV</h1>
        <p className="text-sm text-gray-600">1pc • Brand New</p>

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">📝 Description</h2>
          <p className="text-gray-700">
            Recently won from office giveaway. Already have a TV at home, hence
            donating.
          </p>
        </div>

        {/* Sustainability Impact */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">🌱 Sustainability Impact</h2>
          <p className="text-gray-700">
            By claiming this item, you will save the equivalent of
            <span className="font-bold"> 300kg of CO2</span>. Do your part in
            saving the earth when you free-cycle!
          </p>
        </div>

        {/* User Profile Section */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-4 flex items-center">
          <FaUserCircle className="text-5xl text-gray-800 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Joe Bosco</h3>
            <p className="text-sm text-gray-600">
              Top 8 Donor in Southwest Downtown area
            </p>
          </div>
          <div className="ml-auto">
            <NavLink to="/profile" className="text-blue-600">
              <FaArrowLeft className="text-2xl" />
            </NavLink>
          </div>
        </div>

        {/* Claim Button */}
        <div className="mt-6">
          <button className="w-full bg-orange-200 text-white py-3 rounded-full font-semibold text-lg">
            Claim Item
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
