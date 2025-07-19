import React, { useState } from "react";

function FilterForm({ onSearch }) {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    fuelType: "",
    year: "",
    minPrice: "",
    maxPrice: ""
  });

  // Sample data - replace with your actual data
  const brandOptions = [
    "Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Volkswagen", 
    "Nissan", "Hyundai", "Kia", "Mazda", "Subaru", "Chevrolet"
  ];

  const modelsByBrand = {
    "Toyota": ["Camry", "Corolla", "Prius", "RAV4", "Highlander", "Tacoma", "Tundra"],
    "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "Ridgeline"],
    "Ford": ["F-150", "Mustang", "Explorer", "Escape", "Focus", "Fusion"],
    "BMW": ["3 Series", "5 Series", "X3", "X5", "M3", "M5"],
    "Mercedes": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS"],
    "Audi": ["A3", "A4", "A6", "Q3", "Q5", "Q7"],
    // Add more brands and models as needed
  };

  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ 
      ...filters, 
      [name]: value,
      // Reset model if brand changes
      ...(name === 'brand' && { model: '' })
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      model: "",
      fuelType: "",
      year: "",
      minPrice: "",
      maxPrice: ""
    });
  };

  return (
    <div className="filter-container">
      {/* Filter Summary */}
      {(filters.brand || filters.model || filters.year || filters.fuelType) && (
        <div className="filter-summary">
          <p className="summary-text">
            {filters.brand || "Any brand"} {filters.model} {filters.year} {filters.fuelType}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="filter-form">
        {/* Brand Selection */}
        <div className="input-group">
          <label className="input-label">Brand:</label>
          <input
            className="input-field"
            type="search"
            name="brand"
            list="brand-options"
            placeholder="Select a car brand"
            value={filters.brand}
            onChange={handleChange}
          />
          <datalist id="brand-options">
            {brandOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>

        {/* Model Selection */}
        <div className="input-group">
          <label className="input-label">Model:</label>
          <input
            className="input-field"
            type="search"
            name="model"
            list="model-options"
            placeholder={filters.brand ? "Select a model" : "First select a brand"}
            value={filters.model}
            onChange={handleChange}
            disabled={!filters.brand}
          />
          <datalist id="model-options">
            {modelsByBrand[filters.brand] && modelsByBrand[filters.brand].map((model, index) => (
              <option key={index} value={model} />
            ))}
          </datalist>
        </div>

        {/* Fuel Type Selection */}
        <div className="input-group">
          <label className="input-label">Fuel Type:</label>
          <input
            className="input-field"
            type="search"
            name="fuelType"
            list="fuel-options"
            placeholder="Select fuel type"
            value={filters.fuelType}
            onChange={handleChange}
          />
          <datalist id="fuel-options">
            {fuelTypes.map((fuel, index) => (
              <option key={index} value={fuel} />
            ))}
          </datalist>
        </div>

        {/* Year Selection */}
        <div className="input-group">
          <label className="input-label">Year:</label>
          <input
            className="input-field"
            type="number"
            name="year"
            placeholder="Enter year (1886-present)"
            value={filters.year}
            onChange={handleChange}
            min="1886"
            max={new Date().getFullYear()}
          />
        </div>

        {/* Price Range */}
        <div className="input-group">
          <label className="input-label">Min Price:</label>
          <input
            className="input-field"
            type="number"
            name="minPrice"
            placeholder="Minimum price"
            value={filters.minPrice}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Max Price:</label>
          <input
            className="input-field"
            type="number"
            name="maxPrice"
            placeholder="Maximum price"
            value={filters.maxPrice}
            onChange={handleChange}
            min="0"
          />
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button type="submit" className="search-btn">Search</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;