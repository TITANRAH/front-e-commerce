import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/interfaces/ProductType";
import { ProductBySlugDatum } from "@/interfaces/ProductBySlugTypes";

interface ProductLovedStore {
  lovedItems: ProductBySlugDatum[];
  addLovedItem: (data: ProductBySlugDatum) => void;
  removeLovedItem: (id: number) => void;
}
export const useProductsLovedStore = create(
  persist<ProductLovedStore>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: ProductBySlugDatum) => {
        console.log(data);

        const currentItems = get().lovedItems;
        const existingItem = currentItems.find(
          (item: ProductBySlugDatum) => item.id === data.id
        );

        if (existingItem) {
          return toast.error("El producto ya existe en los favoritos");
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast.success("Producto añadido a favoritos 🛍️", {
          position: "bottom-center",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id != id)],
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
