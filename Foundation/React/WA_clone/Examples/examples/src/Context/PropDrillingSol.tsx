import React, { useContext } from "react";
// 1
const ContextWrapper = React.createContext();

function PropDrillingSol() {
  const value = 10;
  return (
    <>
      <div>Prop Drilling Solution</div>

      {/* 2 */}
      <ContextWrapper.Provider value={value}>
        <GrandParent></GrandParent>
      </ContextWrapper.Provider>
    </>
  );
}

function GrandParent() {
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent></Parent>
    </>
  );
}
function Parent() {
  return (
    <>
      <h2> Parent</h2>
      <Child></Child>
    </>
  );
}
function Child() {
    //3 
  const message = useContext(ContextWrapper);
  return (
    <>
      <h2>Child Parent</h2>
      <div>value :{message} </div>
    </>
  );
}

export default PropDrillingSol;
