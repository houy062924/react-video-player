import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer/index';
import VideoPlayerSettings from './components/VideoPlayerSettings/index';
import { defaultProps } from './props';
import { GlobalStyle } from './Global.styled';

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
    <div className="App">
      <GlobalStyle />
      <VideoPlayer
        {...settings}
        videoWidth="50vw"
        videoHeight="auto"
        onPlayCallback={onPlay}
        onPauseCallback={onPause}
        onEndCallback={onEnd}
        onSeekCallback={onSeek}
        onSkippedCallback={onSkipped}
      />

      <VideoPlayerSettings
        {...settings}
        videoWidth="50vw"
        videoHeight="auto"
        onChangeSettings={onChangeSettings}
        onResetSettings={onResetSettings}
      />
    </div>
  );
}

export default App;
