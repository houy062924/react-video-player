import styled from 'styled-components';

export const PlayerCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const PlayerVideo = styled.video`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ControlsCont = styled.div`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 16px 0;
  // background-color: rgba(232, 232, 232, 0.5);
  transition: opacity 0.5s;
  opacity: 0;
  z-index: 10;

  ${PlayerCont}:hover & {
    opacity: 1;
  }
`;

export const ControlBtn = styled.div`
  color: #fff;
  margin: 0 1.5%;
  padding: 0;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  width: 4%;
  max-width: 32px;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const SkipByText = styled.span`
  font-size: 10px;
  position: absolute;
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
  letter-spacing: 1px;
`;

export const ProgressBarInput = styled.input`
  flex: 1;

  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    position: relative;

    &:focus {
      outline: transparent;
    }

    // track
    &::-webkit-slider-runnable-track {
      background-color: ${({ trackColor }) => trackColor};
      border-radius: 20px;
      height: 8px;
    }

    &::-moz-range-track {
      background-color: ${({ trackColor }) => trackColor};
      border-radius: 20px;
      height: 8px;
    }

    &::-ms-track {
      background-color: ${({ trackColor }) => trackColor};
      border-radius: 20px;
      height: 8px;
    }

    // thumb
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: ${({ thumbColor }) => thumbColor};
      margin: -6px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: ${({ thumbColor }) => thumbColor};
      margin: -6px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    &::-ms-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: ${({ thumbColor }) => thumbColor};
      margin: -6px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    // progress
    &::before {
      content: '';
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: ${({ progressColor }) => progressColor};
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    &::-moz-range-progress {
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: ${({ progressColor }) => progressColor};
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    &::-ms-fill-lower {
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: ${({ progressColor }) => progressColor};
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    // buffer
    &::after {
      content: '';
      width: ${({ bufferBarWidth }) => bufferBarWidth};
      height: 8px;
      background-color: ${({ bufferColor }) => bufferColor};
      border-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 1;
    }
  }
`;
