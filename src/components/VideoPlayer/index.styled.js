import styled from 'styled-components';

export const PlayerCont = styled.div`
  position: relative;

  video {
    width: 100%;
    height: auto;
  }
`;

export const ControlsCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 16px 0;
  transition: opacity 0.5s;
  opacity: 0;

  ${PlayerCont}:hover & {
    opacity: 1;
  }
`;

export const ControlBtn = styled.button`
  color: #fff;
  margin: 0 15px;
  padding: 0;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 32px;
    width: 32px;
  }
`;

export const ProgressBarCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBarText = styled.span`
  color: #fff;
  font-size: 12px;
  padding: 0 8px;
`;

export const ProgressBarInput = styled.input`
  flex: 1;
`;
