export function splitArray(array) {

  const week = [];
  const day = [];

  for (let index = 8; index < array.length; index += 8) {
    week.push({ id: uuidv4(), items: [array[index]] });
  }

  week.push({ id: uuidv4(), items: [array[array.length - 1]] });

  day.push({ id: uuidv4(), items: [array[0]] });

  return {week, day};
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}