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
  position: relative;
  top: -${({ theme: { header } }) => header.height.default && header.height.default};
  max-width: 680px;
  margin: 0 auto;
  background-color: transparent;

  ${FormContainer} {
    display: flex;
    height: ${({ theme: { header } }) => header.height.default && header.height.default};
    width: 0;
    margin: 0 auto;
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${({ search }) => (search ? formShow : formHidden)};
    animation-delay: ${({ search }) => (search ? '.7s' : '0')};
  }

  ${Form} {
    display: flex;
    height: 100%;
    width: 100%;
  }

  ${ButtonSearch} {
    width: 35px;
    background-color: transparent;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    color: #808080;
  }

  ${InputContainer} {
    height: 100%;
    width: 100%;
  }

  ${InputDesktop} {
    flex-grow: 1;
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-size: 17px;
    color: #808080;
  }

  ${InputMobile} {
    flex-grow: 1;
    display: none;
    height: 100%;
    width: 100%;
    font-size: 17px;

    color: #808080;
  }

  ${ButtonContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }

  ${ButtonCloseMobile} {
    display: none;
  }

  ${ButtonCloseDesktop} {
    display: block;
    background-color: transparent;
    color: #808080;
    cursor: pointer;
  }

  ${ButtonCancelMobile} {
    display: none;
  }

  @media (max-width: ${tabletBp}) {
    top: -${({ theme: { header } }) => header.height.mobile && header.height.mobile};
    height: ${({ search }) => (search ? '110vh' : '0')};
    width: 100%;
    max-width: 100%;
    padding-top: ${({ theme: { header } }) => header.height.mobile && header.height.mobile};
    background-color: black;
    transition: 0.5s;
    overflow: hidden;
    z-index: -1;

    ${FormContainer} {
      height: 55px;
      width: 100%;
      padding: 0 3% 15px 3%;
      border-bottom: 1px solid #1e1e1e;
      opacity: 1;
      animation: none;
    }

    ${ButtonSearch} {
      padding: 0 10px;
      background-color: #1e1e1e;
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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 17px;
      padding: 3px;
      background-color: #808080;
      border-radius: 50%;
      color: #1e1e1e;
      visibility: ${({ keyword }) => (keyword && keyword.length > 0 ? 'visible' : 'hidden')};
    }

    ${ButtonCloseDesktop} {
      display: none;
    }

    ${ButtonCancelMobile} {
      display: block;
      width: ${({ inputClick }) => (inputClick ? '100px' : '0')};
      background-color: transparent;
      color: #2997ff;
      overflow: hidden;
    }
  }
`;
