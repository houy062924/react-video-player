export const defaultProps = {
  url: 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4',
  forwardByDuration: 10,
  backwardByDuration: 10,
  isShowControls: true,
  isPreload: true,
  isLoop: false,
  isMuted: false,
  videoVolume: 1,
  autoPlay: true,

  // functionality callbacks
  onPlayCallback: undefined,
  onPauseCallback: undefined,
  onEndCallback: undefined,
  onSeekCallback: undefined,
  onSkippedCallback: undefined,

  // css settings
  videoWidth: '100%',
  videoHeight: 'auto',
  playerContClassName: '',
  playerVideoClassName: '',
  controlsContClassName: '',
  controlsBtnClassName: '',
  progressBarContClassName: '',
  progressBarClassName: '',
  progressBarTrackColor: '#6e6e6e',
  progressBarThumbColor: '#ffffff',
  progressBarProgressColor: '#f26f21',
  progressBarBufferColor: '#dcdcdc',
};
