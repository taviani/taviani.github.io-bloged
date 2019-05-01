import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { darken, lighten } from 'polished'

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.bg};
  grid-column: 1 / -1;
  margin-top: 5rem;
  padding: 2rem 2rem 5rem 2rem;
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  font-size: 0.8rem;
  a {
    color: ${props => props.theme.colors.white};
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`

const Footer = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Footer

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
