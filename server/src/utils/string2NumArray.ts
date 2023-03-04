export default (str: string | number[]) => {
  if (typeof str !== "string") return str;

  const strArray = str.split(",");
  const numArray: number[] = [];
  strArray.forEach(v => {
    try {
      let n = parseFloat(v);
      if (!isNaN(n)) numArray.push(n);
    } catch {}
  });

  return numArray;
};
