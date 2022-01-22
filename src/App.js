import { useState } from 'react';
import TvScreen from './components/TvScreen';
import VideoPlayer from './components/VideoPlayer/index';
import VideoPlayerSettings from './components/VideoPlayerSettings/index';
import { defaultProps } from './props';
import { GlobalStyle } from './Global.styled';
import { AppCont } from './App.styled';

function App() {
  const [settings, setSettings] = useState(defaultProps);

  const onChangeSettings = (event) => {
    const { name, value, checked, type } = event.target;

    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type !== 'checkbox' ? value : checked,
    }));
  };

  const onResetSettings = () => {
    setSettings(defaultProps);
  };

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
    <AppCont>
      <GlobalStyle />

      <TvScreen />
      {/* <VideoPlayer
        {...settings}
        playerContClassName="player-cont"
        onPlayCallback={onPlay}
        onPauseCallback={onPause}
        onEndCallback={onEnd}
        onSeekCallback={onSeek}
        onSkippedCallback={onSkipped}
      />

      <VideoPlayerSettings
        {...settings}
        onChangeSettings={onChangeSettings}
        onResetSettings={onResetSettings}
      /> */}
    </AppCont>
  );
}

export default App;
