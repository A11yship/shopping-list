import create from "zustand";

const useStore = create((set) => {
  return {
    shoppingItems: [
      {
        _id: "c2hvcHBpbmcuaXRlbTox-test",
        _type: "shopping.item",
        category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
        name: { en: "Pineapple-test", de: "Ananas-test" },
      },
    ],
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
  };
});

export default useStore;
