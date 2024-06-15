import { PopoverContent } from "@radix-ui/react-popover";
import React from "react";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

function ItemsMenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href='/categories/cafe-molido' className="block">Cafe molido</Link>
        <Link href='/categories/cafe-grano' className="block">Cafe grano</Link>
        <Link href='/categories/cafe-capsula' className="block">Cafe capsula</Link>
      </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile;
