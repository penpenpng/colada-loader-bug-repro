export const getNext = async (x: number | string) => {
  console.log("Get next of", x);

  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Number(x) + 1);
    }, 100);
  });
};

export const NEXT_QUERY_KEY = (x: number | string) => ["next", x];

export const getJust = async (x: number | string) => {
  console.log("Get just", x);

  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Number(x));
    }, 100);
  });
};

export const JUST_QUERY_KEY = (x: number | string) => ["just", x];
