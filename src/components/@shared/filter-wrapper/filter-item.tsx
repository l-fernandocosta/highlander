import React from "react";

export interface FilterItemProps {
  options: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}
export const FilterItem = ({ options }: FilterItemProps) => {
  return (
    <div className='cursor-pointer p-2 flex flex-col items-center h-auto dark:text-white  relative text-gray-600 group gap-2 '>
      {options.icon && <options.icon className="group-hover:text-black"/>}
      <span className='text-sm font-thin group-hover:font-semibold group-hover:text-black'>{options.title}</span>
      <div className='w-[90%] bg-orange-100 h-[1px] absolute hidden group-hover:flex bottom-0' />
    </div>
  );
};
