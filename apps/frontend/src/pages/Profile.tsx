import React from "react";
import { BottomNav } from "../components/BottomNav";
import { FaUserCircle } from "react-icons/fa";
import { ItemCard } from "../components/ItemCard";

const ITEMS = [
  {
    name: "Smart Touchscreen OLED TV",
    condition: "Brand New",
    description: "A brand new OLED TV with smart touchscreen features.",
    sustainabilityImpact: "Energy efficient",
    image: null, // Replace with actual File object if available
  },
  {
    name: "Love Bonito Floral Top",
    condition: "Like New",
    description: "A beautiful floral top from Love Bonito, barely worn.",
    sustainabilityImpact: "Eco-friendly materials",
    image: null, // Replace with actual File object if available
  },
  {
    name: "Automatic Dishwasher",
    condition: "Brand New",
    description: "A brand new automatic dishwasher with multiple settings.",
    sustainabilityImpact: "Water-saving technology",
    image: null, // Replace with actual File object if available
  },
  {
    name: "Acoustic Guitar",
    condition: "Like New",
    description: "A like-new acoustic guitar, perfect for beginners.",
    sustainabilityImpact: "Sustainably sourced wood",
    image: null, // Replace with actual File object if available
  },
  {
    name: "Stuffed Bear",
    condition: "Brand New",
    description: "A brand new stuffed bear, perfect for children.",
    sustainabilityImpact: "Made from recycled materials",
    image: null, // Replace with actual File object if available
  },
];

// Main user profile component
export const Profile: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Profile Section */}
      <div className="bg-orange-100 p-4 rounded-b-3xl">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <FaUserCircle className="text-6xl text-gray-800" />
          <div>
            <h1 className="text-xl font-bold">Joe Bosco</h1>
            <p className="text-sm">🌿 Top 8 Donor in Southwest Downtown area</p>
            <p className="text-sm">🏆 25 $B3TR Earned</p>
            <p className="text-sm">🌍 3825 kg CO2 Eq. Saved</p>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex mt-4 space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium">
            Donated Items
          </button>
          <button className="text-gray-500 px-4 py-2">
            Completed Transactions
          </button>
        </div>
      </div>

      {/* Donated Items List */}
      <div className="flex-1 overflow-y-scroll p-4">
        {ITEMS.map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            condition={item.condition}
            availability="Available"
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};
