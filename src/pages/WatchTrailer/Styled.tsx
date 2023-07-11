import { Modal } from 'react-bootstrap'
import styled from 'styled-components/macro'
import BgImage from 'assets/images/WatchTrailer/watch_trailer_bg.png'
import ButtonBg from 'assets/images/WatchTrailer/button_bg.png'
import { FaPlay } from 'react-icons/fa'

export const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0;

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0) 56.84%,
      rgba(0, 0, 0, 0) 67.32%,
      #000000 100%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`

export const ContentImage = styled.img`
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: 992px) {
    width: auto;
  }
`

export const StyledButton = styled.button`
  position: relative;
  background: transparent;
  background-image: url(${ButtonBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  display: flex;
  width: 200px;
  height: 53.82px;
  margin: auto;
  margin-top: 1rem;
  transition: all 0.3s ease;
  z-index: 1;

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 576px) {
    width: 241px;
    height: 63.82px;
  }
`

export const StyledModal = styled(Modal)`
  .modal-dialog {
    background: transparent;
    top: 50%;
    transform: translateY(-50%) !important;
  }

  .modal-content {
    background: transparent;

    @media (min-width: 1200px) {
      width: fit-content;
      margin: auto;
    }
  }

  .modal-header {
    .btn-close {
      display: none;
    }
  }
`

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 170px;

  @media (min-width: 375px) {
    height: 200px;
  }

  @media (min-width: 576px) {
    height: 280px;
  }

  @media (min-width: 992px) {
    height: 450px;
  }

  @media (min-width: 1200px) {
    width: 798px;
  }

  @media (min-width: 1400px) {
    width: 1085px;
    height: 610px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const PlayImage = styled(FaPlay)`
  font-size: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  cursor: pointer;

  @media (min-width: 576px) {
    font-size: 60px;
  }

  @media (min-width: 992px) {
    font-size: 70px;
  }
`
