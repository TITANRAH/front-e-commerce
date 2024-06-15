import { ProductType } from "@/interfaces/ProductType";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {

        console.log(data);
        
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item: ProductType) => item.id === data.id
        );

        if (existingItem) {
          return toast.error("El producto ya existe en el carrito");
        }

        set({
          items: [...get().items, data],
        });

        toast.success("Producto añadido al carrito 🛍️");
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id != id)] });
        toast.success("Producto eliminado");
      },

      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
