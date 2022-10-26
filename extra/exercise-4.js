/* Segun la siguiente lista, ordena los elementos en base a la propiedad .order. */

const list = [
  { name: "Mc Aitana", gender: "pop", order: 3 },
  { name: "Tote Queen", gender: "rap", order: 2 },
  { name: "Good Bunny", gender: "reggeaton", order: 4 },
  { name: "El sueño de Neo", gender: "pop", order: 1 },
];

const nuevorray = list.sort((a, b) => {
  return a.order - b.order;
});

console.log(nuevorray);
