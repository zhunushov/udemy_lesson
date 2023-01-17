const compose =
  (...func) =>
  (comp) => {
    return func.reduceRight((prevRs, fn) => fn(prevRs), comp);
  };
export default compose;
