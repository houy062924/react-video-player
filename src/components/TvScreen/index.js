import React, { useState, useRef } from 'react';
import {
  IoPower,
  IoVolumeOff,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeHigh,
  IoPlayForward,
  IoPlayBack,
} from 'react-icons/io5';
import VideoPlayer from '../VideoPlayer/index';
import {
  TvCont,
  ScreenCont,
  ControlCont,
  DialBtnCont,
  ChannelBtnCont,
  ProgressBtnCont,
  SpeakerCont,
  PowerBtn,
  ChannelBtn,
  ProgressBtn,
  DialBtn,
  ScreenEffect,
  Antenna,
  Feet,
} from './index.styled';

const channels = [
  {
    name: 'harryPotter',
    url: 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4',
  },
  {
    name: 'goldLeaf',
    url: 'https://tra-ww000-cp.akamaized.net/PTS-TW-D0006-01/videos/misc/mp4/trailer/PTS-TW-D0006-01-Z01-406p-800k.mp4',
  },
  {
    name: 'dune',
    url: 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1783/videos/misc/mp4/trailer/HGO-TW-001-A1783-Z01-406p-800k.mp4',
  },
];

function TvScreen() {
  const videoPlayerRef = useRef(null);

  const [isShowPowerBtnHint, setIsShowPowerBtnHint] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackedDialId, setTrackedDialId] = useState(undefined);
  const [dialRotateDeg, setDialRotateDeg] = useState(360);
  const [volume, setVolume] = useState(1);
  const [channel, setChannel] = useState(channels[0]);
  const [autoPlay, setAutoPlay] = useState(false);

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
    if (isShowPowerBtnHint) {
      setIsShowPowerBtnHint(false);
    }

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
    setDialRotateDeg(rotateDegree);
  };

  const onChangeVolume = (e) => {
    const rotateDegree = getRotateDegree(e);
    const videoVolume = Math.round((rotateDegree / 360 + Number.EPSILON) * 100) / 100;

    videoPlayerRef.current.onChangeVolume(videoVolume);
    setVolume(videoVolume);
    setTrackedDialId(undefined);
  };

  const onChangeChannel = (channelObj) => {
    if (!isOn) return;

    setAutoPlay(true);
    setChannel(channelObj);
  };

  const onSkipByDuration = (skipBy) => {
    if (!isOn) return;
    videoPlayerRef.current.onSkipByDuration(skipBy);
  };

  const renderChannelBtns = () => (
    <>
      {channels.map((channelObj) => (
        <ChannelBtn
          aria-label="channel"
          key={channelObj.name}
          type="button"
          name="channel"
          id={channelObj.name}
          isActive={channel.name === channelObj.name}
          onClick={() => onChangeChannel(channelObj)}
        />
      ))}
    </>
  );

  return (
    <TvCont>
      <Antenna />

      <ScreenCont>
        <ScreenEffect isOn={isOn}>
          <VideoPlayer
            ref={videoPlayerRef}
            isLoop
            isPlaying={isPlaying}
            isShowControls={false}
            videoVolume={volume}
            url={channel.url}
            autoPlay={autoPlay}
            playerContClassName="video-cont"
          />
        </ScreenEffect>
      </ScreenCont>

      <ControlCont>
        <PowerBtn
          aria-label="power"
          type="button"
          isAnimate={isShowPowerBtnHint}
          onClick={onToggleScreen}>
          <IoPower />
        </PowerBtn>

        <DialBtnCont>
          <DialBtn
            aria-label="volume dial"
            type="button"
            id="volume"
            onMouseDown={onStartTrackDialPosition}
            onMouseMove={onTrackDialPosition}
            onMouseUp={onChangeVolume}
          />
          {dialRotateDeg === 0 && <IoVolumeOff />}
          {dialRotateDeg > 0 && dialRotateDeg <= 120 && <IoVolumeLow />}
          {dialRotateDeg > 120 && dialRotateDeg <= 240 && <IoVolumeMedium />}
          {dialRotateDeg > 240 && dialRotateDeg <= 360 && <IoVolumeHigh />}
        </DialBtnCont>

        <ChannelBtnCont>{renderChannelBtns()}</ChannelBtnCont>

        <ProgressBtnCont>
          <ProgressBtn
            aria-label="backwards"
            type="button"
            name="channel"
            id="backwards"
            onClick={() => onSkipByDuration(-10)}
          >
            <IoPlayBack />
          </ProgressBtn>

          <ProgressBtn
            aria-label="forwards"
            type="button"
            name="channel"
            id="forwards"
            onClick={() => onSkipByDuration(10)}>
            <IoPlayForward />
          </ProgressBtn>
        </ProgressBtnCont>

        <SpeakerCont />
      </ControlCont>

      <Feet />
    </TvCont>
  );
}

export default TvScreen;
