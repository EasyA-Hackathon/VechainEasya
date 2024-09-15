import React, { useState } from "react";

interface ItemFormData {
  name: string;
  condition: string;
  description: string;
  image: File | null;
}

export const Donate: React.FC = () => {
  const [formData, setFormData] = useState<ItemFormData>({
    name: "",
    condition: "Brand New",
    description: "",
    image: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you'd typically send formData to the backend/API or process it in some way
    console.log(formData);

    // Reset form after submission
    setFormData({
      name: "",
      condition: "Brand New",
      description: "",
      image: null,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Submit New Item
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
          <div>
            <label className="block text-gray-700">Item Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter item name"
              required
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block text-gray-700">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            >
              <option value="Brand New">Brand New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter a brief description"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700">Upload Image</label>
            <div className="flex items-center space-x-4">
              {/* Custom Upload Button */}
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 6.11l-1.77-1.77A1 1 0 0014.5 4H5.5a1 1 0 00-.71.29l-1.77 1.77A1 1 0 003 7v5.5A1.5 1.5 0 004.5 14h11a1.5 1.5 0 001.5-1.5V7a1 1 0 00-.12-.89zM9 12.5l2-2.5 2 2.5H9zM5 6h10l-1 1H6L5 6zm1 1h7.58L10 10 7 7zm5 3h1v-1h-1v1zm-1 1h1v-1h-1v1zm1-3V8h1v1h-1z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Select an Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-200 text-white py-3 rounded-full font-semibold text-lg"
            >
              Submit Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
