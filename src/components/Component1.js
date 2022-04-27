import React, { useCallback, useState } from "react";
import useStateHook from "../hooks/useStateHook";

const Component1 = () => {
  const [states, setStates] = useState();
  const callState = useCallback((e) => {
    e.preventDefault();
    setStates("Texas");
  }, []);
  return (
    <>
      <h1>Component1</h1>
      <div
        style={{ width: "300px", border: "2px solid black", padding: "1rem" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>데이터</h1>
          <button onClick={callState}>검색</button>
        </div>
        <PData states={states} />
      </div>
    </>
  );
};

export default Component1;

function PData({ states }) {
  const { stateData, isLoading, isError } = useStateHook(states);
  if (isError) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <>
      <p>{stateData?.table[0]?.City}</p>
      <p>{stateData?.table[0]?.Population2000}</p>
      <p>{stateData?.table[0]?.Population2010}</p>
      <p>{stateData?.table[0]?.state}</p>
    </>
  );
}
