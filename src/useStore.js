import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      shoppingItems: [],
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
    }),
    { name: "shoppingItems", getStorage: (shoppingItem) => localStorage }
  )
);

export default useStore;
