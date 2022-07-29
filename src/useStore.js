import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      shoppingItems: [],
      allItems: [],
      addItem: (newItem) => {
        set((state) => {
          return {
            shoppingItems: [...state.shoppingItems, newItem],
          };
        });
      },
      removeItem: (currentItemId) => {
        set((state) => {
          return {
            shoppingItems: state.shoppingItems.filter(
              (shoppingItem) => shoppingItem._id !== currentItemId
            ),
          };
        });
      },
      fetchItems: async () => {
        try {
          const response = await fetch(
            "https://fetch-me.vercel.app/api/shopping/items"
          );
          const data = await response.json();
          set({ allItems: data.data });
        } catch (error) {
          console.error(error.message);
        }
      },
    }),
    {
      name: "shoppingList",
      partialize: (state) => ({ shoppingItems: state.shoppingItems }),
    }
  )
);

export default useStore;
