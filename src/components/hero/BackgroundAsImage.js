import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1472553384749-8596bacb90c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-10 `;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto `;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-green-500 font-medium text-sm`;

const PrimaryAction = tw.button`
  px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4
  bg-gray-100 text-green-600 font-bold rounded shadow
  transition duration-300 hocus:bg-green-500 hocus:text-white
  focus:outline-none focus:shadow-outline
`;


const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink style={{fontWeight:"bold",margin:"10px"}} href="#">
      Notre entreprise
      </NavLink>
      <NavLink  style={{fontWeight:"bold",margin:"10px"}}  href="#">
      Aménagements extérieurs
      </NavLink>
      <NavLink  style={{fontWeight:"bold",margin:"10px"}} href="#">
      Entretien espaces verts
      </NavLink>
      <NavLink   style={{fontWeight:"bold",margin:"10px"}} href="#">
      Nos réalisations
      </NavLink>
    
      <NavLink   style={{fontWeight:"bold",margin:"10px"}} href="#">
      Mentions légales

      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink style={{backgroundColor:"#578E44", fontWeight:"bold"}} href="/#">
      Contact
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader marginTop="10px"  links={navLinks} />
        <TwoColumn style={{paddingTop:"50px"}}>
          <LeftColumn>
            <Notification>Dugois Paysages</Notification>
            <Heading>
              <span>Aménagements extérieurs</span>
              <br />
              <SlantedBackground style={{color:"#578E44" }}>Un jardin qui vous ressemble.</SlantedBackground>
            </Heading>
            <PrimaryAction >En Savoir Plus</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            
            <StyledResponsiveVideoEmbed
              url="https://player.vimeo.com/video/803408070?h=1020b2bdf8?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
