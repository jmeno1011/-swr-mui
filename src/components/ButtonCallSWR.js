import React, { useCallback, useState } from "react";
import useStateHook from "../hooks/useStateHook";

const ButtonCallSWR = () => {
  const [states, setStates] = useState();
  const callState = useCallback((e) => {
    e.preventDefault();
    setStates("Texas");
  }, []);
  return (
    <>
      <div>
        <h1>ButtonCallSWR</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>데이터</h2>
          <button onClick={callState}>검색</button>
        </div>
        <PData states={states} />
      </div>
    </>
  );
};

export default ButtonCallSWR;

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
