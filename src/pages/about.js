import React from "react";
// import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
// import kebabCase from 'lodash/kebabCase'

import { Layout, Wrapper, Header, SectionTitle } from "../components";
import config from "../../config";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`;

const About = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`À propos | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <SectionTitle>À propos</SectionTitle>
        <div>
          J'ai appris à coder sur le tas. D'abord en copiant des bouts de code,
          puis aux contacts des autres. J'ai toujours été fasciné par la magie
          du terminal, mystifié depuis les années 80 par Matthew Broderick en
          train de modifier ses bulletins de notes et ses absences à distance
          que ce soit dans War Games ou dans Ferries Bueller. L'incroyable
          efficacité du code, son pouvoir à travers l'espace, son implacable
          logique. Le manichéisme d'un monde parfaitement binaire. Et puis la
          beauté des lignes bien usinées, comme des pièces mécaniques.
        </div>
      </Content>
    </Wrapper>
  </Layout>
);

export default About;
