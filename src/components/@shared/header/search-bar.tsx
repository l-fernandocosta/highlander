import { Separator } from "@/components/ui/separator";
import { useCommandAddress } from "@/lib/store/command-addres.store";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchBar = () => {
  const [open] = useCommandAddress((s) => [s.onOpen]);
  return (
    <div
      className='flex  items-center space-x-4 text-sm border-[1px]  py-2 rounded-full px-10 cursor-pointer shadow-md dark:shadow-lg min-h-[50px] h-[3.125rem]'
      onClick={open}
    >
      <div>Local</div>
      <Separator orientation='vertical' />
      <div>Pessoas</div>
      <Separator orientation='vertical' />
      <div>
        <MagnifyingGlassIcon />
      </div>
    </div>
  );
};
