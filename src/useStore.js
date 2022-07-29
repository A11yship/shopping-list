import create from "zustand/react";

const useStore = create((set) => {
  return {
    shoppingItems: [],
    addItem: (newItem) => {
      set((state) => {
        return {
          shoppingItems: [...state.shoppingItems, newItem],
        };
      });
    },
  };
});

export default useStore;
