import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [text, setText] = useState("Sourabh");
  // window.SpeechRecognition =
  //   window.webkitSpeechRecognition || window.SpeechRecognition;

  // let recognition = new window.SpeechRecognition();
  // useEffect(() => recognition.start());
  // useEffect(() => {
  //     recognition.addEventListener("result", (e) => {
  //     setText(e.results[0][0].transcript);
  //   });
  // });
  return (
    <div className="App">
      Hi People
      <p>{text}</p>
    </div>
  );
};

export default App;
