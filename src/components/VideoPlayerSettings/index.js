import { VideoPlayerSettingsCont } from './index.styled';

const videoUrlOptions = [
  {
    id: 'harryPotter',
    url: 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4',
    name: 'Harry Potter 20th Anniversay - Return to Hogwarts',
    label: "I'm an Harry Potter fan!",
  },
  {
    id: 'goldLeaf',
    url: 'https://tra-ww000-cp.akamaized.net/PTS-TW-D0006-01/videos/misc/mp4/trailer/PTS-TW-D0006-01-Z01-406p-800k.mp4',
    name: 'Gold Leaf',
    label: 'Taiwanese series are the best!',
  },
  {
    id: 'dune',
    url: 'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1783/videos/misc/mp4/trailer/HGO-TW-001-A1783-Z01-406p-800k.mp4',
    name: 'Dune',
    label: 'Recommend me anything!',
  },
];

const videoSettings = {
  videoUrl: [
    {
      id: 'isShowControls',
      endLabel: 'Show Video Player Controls',
      inputType: 'radio',
      options: videoUrlOptions,
    },
  ],
  videoConfigs: [
    {
      id: 'isShowControls',
      endLabel: 'Show Video Player Controls',
      inputType: 'checkbox',
    },
    {
      id: 'isPreload',
      endLabel: 'Preload Video',
      inputType: 'checkbox',
    },
    {
      id: 'isLoop',
      endLabel: 'Loop Video',
      inputType: 'checkbox',
    },
    {
      id: 'isMuted',
      endLabel: 'Mute Video',
      inputType: 'checkbox',
    },
  ],
  videoPlaySettings: [
    {
      id: 'backwardByDuration',
      frontLabel: 'Backward Duration',
      endLabel: '(sec)',
      inputType: 'number',
      min: 0,
      max: 100,
    },
    {
      id: 'forwardByDuration',
      frontLabel: 'Forward Duration',
      endLabel: '(sec)',
      inputType: 'number',
      min: 0,
      max: 100,
    },
  ],
  videoStyling: [
    {
      id: 'videoWidth',
      frontLabel: 'Width Of Video',
      inputType: 'text',
    },
    {
      id: 'videoHeight',
      frontLabel: 'Height Of Video',
      inputType: 'text',
    },
    {
      id: 'progressBarTrackColor',
      frontLabel: 'Color of Video Track',
      inputType: 'color',
    },
    {
      id: 'progressBarThumbColor',
      frontLabel: 'Color of Video Thumb',
      inputType: 'color',
    },
    {
      id: 'progressBarProgressColor',
      frontLabel: 'Color of Video Progress',
      inputType: 'color',
    },
    {
      id: 'progressBarBufferColor',
      frontLabel: 'Color of Video Buffer',
      inputType: 'color',
    },
  ],
};

function VideoPlayerSettings({ onChangeSettings, onResetSettings, ...rest }) {
  const getCurrentVideoName = (url) => {
    const selected = videoUrlOptions.find((el) => el.url === url);
    return selected.name;
  };

  const getGroupLabelText = (groupLabel) => {
    switch (groupLabel) {
      case 'videoUrl':
        return 'Video Url Settings';
      case 'videoConfigs':
        return 'Video Configuration Settings';
      case 'videoPlaySettings':
        return 'Video Play Settings';
      case 'videoStyling':
        return 'Video Styling Settings';
      default:
        return '';
    }
  };

  return (
    <VideoPlayerSettingsCont>
      <form>
        <div>
          <p>{`Currently Playing: ${getCurrentVideoName(rest.url)}`}</p>

          {videoUrlOptions.map((option) => (
            <label htmlFor={option.id} key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="url"
                checked={rest.url === option.url}
                value={option.url}
                onChange={onChangeSettings}
              />
              {option.label}
            </label>
          ))}
        </div>

        <div>
          {Object.keys(videoSettings).map((settingKey) => {
            const settings = videoSettings[settingKey];

            return (
              <div key={settingKey}>
                <p>{getGroupLabelText(settingKey)}</p>

                <div>
                  {settings.map((setting) => (
                    <label htmlFor={setting.id} key={setting.id}>
                      {setting.frontLabel && <span>{setting.frontLabel}</span>}
                      <input
                        type={setting.inputType}
                        id={setting.id}
                        name={setting.id}
                        value={rest[setting.id]}
                        checked={setting.inputType === 'checkbox' ? rest[setting.id] : undefined}
                        onChange={onChangeSettings}
                      />
                      {setting.endLabel && <span>{setting.endLabel}</span>}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </form>

      <button type="button" onClick={onResetSettings}>
        Reset Settings
      </button>
    </VideoPlayerSettingsCont>
  );
}

export default VideoPlayerSettings;
