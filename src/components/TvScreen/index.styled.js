import styled, { css, keyframes } from 'styled-components';

export const TvCont = styled.div`
  width: 80vw;
  max-width: 880px;
  max-height: 490px;
  padding-bottom: 48%;
  // height: 80vh;
  // max-width: 880px;
  // padding-left: 15%;
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
  padding: 15px 0 30px 0;
  box-sizing: border-box;
`;

export const DialBtnCont = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
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
  cursor: pointer;
`;

export const DialBtn = styled.button`
  height: 10vw;
  width: 10vw;
  border-radius: 50%;
  border: none;
  margin: 10px;
  position: relative;
  background-color: #f0edee;

  &::after {
    content: '';
    width: 10px;
    height: 5vw;
    background-color: #dc675a;
    position: absolute;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0);
    cursor: grab;
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
`;

export const Feet = styled.div`
  width: 100%;
  height: 80px;
  background-image: linear-gradient(115deg, transparent 15%, #252a3a 15% 18%, transparent 18%),
    linear-gradient(-115deg, transparent 15%, #252a3a 15% 18%, transparent 18%);
  position: absolute;
  bottom: -100px;
`;
