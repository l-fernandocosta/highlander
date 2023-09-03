"use client";

import { categories } from "./categories";
import { FilterItem } from "./filter-item";

export const FilterWrapper = () => {
  return (
    <div className='flex w-full items-center justify-center min-h-[80px] py-2 px-2 gap-10 sticky top-0 bg-white'>
      {categories.map((category) => (
        <FilterItem key={category.title} options={{ ...category }} />
      ))}
    </div>
  );
};
