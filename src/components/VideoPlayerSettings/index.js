import {
  VideoPlayerSettingsCont,
  SettingsHeaderBlock,
  SettingsBodyBlock,
  SettingBodyBtn,
  BlockTitle,
  BlockValues,
} from './index.styled';

const videoSettings = {
  videoUrl: [
    {
      id: 'harryPotter',
      value:
        'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1881/videos/misc/mp4/trailer/HGO-TW-001-A1881-Z05-406p-800k.mp4',
      name: 'Harry Potter 20th Anniversay - Return to Hogwarts',
      key: 'url',
      endLabel: "I'm an Harry Potter fan!",
      inputType: 'radio',
    },
    {
      id: 'goldLeaf',
      value:
        'https://tra-ww000-cp.akamaized.net/PTS-TW-D0006-01/videos/misc/mp4/trailer/PTS-TW-D0006-01-Z01-406p-800k.mp4',
      name: 'Gold Leaf',
      key: 'url',
      endLabel: 'Taiwanese series are the best!',
      inputType: 'radio',
    },
    {
      id: 'dune',
      value:
        'https://tra-ww000-cp.akamaized.net/HGO-TW-001-A1783/videos/misc/mp4/trailer/HGO-TW-001-A1783-Z01-406p-800k.mp4',
      name: 'Dune',
      key: 'url',
      endLabel: 'Recommend me anything!',
      inputType: 'radio',
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
      endLabel: '(secs)',
      inputType: 'number',
      min: 0,
      max: 100,
    },
    {
      id: 'forwardByDuration',
      frontLabel: 'Forward Duration',
      endLabel: '(secs)',
      inputType: 'number',
      min: 0,
      max: 100,
    },
  ],
  videoStyling: [
    {
      id: 'videoWidth',
      frontLabel: 'Width Of Video',
      endLabel: '(allows any css width value)',
      inputType: 'text',
    },
    {
      id: 'videoHeight',
      frontLabel: 'Height Of Video',
      endLabel: '(allows any css height value)',
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
    const selected = videoSettings.videoUrl.find((el) => el.value === url);
    return selected.name;
  };

  const getGroupLabelText = (groupLabel) => {
    switch (groupLabel) {
      case 'videoUrl':
        return 'Url Settings';
      case 'videoConfigs':
        return 'Configuration Settings';
      case 'videoPlaySettings':
        return 'Play Settings';
      case 'videoStyling':
        return 'Styling Settings';
      default:
        return '';
    }
  };

  const getInputCheckedValue = ({ id, key, inputType, value }) => {
    if (inputType === 'checkbox') return rest[id];
    if (inputType === 'radio') return rest[key] === value;
    return undefined;
  };

  return (
    <VideoPlayerSettingsCont>
      <form>
        <div>
          <SettingsHeaderBlock>
            <h2>Currently Playing: </h2>
            <h1>{getCurrentVideoName(rest.url)}</h1>
          </SettingsHeaderBlock>
        </div>

        <div>
          {Object.keys(videoSettings).map((settingKey) => {
            const settings = videoSettings[settingKey];

            return (
              <SettingsBodyBlock key={settingKey}>
                <BlockTitle>{getGroupLabelText(settingKey)}</BlockTitle>

                <BlockValues>
                  {settings.map((setting) => (
                    <label htmlFor={setting.id} key={setting.id}>
                      {setting.frontLabel && <span>{setting.frontLabel}</span>}
                      <input
                        type={setting.inputType}
                        id={setting.id}
                        name={setting.key || setting.id}
                        value={setting.value || rest[setting.id]}
                        checked={getInputCheckedValue(setting)}
                        onChange={onChangeSettings}
                      />
                      {setting.endLabel && <span>{setting.endLabel}</span>}
                    </label>
                  ))}
                </BlockValues>
              </SettingsBodyBlock>
            );
          })}
        </div>
      </form>

      <SettingBodyBtn type="button" onClick={onResetSettings}>
        Reset Settings
      </SettingBodyBtn>
    </VideoPlayerSettingsCont>
  );
}

export default VideoPlayerSettings;
