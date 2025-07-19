const API_URL = 'http://localhost:8080/api/cars/all';

export async function fetchAllCars() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function addCar(carData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carData),
  });

  if (!response.ok) {
    throw new Error('Failed to add car');
  }

  return await response.json();
}

export async function deleteCar(carId) {
  const response = await fetch(`${API_URL}/${carId}`, {
    method: 'DELETE',
  });
}
export async function fetchCars(filters) {
  const params = new URLSearchParams();

  Object.keys(filters).forEach(key => {
    if (filters[key]) params.append(key, filters[key]);
  });

  const res = await fetch(`http://localhost:8080/api/cars?${params.toString()}`);
  return await res.json();
}
