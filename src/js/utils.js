let wait = (seconds) => {
  let list = [];
  for (let i = 0; i < seconds; ++i) {
    list.push(false);
  }
  return list;
};

export { wait };
