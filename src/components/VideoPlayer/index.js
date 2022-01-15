import { useState, useEffect, useRef } from 'react';
import { IoPlayOutline, IoPauseOutline, IoScanOutline } from 'react-icons/io5';
import { BsArrowCounterclockwise, BsArrowClockwise } from 'react-icons/bs';
import { getTimeAsMinSec } from '../../utils/utils';
import {
  PlayerCont,
  ControlsCont,
  ControlBtn,
  ProgressBarCont,
  ProgressBarInput,
  ProgressBarText,
} from './index.styled';

function VideoPlayer() {
  const player = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoProgress, setVideoProgress] = useState('00:00');
  const [videoDuration, setVideoDuration] = useState('00:00');
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const onLoadVideo = () => {
    const duration = getTimeAsMinSec(player.current.duration);
    setVideoDuration(duration);
  };

  const onTogglePlay = () => {
    if (isPlaying) {
      player.current.pause();
    } else {
      player.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const onToggleFullScreen = () => {
    if (player.current.requestFullscreen) {
      player.current.requestFullscreen();
    } else if (player.webkitRequestFullscreen) {
      player.current.webkitRequestFullscreen();
    } else if (player.msRequestFullScreen) {
      player.current.msRequestFullScreen();
    } else if (player.mozRequestFullScreen) {
      player.current.mozRequestFullScreen();
    }

    setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
  };

  const onUpdateProgress = (e) => {
    const progressWidth = (e.target.currentTime / e.target.duration) * 100;
    const progress = getTimeAsMinSec(e.target.currentTime);

    if (e.target.ended) {
      setIsPlaying(false);
    }

    setProgressBarWidth(progressWidth);
    setVideoProgress(progress);
  };

  const onChangeVideoProgress = () => {
    const progress = player.current.currentTime / player.current.duration / 100;

    return progress;
  };

  return (
    <PlayerCont>
      <video
        ref={player}
        preload="true"
        onClick={onTogglePlay}
        onLoadedMetadata={onLoadVideo}
        onTimeUpdate={onUpdateProgress}>
        <source
          src="https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>

      <ControlsCont>
        <ControlBtn type="button" onClick={onTogglePlay}>
          {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
        </ControlBtn>

        <ControlBtn type="button" controlType="backwards">
          <BsArrowCounterclockwise />
        </ControlBtn>

        <ControlBtn type="button" controlType="forwards">
          <BsArrowClockwise />
        </ControlBtn>

        <ProgressBarCont>
          <ProgressBarText>{videoProgress}</ProgressBarText>
          <ProgressBarInput
            type="range"
            min="0"
            max="100"
            step="1"
            value={progressBarWidth}
            onChange={onChangeVideoProgress}
          />
          <ProgressBarText>{videoDuration}</ProgressBarText>
        </ProgressBarCont>

        <ControlBtn type="button" onClick={onToggleFullScreen}>
          <IoScanOutline />
        </ControlBtn>
      </ControlsCont>
    </PlayerCont>
  );
}

export default VideoPlayer;
