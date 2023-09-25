import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAdded } from "../reducers/input/addInputSlice";

const AddInput = () => {
  const [textInput, setTextInput] = useState("");

  const { input } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setTextInput(e.target.value)} /><br/>
        <button
          style={{
            borderRadius:"4px",
            height: "30px",
            width: "70px",
            backgroundColor: "green"
          }}
          onClick={() => dispatch(inputAdded(textInput))}
        >
          Submit
        </button>
      </div>
      <span>Local State: {textInput}</span><br/>
      <span>Redux State: {input}</span>
    </>
  );
};

export default AddInput;
