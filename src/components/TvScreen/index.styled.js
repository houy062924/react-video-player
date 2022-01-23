import styled, { css, keyframes } from 'styled-components';

export const TvCont = styled.div`
  width: 775px;
  height: 480px;
  background-color: #252a3a;
  margin: 0 auto;
  border-radius: 30px;
  border: 20px solid #505563;
  position: relative;
`;

export const ScreenCont = styled.div`
  width: calc(75% - 20px);
  height: calc(100% - 40px);
  margin: 20px;
  border-radius: 36px;
  background-color: #505563;
  border: 5px solid #f0edee;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  overflow: hidden;
`;

export const ControlCont = styled.div`
  width: calc(25% - 40px);
  height: calc(100% - 40px);
  margin: 20px 20px 20px 0;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  box-sizing: border-box;
`;

export const ChannelBtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px;
`;

export const ProgressBtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
`;

export const DialBtnCont = styled.div`
  height: 10vw;
  width: 10vw;
  border: none;
  border-radius: 50%;
  position: relative;
  margin: 20px auto 12px auto;
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 2px 2px 0px #505563;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ca3b2b;
    border-radius: 50%;
    padding: 4px;
    fill: #f0edee;
  }
`;

export const SpeakerCont = styled.div`
  flex-basis: 150px;
  margin-top: auto;
  background: repeating-linear-gradient(#505563, #252a3a 8px, #f0edee 8px, #f0edee 10px);
`;

export const PowerBtn = styled.button`
  height: 30px;
  width: 5vw;
  background-color: #ca3b2b;
  border: none;
  margin-left: auto;
  display: block;
  box-shadow: 2px 2px 0px #505563;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0edee;
  font-size: 18px;
  cursor: pointer;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  svg {
    stroke-width: 15px;
  }
`;

export const DialBtn = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: none;
  background-color: #f0edee;

  &:active::after {
    cursor: grabbing;
  }

  &::after {
    content: '';
    width: 10px;
    height: 5vw;
    background-color: #ca3b2b;
    position: absolute;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0);
    cursor: grab;
  }
`;

export const ChannelBtn = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  box-shadow: 2px 2px 0px #505563;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
		background-color: #CA3B2B;
	`};

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

export const ProgressBtn = styled.button`
  flex-basis: 60px;
  height: 25px;
  border-radius: 2px;
  border: none;
  box-shadow: 2px 2px 0px #505563;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #252a3a;
  cursor: pointer;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

const isOnKeyframe = keyframes`
  0% {
    transform: scale3d(0, 0, 1);
  }
  20% {
    transform: scale3d(1, 0.005, 1);
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const isOnOpacityKeyframe = keyframes`
  0% {
    background: rgba(105, 183, 190, 1);
  }
  10% {
    background: rgba(105, 183, 190, 1);
  }
  100% {
    background: rgba(105, 183, 190, 0);
  }
`;

const isOffKeyframe = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  20% {
    transform: scale3d(1, 0.005, 1);
  }
  100% {
    transform: scale3d(0, 0, 1);
  }
`;

const isOffOpacityKeyframe = keyframes`
  0% {
    background: rgba(105, 183, 190, 0);
  }
  10% {
    background: rgba(105, 183, 190, 1);
  }
  100% {
    background: rgba(105, 183, 190, 1);
  }
`;

export const ScreenEffect = styled.div`
  background: rgba(105, 183, 190, 1);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: ${({ isOn }) =>
    isOn
      ? css`
          ${isOnKeyframe} 400ms linear
        `
      : css`
          ${isOffKeyframe} 400ms linear
        `};
  animation-fill-mode: forwards;

  &::after {
    animation: ${({ isOn }) =>
      isOn
        ? css`
            ${isOnOpacityKeyframe} 400ms linear
          `
        : css`
            ${isOffOpacityKeyframe} 400ms linear
          `};
    animation-fill-mode: forwards;
  }

  .video-cont {
    height: 100%;
  }
`;

export const Antenna = styled.div`
  width: 7px;
  height: 190px;
  position: absolute;
  top: -170px;
  left: 30%;
  border-radius: 10px;
  background-color: #252a3a;
  transform: rotate(50deg);
  z-index: -1;

  &::after {
    content: '';
    width: 15px;
    height: 10px;
    background-color: #252a3a;
    top: 0;
    left: -4px;
    position: absolute;
    border-radius: 2px;
  }
`;

export const Feet = styled.div`
  width: 100%;
  height: 80px;
  background-image: linear-gradient(115deg, transparent 15%, #252a3a 15% 18%, transparent 18%),
    linear-gradient(-115deg, transparent 15%, #252a3a 15% 18%, transparent 18%);
  position: absolute;
  bottom: -100px;
`;
