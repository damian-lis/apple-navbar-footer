import {
  Container,
  FormContainer,
  Form,
  ButtonSearch,
  Icon,
  InputContainer,
  InputDesktop,
  InputMobile,
  ButtonContainer,
  ButtonCloseMobile,
  ButtonCloseDesktop,
  ButtonCancelMobile
} from './styles';

export default function Search({ searchRef, children, ...restProps }) {
  return (
    <Container ref={searchRef} {...restProps}>
      {children}
    </Container>
  );
}

Search.FormContainer = function SearchFormContainer({ children, ...restProps }) {
  return <FormContainer {...restProps}>{children}</FormContainer>;
};

Search.Form = function SearchForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Search.ButtonSearch = function SearchButtonSearch({ children, ...restProps }) {
  return <ButtonSearch {...restProps}>{children}</ButtonSearch>;
};

Search.Icon = function SearchIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Search.InputContainer = function SearchInputContainer({ children, ...restProps }) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
};

Search.ButtonContainer = function SearchButtonContainer({ children, ...restProps }) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Search.InputDesktop = function SearchInputDesktop({ children, ...restProps }) {
  return <InputDesktop {...restProps}>{children}</InputDesktop>;
};

Search.ButtonCloseDesktop = function SearchButtonCloseDesktop({ children, ...restProps }) {
  return <ButtonCloseDesktop {...restProps}>{children}</ButtonCloseDesktop>;
};

Search.InputMobile = function SearchInputMobile({ children, ...restProps }) {
  return <InputMobile {...restProps}>{children}</InputMobile>;
};

Search.ButtonCloseMobile = function SearchButtonCloseMobile({ children, ...restProps }) {
  return <ButtonCloseMobile {...restProps}>{children}</ButtonCloseMobile>;
};

Search.ButtonCancelMobile = function SearchButtonCancelMobile({ children, ...restProps }) {
  return <ButtonCancelMobile {...restProps}>{children}</ButtonCancelMobile>;
};
