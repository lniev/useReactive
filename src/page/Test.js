import useReactive from "./useReactive";
const Test = () => {
  // const [state, setState] = useReactive({
  //   name: "Petter",
  // });
  const [state, setState] = useReactive(["zhangsan"]);
  function changeState() {
    // state.name = "Mick";
    state[0] = "mick";
  }
  console.log(state);
  return (
    <div className="App">
      <div> {state[0]}</div>
      <button onClick={changeState}>toggle state</button>
    </div>
  );
};

export default Test;
