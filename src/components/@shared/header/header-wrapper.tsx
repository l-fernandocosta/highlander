import { FilterWrapper } from "../filter-wrapper/filter-wrapper";
import { Header } from "./header";

export const HeaderWrapper = () => {
  return (
    <div className='sticky top-0 z-[2]' >
      <Header />
      <FilterWrapper/>
    </div>
  );
};
