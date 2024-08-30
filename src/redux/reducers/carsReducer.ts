
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarProps, RecommendedProps } from "../../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const RECOMMENDED_ENDPOINT = import.meta.env.VITE_RECOMMENDED_ENDPOINT;
const CARS_ENDPOINT = import.meta.env.VITE_CARS_ENDPOINT
export const apiSlice = createApi({
  reducerPath: "api", 
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), 
  endpoints: (builder) => ({
    getRecommended: builder.query<RecommendedProps[], void>({
      query: () => RECOMMENDED_ENDPOINT,
    }),
    getCars: builder.query<CarProps[], void>({
      query: () => CARS_ENDPOINT,
    }),
  }),
});
export const { useGetRecommendedQuery, useGetCarsQuery } = apiSlice;