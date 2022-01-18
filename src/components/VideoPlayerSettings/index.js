import { VideoPlayerSettingsCont } from './index.styled';

function VideoPlayerSettings({ onChangeSettings, onResetSettings, ...rest }) {
  return (
    <VideoPlayerSettingsCont>
      <form>
        <div>
          <label htmlFor="url">
            MP4 Url
            <input type="text" id="url" name="url" value={rest.url} onChange={onChangeSettings} />
          </label>
        </div>

        <div>
          <label htmlFor="backwardByDuration">
            Backward Duration
            <input
              type="number"
              min="0"
              max="100"
              id="backwardByDuration"
              name="backwardByDuration"
              value={rest.backwardByDuration}
              onChange={onChangeSettings}
            />
            (secs)
          </label>

          <label htmlFor="forwardByDuration">
            Forward Duration
            <input
              type="number"
              min="0"
              max="100"
              id="forwardByDuration"
              name="forwardByDuration"
              value={rest.forwardByDuration}
              onChange={onChangeSettings}
            />
            (secs)
          </label>
        </div>

        <div>
          <label htmlFor="isShowControls">
            <input
              type="checkbox"
              id="isShowControls"
              name="isShowControls"
              checked={rest.isShowControls}
              onChange={onChangeSettings}
            />
            Show Video Player Controls
          </label>

          <label htmlFor="isPreload">
            <input
              type="checkbox"
              id="isPreload"
              name="isPreload"
              checked={rest.isPreload}
              onChange={onChangeSettings}
            />
            Preload Video
          </label>

          <label htmlFor="isLoop">
            <input
              type="checkbox"
              id="isLoop"
              name="isLoop"
              checked={rest.isLoop}
              onChange={onChangeSettings}
            />
            Loop Video
          </label>

          <label htmlFor="isMuted">
            <input
              type="checkbox"
              id="isMuted"
              name="isMuted"
              checked={rest.isMuted}
              onChange={onChangeSettings}
            />
            Mute Video
          </label>
        </div>

        <div>
          <label htmlFor="videoWidth">
            <input
              type="text"
              id="videoWidth"
              name="videoWidth"
              value={rest.videoWidth}
              onChange={onChangeSettings}
            />
            Width Of Video
          </label>

          <label htmlFor="videoHeight">
            <input
              type="text"
              id="videoHeight"
              name="videoHeight"
              value={rest.videoHeight}
              onChange={onChangeSettings}
            />
            Height Of Video
          </label>
        </div>

        <div>
          <label htmlFor="progressBarTrackColor">
            <input
              type="color"
              id="progressBarTrackColor"
              name="progressBarTrackColor"
              value={rest.progressBarTrackColor}
              onChange={onChangeSettings}
            />
            Color of Video Track
          </label>

          <label htmlFor="progressBarThumbColor">
            <input
              type="color"
              id="progressBarThumbColor"
              name="progressBarThumbColor"
              value={rest.progressBarThumbColor}
              onChange={onChangeSettings}
            />
            Color of Video Thumb
          </label>

          <label htmlFor="progressBarProgressColor">
            <input
              type="color"
              id="progressBarProgressColor"
              name="progressBarProgressColor"
              value={rest.progressBarProgressColor}
              onChange={onChangeSettings}
            />
            Color of Video Progress
          </label>

          <label htmlFor="progressBarBufferColor">
            <input
              type="color"
              id="progressBarBufferColor"
              name="progressBarBufferColor"
              value={rest.progressBarBufferColor}
              onChange={onChangeSettings}
            />
            Color of Video Buffer
          </label>
        </div>
      </form>

      <button type="button" onClick={onResetSettings}>
        Reset Settings
      </button>
    </VideoPlayerSettingsCont>
  );
}

export default VideoPlayerSettings;
