import VideoPlayer from './components/VideoPlayer/index';
import { GlobalStyle } from './Global.styled';

function App() {
  const onPlay = () => {
    console.log('Video has started playing!');
  };

  const onPause = () => {
    console.log('Video has been paused!');
  };

  const onEnd = () => {
    console.log('Video has ended!');
  };

  const onSeek = (seekedTime) => {
    console.log(`Video progress has been changed to ${seekedTime}!`);
  };

  const onSkipped = (skipBy) => {
    console.log(`Video has been skipped ${skipBy} seconds!`);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <VideoPlayer
        mp4Url="https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4"
        forwardByDuration={10}
        backwardByDuration={10}
        isShowControls
        isPreload
        isLoop={false}
        isMuted={false}
        onPlayCallback={onPlay}
        onPauseCallback={onPause}
        onEndCallback={onEnd}
        onSeekCallback={onSeek}
        onSkippedCallback={onSkipped}
      />
    </div>
  );
}

export default App;
