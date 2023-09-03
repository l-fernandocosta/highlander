/* eslint-disable @next/next/no-img-element */
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Campfire, Flag, Skull, Star, Wall } from "@phosphor-icons/react";

type CategoriesKeys = "0" |  "1" | "2" | "3"
export interface PlacementCardOptions {
  title: string;
  image: string;
  rate: string;
  city: string;
  price: number;
  options: CategoriesKeys[]
 }

export interface PlacementCardProps {
  properties: PlacementCardOptions;
}

const cardBadgerMapper = {
  "0": () => {
    return <Skull className='text-[.90em]' />;
  },
  "1": () => {
    return <Campfire className='text-[.90em]' />;
  },
  "2": () => {
    return <Wall className='text-[.90em]' />;
  },
  "3": () => {
    return <Flag className='text-[.90em]' />;
  },
};
export const PlacementCard = ({ properties }: PlacementCardProps) => {
  const { city, image, price, rate, title, options} = properties;

  return (
    <div className='flex flex-col px-2 gap-10  py-1 cursor-pointer'>
      <AspectRatio ratio={16 / 9}>
        <img
          src={image}
          alt='img'
          style={{
            width: "100%",
            height: "100%",
          }}
          className='rounded-md object-cover'
        />
      </AspectRatio>

      <div className='flex flex-col'>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-sm font-semibold'>{title}</span>
          <div className='flex gap-2'>
            <Star weight='fill' />
            <span className='text-xs'>{rate}</span>
          </div>
        </div>

        <span className='text-gray-500 text-sm'>{city}</span>
      </div>

      <div className='flex flex-col'>
        <Separator />
        <span className="text-xs font-semibold">Categorias</span>
        <div className='grid grid-cols-3 items-end h-full gap-2 my-2'>
          {options.map((iconKey) => (
            <Badge
              key={iconKey}
              className='items-center flex rounded-sm p-2 text-xs justify-center'
            >
              {cardBadgerMapper[iconKey]()}
            </Badge>
          ))}
        </div>
        <Separator />
        <Button className='mt-2 self-start' variant={"link"}>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          /dia
        </Button>
      </div>
    </div>
  );
};
