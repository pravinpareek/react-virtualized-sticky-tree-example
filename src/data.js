export const dataTree = {
  root: {
    name: "Root",
    children: ["look1", "look2", "look3", "look4", "look5", "look6"],
    depth: 0
  },
  look1: { name: "Child 1", depth: 1, products: [1, 2, 3, 4, 5, 6, 7] },
  look2: { name: "Child 2", depth: 2, products: [1, 2, 3] },
  look3: {
    name: "Child 3",
    depth: 2,
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  },
  look4: { name: "Child 4", depth: 3, products: [1, 2, 3, 4, 5, 6, 7] },
  look5: { name: "Child 5", depth: 3, products: [1, 2, 3] },
  look6: { name: "Child 6", depth: 3, products: [1, 2, 3, 4, 5, 6, 7] }
};
