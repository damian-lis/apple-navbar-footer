import {
  Container,
  BottomSection,
  CopyList,
  CopyItem,
  LegalList,
  LegalItem,
  LegalLink
} from './styles';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.BottomSection = function FooterBottomSection({ ...restProps }) {
  return <BottomSection {...restProps}></BottomSection>;
};

Footer.CopyList = function FooterCopy({ children, ...restProps }) {
  return <CopyList {...restProps}>{children}</CopyList>;
};

Footer.CopyItem = function FooterCopy({ children, ...restProps }) {
  return <CopyItem {...restProps}>{children}</CopyItem>;
};

Footer.LegalList = function FooterLegalList({ children, ...restProps }) {
  return <LegalList {...restProps}>{children}</LegalList>;
};

Footer.LegalItem = function FooterLegalItem({ children, ...restProps }) {
  return <LegalItem {...restProps}>{children}</LegalItem>;
};

Footer.LegalLink = function FooterLegalLink({ children, ...restProps }) {
  return <LegalLink {...restProps}>{children}</LegalLink>;
};
