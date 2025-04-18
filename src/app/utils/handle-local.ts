export const setLocal = (name: string, data: object) => {
  const convertedData = JSON.stringify(data);
  localStorage.setItem(name, convertedData);
};

export const getLocal = (name: string) => {
  const item = localStorage.getItem(name);

  if (!item) {
    return;
  }
  return JSON.parse(item);
};
