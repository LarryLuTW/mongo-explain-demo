const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateThing = (id) => ({
    _id: id,
    name: `thing ${id}`,
    price: random(100, 10000),
    quantity: random(3, 100),
})

// generate 1000 things
const things = [];
for (let i = 6; i <= 1000; i++) {
  const thing = generateThing(i);
  things.push(thing);
}
console.log(JSON.stringify(things, null, 2));
