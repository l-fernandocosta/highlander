"use client";
/* eslint-disable @next/next/no-img-element */
import { HeaderWrapper } from "@/components/@shared/header/header-wrapper";
import {
  PlacementCard,
  PlacementCardOptions,
} from "@/components/@shared/placement-card/placement-card";
import { Button } from "@/components/ui/button";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  const dummyPlacements: PlacementCardOptions[] = [
    {
      city: "Taubaté - SP",
      image:
        "https://images.unsplash.com/photo-1615589184136-9f1818682216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80",
      price: 25,
      rate: "4.9",
      title: "Jungle Arena",
      options: ["0", "1"],
    },
    {
      city: "Guarujá - SP",
      image:
        "https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhaW5lcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 35,
      rate: "4.4",
      title: "Xtreme Arena",
      options: ["3", "2"],
    },
    {
      city: "Pindamonhangaba - SP",
      image:
        "https://images.unsplash.com/photo-1687011771804-374cb387843f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
      price: 45,
      rate: "4.4",
      title: "Brave AEG",
      options: ["0", "1", "2", "3"],
    },
    {
      city: "Campos de Jordão -  SP",
      image:
        "https://images.unsplash.com/photo-1673361043184-4f60ebeb43f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1349&q=80",
      price: 45,
      rate: "4.4",
      title: "Hotel Campos",
      options: ["0", "1", "2", "3"],
    },
    {
      city: "Ubatuba - SP",
      image:
        "https://images.unsplash.com/photo-1625759886017-ccb98578f2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
      price: 25,
      rate: "4.4",
      title: "Maré Alta Hotel",
      options: ["0", "3"],
    },
  ];
  return (
    <div className='flex flex-col h-full'>
      <HeaderWrapper />

      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-x-5 gap-y-5 px-[2.5rem] py-3 '>
        {dummyPlacements.map((placement) => (
          <PlacementCard key={placement.title} properties={placement} />
        ))}
      </div>

      <div className="flex w-full border-t-[1px] max-h-[30px] border-t-gray-300 sticky bottom-0 py-5 bg-white items-center px-5 justify-between">
          <div className="flex items-center">
            <span className="text-sm">© 2023 highlander, Inc.</span>
            <Link href={"/termos-de-privacidade"}>
              <Button variant={"link"} className="text-gray-400 text-xs">Privacidade</Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <InstagramLogo />
            <TwitterLogo />
            <YoutubeLogo />
          </div>
      </div>
    </div>
  );
}
