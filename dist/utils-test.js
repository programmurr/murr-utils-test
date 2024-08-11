const o = (e, n) => {
  const t = e.indexOf(n);
  return t > -1 && e.splice(t, 1), e;
}, i = (e, n) => e.filter((t) => t !== n);
i([1, 2, 3], 3);
export {
  o as arrayDelete,
  i as arrayRemove
};
