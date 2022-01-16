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
      background-color: #6e6e6e;
      border-radius: 20px;
      height: 8px;
    }

    &::-moz-range-track {
      background-color: #6e6e6e;
      border-radius: 20px;
      height: 8px;
    }

    &::-ms-track {
      background-color: #6e6e6e;
      border-radius: 20px;
      height: 8px;
    }

    // thumb
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    &::-ms-thumb {
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0;
      z-index: 3;
      position: relative;
      cursor: pointer;
    }

    // progress
    &::before {
      content: '';
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: #f26f21;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    &::-moz-range-progress {
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: #f26f21;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    &::-ms-fill-lower {
      width: ${({ progressBarWidth }) => progressBarWidth};
      height: 8px;
      background-color: #f26f21;
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
      background-color: #dcdcdc;
      border-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 1;
    }
  }
`;