import React, { useState } from "react";
import Input from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Badges from "react-bootstrap/Badge";
import { Carousel } from "react-responsive-carousel";
// import Card fro
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function GetTranslation() {
  const [input, setInput] = useState("");
  const [trans, setTrans] = useState([]);
  const [word, setWord] = useState("");

  function handleChange(event) {
    const value = event.target.value;

    setInput((prevValue) => {
      return {
        ...prevValue,
        value
      };
    });
  }

  const translateInput = () => {
    const apiLink =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + input.value;
    fetch(apiLink)
      .then(function (res) {
        if (!res.ok) {
          // throw Error(res.statusText);
          response = "error";
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setTrans(data);
      });

    // {trans.map((val) =>
    //   val.meanings.map((means) =>
    //     means.definitions.map((def) => (
    //       <p className="card-text">{def.example}</p>
    //     ))
    //   )
    // )}

    trans.map((word) => setWord(word.word));
    console.log(word);
  };

  return (
    <div className="translation">
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          className="form-control"
          placeholder="Whats on your mind"
        ></input>
        <button className="btn btn-outline-secondary" onClick={translateInput}>
          Translate
        </button>
      </div>
      {/* Start of definition calling */}
      <h3>Definitions</h3>
      <div className="card border-dark mb-3">
        {trans.map((val) =>
          val.meanings.map((means) =>
            means.definitions.map((def) => (
              <div className="card-body text-dark">
                <p className="card-text">{def.definition}</p>
              </div>
            ))
          )
        )}
      </div>
      {/* <h3>Definitions2</h3>
      <div class="card border-success mb-3">
        <div class="card-header bg-transparent border-success">
          <h3>{input.value}</h3>
        </div>
        <ol type = "1">
          {trans.map((val) =>
            val.meanings.map((means) =>
              means.definitions.map((def) => (
                <div>
                  <li>{def.definition}</li>
                  <small>{def.example}</small>
                </div>
              ))
            )
          )}
        </ol>
      </div> */}
      {/* End of definition calling */}
      {/* Start of example calling */}
      <h3>Examples:</h3>
      {trans.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <p className="card-text">{def.example}</p>
          ))
        )
      )}
      {/* End of example calling */}
      {/* Start of audio calling */}
      <h3>Audio:</h3>
      <Carousel>
        {trans.map((val) =>
          val.phonetics.map((aud) => (
            <div>
              <figcaption>{aud.text}</figcaption>
              <audio controls src={aud.audio}></audio>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}

export default GetTranslation;
