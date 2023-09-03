import {
  Campfire,
  ClockClockwise,
  Flag,
  Skull,
  UsersThree,
  Wall,
} from "@phosphor-icons/react";

interface CategoryOption {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const categories: CategoryOption[] = [
  {
    icon: Skull,
    title: "Morte Súbita",
  },
  {
    icon: Campfire,
    title: "Simulação",
  },
  {
    icon: Flag,
    title: "Bandeira",
  },
  {
    icon: UsersThree,
    title: "Resgate",
  },

  {
    icon: ClockClockwise,
    title: "Bomba",
  },

  {
    icon: Wall,
    title: "Simulação Batalha",
  },
];
