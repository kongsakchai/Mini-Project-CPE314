const spliStringByLimit = (str: string, limit: number) => {
  const payloads = [];
  let i = 0;
  while (i < str.length) {
    payloads.push(str.substring(i, i + limit));
    i += limit;
  }
  return payloads;
};

export default spliStringByLimit;
