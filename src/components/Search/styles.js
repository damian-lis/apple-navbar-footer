import styled from 'styled-components/macro';
import { formHidden, formShow } from './animations';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const FormContainer = styled.div``;
export const Form = styled.form``;
export const ButtonSearch = styled.button``;
export const Icon = styled.i``;
export const InputContainer = styled.div``;
export const InputDesktop = styled.input``;
export const InputMobile = styled.input``;
export const ButtonContainer = styled.div``;
export const ButtonCloseMobile = styled.button``;
export const ButtonCloseDesktop = styled.button``;
export const ButtonCancelMobile = styled.button``;

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  top: -${({ theme: { header } }) => header.height.default && header.height.default};
  background-color: transparent;

  ${FormContainer} {
    height: ${({ theme: { header } }) => header.height.default && header.height.default};
    width: 0;
    opacity: 0;
    margin: 0 auto;
    display: flex;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${({ search }) => (search ? formShow : formHidden)};
    animation-delay: ${({ search }) => (search ? '.7s' : '0')};
  }

  ${Form} {
    height: 100%;
    width: 100%;
    display: flex;
  }

  ${ButtonSearch} {
    color: #808080;
    background-color: transparent;
    width: 35px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  ${InputContainer} {
    height: 100%;
    width: 100%;
  }

  ${InputDesktop} {
    font-size: 17px;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    color: #808080;
    background-color: transparent;
  }

  ${InputMobile} {
    display: none;
    font-size: 17px;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    color: #808080;
  }

  ${ButtonContainer} {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${ButtonCloseMobile} {
    display: none;
  }

  ${ButtonCloseDesktop} {
    display: block;
    background-color: transparent;
    cursor: pointer;
    color: #808080;
  }

  ${ButtonCancelMobile} {
    display: none;
  }

  @media (max-width: ${tabletBp}) {
    z-index: -1;
    height: ${({ search }) => (search ? '110vh' : '0')};
    width: 100%;
    max-width: 100%;
    top: -${({ theme: { header } }) => header.height.mobile && header.height.mobile};
    padding-top: ${({ theme: { header } }) => header.height.mobile && header.height.mobile};
    transition: 0.5s;
    background-color: black;
    overflow: hidden;

    ${FormContainer} {
      animation: none;
      opacity: 1;
      height: 55px;
      width: 100%;
      padding: 0 3% 15px 3%;
      border-bottom: 1px solid #1e1e1e;
    }

    ${ButtonSearch} {
      background-color: #1e1e1e;
      padding: 0 10px;
    }

    ${InputDesktop} {
      display: none;
    }

    ${InputMobile} {
      display: block;
      background-color: #1e1e1e;
    }

    ${ButtonContainer} {
      background-color: #1e1e1e;
    }

    ${ButtonCloseMobile} {
      display: block;
      visibility: ${({ keyword }) => (keyword && keyword.length > 0 ? 'visible' : 'hidden')};
      background-color: #808080;
      color: #1e1e1e;
      height: 17px;
      padding: 3px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ${ButtonCloseDesktop} {
      display: none;
    }

    ${ButtonCancelMobile} {
      display: block;
      width: ${({ inputClick }) => (inputClick ? '100px' : '0')};
      overflow: hidden;
      background-color: transparent;
      color: #2997ff;
    }
  }
`;
