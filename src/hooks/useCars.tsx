// src/hooks/useCars.ts

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetCarsQuery } from '../redux/reducers/carsReducer';

export const useCars = () => {
  const { data: cars = [], error, isLoading } = useGetCarsQuery();
  const searchText = useSelector((state: RootState) => state.search.searchText.toLowerCase());
  const filteredCars = cars.filter(car =>
    car.title.toLowerCase().includes(searchText)
  );
  return {
    cars: filteredCars,
    error,
    isLoading,
  };
};
