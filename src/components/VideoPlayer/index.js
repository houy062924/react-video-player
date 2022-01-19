import { useState, useEffect, useRef } from 'react';
import { IoPlayOutline, IoPauseOutline, IoScanOutline } from 'react-icons/io5';
import { BsArrowCounterclockwise, BsArrowClockwise } from 'react-icons/bs';
import { defaultProps } from '../../props';
import { getTimeAsMinSec } from '../../utils/utils';
import {
  PlayerCont,
  PlayerVideo,
  ControlsCont,
  ControlBtn,
  SkipByText,
  ProgressBarCont,
  ProgressBarInput,
  ProgressBarText,
} from './index.styled';

function VideoPlayer(props) {
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

  useEffect(() => {
    const onResetDefaultState = () => {
      setIsPlaying(false);
      setIsFullScreen(false);
      setVideoProgressText('00:00');
      setVideoDuration('00:00');
      setProgressBarWidth(0);
      setBufferBarWidth(0);
    };

    if (player) {
      player.current.load();
      onResetDefaultState();
    }
  }, [props.url]);

  const onLoadVideo = () => {
    const duration = getTimeAsMinSec(player.current.duration);
    setVideoDuration(duration);
  };

  const onTogglePlay = () => {
    if (isPlaying) {
      player.current.pause();

      if (props.onPlayCallback) {
        props.onPauseCallback();
      }
    } else {
      player.current.play();

      if (props.onPlayCallback) {
        props.onPlayCallback();
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
    if (e.target.readyState !== 4) return;

    const progressWidth = (e.target.currentTime / e.target.duration) * 100;
    const progress = getTimeAsMinSec(e.target.currentTime);
    const buffered = (e.target.buffered.end(0) / e.target.duration) * 100;

    if (e.target.ended) {
      setIsPlaying(false);

      if (props.onEndCallback) {
        props.onEndCallback();
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

    if (props.onSeekCallback) {
      props.onSeekCallback(updatedProgressText);
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

    if (props.onSkippedCallback) {
      props.onSkippedCallback(skipBy);
    }

    player.current.currentTime = updatedCurrentTime;
    setProgressBarWidth(progressWidth);
    setVideoProgressText(progressText);
  };

  return (
    <PlayerCont ref={playerCont} className={props.playerContClassName}>
      <PlayerVideo
        ref={player}
        className={props.playerVideoClassName}
        width={!isFullScreen ? props.videoWidth : '100%'}
        height={!isFullScreen ? props.videoHeight : 'auto'}
        preload={props.isPreload.toString()}
        muted={props.isMuted}
        loop={props.isLoop}
        onClick={onTogglePlay}
        onLoadedMetadata={onLoadVideo}
        onTimeUpdate={onUpdateProgressBar}>
        <source src={props.url} type="video/mp4" />
        <track kind="captions" />
      </PlayerVideo>

      {props.isShowControls && (
        <ControlsCont
          className={props.controlsContClassName}
          width={!isFullScreen ? props.videoWidth : '100%'}
        >
          <ControlBtn className={props.controlsBtnClassName} onClick={onTogglePlay}>
            {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
          </ControlBtn>

          <ControlBtn
            className={props.controlsBtnClassName}
            onClick={() => onSkipByDuration(-Math.abs(props.backwardByDuration))}
          >
            <BsArrowCounterclockwise />
            <SkipByText>{-Math.abs(props.backwardByDuration)}</SkipByText>
          </ControlBtn>

          <ControlBtn
            className={props.controlsBtnClassName}
            onClick={() => onSkipByDuration(Math.abs(props.forwardByDuration))}
          >
            <BsArrowClockwise />
            <SkipByText>{Math.abs(props.forwardByDuration)}</SkipByText>
          </ControlBtn>

          <ProgressBarCont className={props.progressBarContClassName}>
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
              className={props.progressBarClassName}
              trackColor={props.progressBarTrackColor}
              thumbColor={props.progressBarThumbColor}
              progressColor={props.progressBarProgressColor}
              bufferColor={props.progressBarBufferColor}
            />
            <ProgressBarText>{videoDurationText}</ProgressBarText>
          </ProgressBarCont>

          <ControlBtn className={props.controlsBtnClassName} onClick={onToggleFullScreen}>
            <IoScanOutline />
          </ControlBtn>
        </ControlsCont>
      )}
    </PlayerCont>
  );
}

VideoPlayer.defaultProps = defaultProps;

export default VideoPlayer;
