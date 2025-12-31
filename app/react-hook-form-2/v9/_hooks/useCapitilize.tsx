

const useCapitilize = (props : string) => {
  const firstLetter = props.slice(0, 1).toUpperCase();
  const rest = props.slice(1).toLocaleLowerCase()
  const val = firstLetter + rest;
  return val;
};

export default useCapitilize;