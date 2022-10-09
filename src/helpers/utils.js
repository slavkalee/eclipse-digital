export function filterBy(arr = [], searchString) {
  return arr.filter((item) => {
    return ['CharCode', 'NumCode', 'Name'].some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchString.toString().toLowerCase())
    );
  });
}

export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}