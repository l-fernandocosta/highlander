"use client";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetAddress } from "@/lib/queries/address/get-address-autocomplete.query";
import { useCommandAddress } from "@/lib/store/command-addres.store";
import { CommandEmpty } from "cmdk";
import { useState } from "react";
import { SearchBar } from "../header/search-bar";

type Status = {
  value: string;
  label: string;
};



export function AddressCommand() {
  const [open, setOpen] = useCommandAddress((s) => [s.isOpen, s.toggle]);
  const [text, setText] = useState("");
  console.log(text, "text");

  const { data: location, isLoading } = useGetAddress(text);

  console.log(
    location?.features.map((f) => f.bbox),
    "bbox"
  );
  console.log(
    location?.features.map((f) => f.geometry),
    ".geometry"
  );
  console.log(
    location?.features.map((f) => f.properties),
    ".properties"
  );

  return (
    <div className='flex items-center space-x-4'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <SearchBar />
        </PopoverTrigger>
        <PopoverContent className='p-0' side='right' align='start'>
          <Command>
            <CommandInput
              placeholder='Change status...'
              value={text}
              onValueChange={(e) => setText(e)}
            />
            <CommandEmpty>Endereço não encontrado</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {location?.features.map((feature) => (
                  <CommandItem
                    key={feature.properties.place_id}
                    onSelect={(value) => {
                      setOpen(false);
                    }}
                  >
                    {feature.properties.formatted}
    
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
