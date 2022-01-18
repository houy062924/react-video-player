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

function VideoPlayer({
  mp4Url = 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4',
  forwardByDuration = 10,
  backwardByDuration = 10,
  isShowControls = true,
  isPreload = true,
  isLoop = false,
  isMuted = false,
  onPlayCallback,
  onPauseCallback,
  onEndCallback,
  onSeekCallback,
  onSkippedCallback,
}) {
  const playerCont = useRef(null);
  const player = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoProgressText, setVideoProgressText] = useState('00:00');
  const [videoDurationText, setVideoDuration] = useState('00:00');
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [bufferBarWidth, setBufferBarWidth] = useState(0);

  useEffect(() => {
    const onCloseFullScreenState = () => {
      // handle exiting fullscreen with escape key
      if (!document.fullscreenElement) {
        setIsFullScreen((prevIsFullScreen) =>
          prevIsFullScreen === true ? false : prevIsFullScreen
        );
      }
    };

    window.addEventListener('fullscreenchange', onCloseFullScreenState);

    return () => {
      window.removeEventListener('fullscreenchange', onCloseFullScreenState);
    };
  }, []);

  const onLoadVideo = () => {
    const duration = getTimeAsMinSec(player.current.duration);
    setVideoDuration(duration);
  };

  const onTogglePlay = () => {
    if (isPlaying) {
      player.current.pause();

      if (onPlayCallback) {
        onPauseCallback();
      }
    } else {
      player.current.play();

      if (onPlayCallback) {
        onPlayCallback();
      }
    }

    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const onToggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }

      setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
      return;
    }

    if (!isFullScreen) {
      if (playerCont.current.requestFullscreen) {
        playerCont.current.requestFullscreen();
      } else if (playerCont.webkitRequestFullscreen) {
        playerCont.current.webkitRequestFullscreen();
      } else if (playerCont.msRequestFullScreen) {
        playerCont.current.msRequestFullScreen();
      } else if (playerCont.mozRequestFullScreen) {
        playerCont.current.mozRequestFullScreen();
      }

      setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
    }
  };

  const onUpdateProgressBar = (e) => {
    const progressWidth = (e.target.currentTime / e.target.duration) * 100;
    const progress = getTimeAsMinSec(e.target.currentTime);
    const buffered = (e.target.buffered.end(0) / e.target.duration) * 100;

    if (e.target.ended) {
      setIsPlaying(false);

      if (onEndCallback) {
        onEndCallback();
      }
    }

    if (buffered !== bufferBarWidth) {
      setBufferBarWidth(buffered);
    }

    setProgressBarWidth(progressWidth);
    setVideoProgressText(progress);
  };

  const onChangeVideoProgress = (e) => {
    const updatedProgressWidth = e.target.value;
    const updatedProgress = (updatedProgressWidth / 100) * player.current.duration;
    const updatedProgressText = getTimeAsMinSec(updatedProgress);

    if (onSeekCallback) {
      onSeekCallback(updatedProgressText);
    }

    player.current.currentTime = updatedProgress;
    setProgressBarWidth(updatedProgressWidth);
    setVideoProgressText(updatedProgressText);
  };

  const onSkipByDuration = (skipBy) => {
    const updatedCurrentTime = player.current.currentTime + skipBy;
    const progressWidth = (updatedCurrentTime / player.current.duration) * 100;
    const progressText = getTimeAsMinSec(updatedCurrentTime);

    if (updatedCurrentTime >= player.current.duration) {
      player.current.currentTime = player.current.duration;
      setIsPlaying(false);
      setProgressBarWidth(100);
      setVideoProgressText(videoDurationText);
      return;
    }

    if (updatedCurrentTime <= 0) {
      player.current.currentTime = 0;
      setProgressBarWidth(0);
      setVideoProgressText('00:00');
      return;
    }

    if (onSkippedCallback) {
      onSkippedCallback(skipBy);
    }

    player.current.currentTime = updatedCurrentTime;
    setProgressBarWidth(progressWidth);
    setVideoProgressText(progressText);
  };

  return (
    <PlayerCont ref={playerCont}>
      <video
        ref={player}
        preload={isPreload.toString()}
        muted={isMuted}
        loop={isLoop}
        onClick={onTogglePlay}
        onLoadedMetadata={onLoadVideo}
        onTimeUpdate={onUpdateProgressBar}
      >
        <source src={mp4Url} type="video/mp4" />
        <track kind="captions" />
      </video>

      {isShowControls && (
        <ControlsCont>
          <ControlBtn type="button" onClick={onTogglePlay}>
            {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
          </ControlBtn>

          <ControlBtn type="button" onClick={() => onSkipByDuration(-Math.abs(backwardByDuration))}>
            <BsArrowCounterclockwise />
          </ControlBtn>

          <ControlBtn type="button" onClick={() => onSkipByDuration(forwardByDuration)}>
            <BsArrowClockwise />
          </ControlBtn>

          <ProgressBarCont>
            <ProgressBarText>{videoProgressText}</ProgressBarText>
            <ProgressBarInput
              type="range"
              min="0"
              max="100"
              step="1"
              value={progressBarWidth}
              progressBarWidth={`${progressBarWidth}%`}
              bufferBarWidth={`${bufferBarWidth}%`}
              onChange={onChangeVideoProgress}
            />
            <ProgressBarText>{videoDurationText}</ProgressBarText>
          </ProgressBarCont>

          <ControlBtn type="button" onClick={onToggleFullScreen}>
            <IoScanOutline />
          </ControlBtn>
        </ControlsCont>
      )}
    </PlayerCont>
  );
}

export default VideoPlayer;
