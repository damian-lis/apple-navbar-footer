import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Container = styled.footer`
  background-color: rgb(250, 250, 250);
`;

export const BottomSection = styled.section``;

export const CopyList = styled.ul`
  padding: 10px 0;
  border-top: 1px solid rgb(210, 210, 210);
  font-size: 12px;
  color: rgb(130, 130, 130);

  @media (max-width: ${tabletBp}) {
    border-top: none;
  }
`;

export const CopyItem = styled.li`
  margin: 5px 0;
`;

export const LegalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 20px 0;
  border-top: 1px solid rgb(210, 210, 210);
  color: #1d1d1f;
  font-size: 12px;
`;

export const LegalItem = styled.li``;

export const LegalLink = styled(Link)`
  margin-top: 5px;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid rgb(210, 210, 210);
  color: #515154;

  &:last-of-type {
    border-right: none;
  }
  &:hover {
    color: #1d1d1f;
    text-decoration: underline;
  }
`;
