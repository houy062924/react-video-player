import styled from 'styled-components';

export const VideoPlayerSettingsCont = styled.div`
  width: 80vw;
  margin: 20px auto 64px auto;
`;

export const SettingsHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0 0 48px 0;
  }

  h2 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const SettingsBodyBlock = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 16px 48px;
  border-bottom: 1px solid #939595;

  &:last-child {
    border-bottom: none;
  }
`;

export const SettingBodyBtn = styled.button`
  margin-left: auto;
  display: block;
`;

export const BlockTitle = styled.h3`
  margin: 0;
`;

export const BlockValues = styled.div`
  label {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }

  input {
    margin: 0 8px;
  }

  span {
    line-height: 26px;
  }
`;
