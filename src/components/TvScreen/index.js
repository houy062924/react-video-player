import React, { useState, useRef } from 'react';
import VideoPlayer from '../VideoPlayer/index';
import {
  TvCont,
  ScreenCont,
  ControlCont,
  DialBtnCont,
  SpeakerCont,
  PowerBtn,
  DialBtn,
  ScreenEffect,
} from './index.styled';

function TvScreen() {
  const videoPlayerRef = useRef(null);

  const [isOn, setIsOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackedDialId, setTrackedDialId] = useState(undefined);
  const [volume, setVolume] = useState(1);

  const getRotateDegree = (e) => {
    const { pageX, pageY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = pageX;
    const mouseY = pageY;
    const radians = Math.atan2(-(mouseX - centerX), mouseY - centerY);

    return Math.round(radians * (180 / Math.PI) + 180);
  };

  const onToggleScreen = () => {
    videoPlayerRef.current.onTogglePlay();
    setIsPlaying((prevValue) => !prevValue);
    setIsOn((prevValue) => !prevValue);
  };

  const onStartTrackDialPosition = (e) => {
    const { id } = e.target;
    setTrackedDialId(id);
  };

  const onTrackDialPosition = (e) => {
    if (trackedDialId !== e.target.id) return;

    const rotateDegree = getRotateDegree(e);
    e.target.style.transform = `rotate(${rotateDegree}deg)`;
  };

  const onChangeVolume = (e) => {
    const rotateDegree = getRotateDegree(e);
    const videoVolume = Math.round((rotateDegree / 360 + Number.EPSILON) * 100) / 100;

    videoPlayerRef.current.onChangeVolume(videoVolume);
    setVolume(videoVolume);
    setTrackedDialId(undefined);
  };

  const onChangeProgress = () => {
    setTrackedDialId(undefined);
  };

  return (
    <TvCont>
      <ScreenCont>
        <ScreenEffect isOn={isOn}>
          <VideoPlayer
            ref={videoPlayerRef}
            isLoop
            isPlaying={isPlaying}
            isShowControls={false}
            videoVolume={volume}
            playerContClassName="video-cont"
          />
        </ScreenEffect>
      </ScreenCont>

      <ControlCont>
        <PowerBtn aria-label="power" type="button" onClick={onToggleScreen} />

        <DialBtnCont>
          <DialBtn
            aria-label="dial"
            type="button"
            id="volume"
            onMouseDown={onStartTrackDialPosition}
            onMouseMove={onTrackDialPosition}
            onMouseUp={onChangeVolume}
          />
          <DialBtn
            aria-label="dial"
            type="button"
            id="progress"
            onMouseDown={onStartTrackDialPosition}
            onMouseMove={onTrackDialPosition}
            onMouseUp={onChangeProgress}
          />
        </DialBtnCont>

        <SpeakerCont />
      </ControlCont>
    </TvCont>
  );
}

export default TvScreen;
