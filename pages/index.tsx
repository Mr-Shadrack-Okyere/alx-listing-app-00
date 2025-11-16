import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const IndexPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('https://example.com/hero-image.jpg')` }}
      >
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-6 flex flex-wrap gap-2">
        {["Top Villa", "Self Checkin", "Beachfront", "Pet Friendly"].map((filter) => (
          <span
            key={filter}
            className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.name} className="border rounded-md overflow-hidden shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-gray-600">${property.price} / night</p>
              <p className="text-yellow-500">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
