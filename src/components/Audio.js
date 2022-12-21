import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Kokk from "../assets/sound/kkokkkok.mp3";

function Audio() {
  return <ReactAudioPlayer src={`${Kokk}`} autoPlay controls loop />;
}

export default Audio;
