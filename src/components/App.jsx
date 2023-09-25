import React from "react";
import { useState } from "react";
import passGen from "./passGen";
import useClipboard from "react-hook-clipboard";

function App() {
  const [copied, setCopied] = useState("Copy");
  const [password, setPassword] = useState("");
  const [custom, setCustom] = useState({
    capital: "",
    small: "",
    number: "",
    symbols: "",
  });
  function handleChange(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;
    setCustom((prev) => ({ ...prev, [inputName]: newValue }));
  }

  function handleSubmit(event) {
    setPassword(passGen(custom));
    setCopied("Copy");
    event.preventDefault();
  }

  function handleCopy(){
    navigator.clipboard.writeText(password);
    setCopied("Copied")
  }

  return (
    <div>
      <h1>
        Strong <br />
        Password
      </h1>
      <div className="main-box">
        <div id="top">
          <input id="password-input" className="password-box" type="text" name="" placeholder="Password" value={password} />
          <button id="password-btn" className="copy-btn" onClick={handleCopy}>
            {copied}
          </button>
        </div>
        <form onSubmit={handleSubmit} id="buttom">
          <div className="custom-input-box">
            <input
              id="capital"
              className="custom-input"
              type="text"
              name="capital"
              // value={custom.capital}
              placeholder="Capital Letters"
              onChange={handleChange}
            />
            <input
              id="small"
              className="custom-input"
              type="text"
              name="small"
              // value={custom.small }
              placeholder="Small Letters"
              onChange={handleChange}
            />
            <input
              id="number"
              className="custom-input"
              type="text"
              name="number"
              // value={custom.number}
              placeholder="Numbers"
              onChange={handleChange}
            />
            <input
              id="symbols"
              className="custom-input"
              type="text"
              name="symbols"
              // value={custom.symbols}
              placeholder="Symbols"
              onChange={handleChange}
            />
          </div>
          <button id="generate-btn" className="gen-btn" type="submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
