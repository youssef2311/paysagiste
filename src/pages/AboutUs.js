import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";

// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import  Header,{ NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import Steps from "components/features/ThreeColCenteredStatsPrimaryBackground"


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
    ${({ padding }) =>
    padding &&
    css`
      margin-top: ${padding};
    `}
`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default 
() => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink style={{fontWeight:"bold",margin:"10px", color:"black"}} href="/aboutus">
      Notre entreprise
      </NavLink>
      <NavLink  style={{fontWeight:"bold",margin:"10px", color:"black"}}  href="#">
      Aménagements extérieurs
      </NavLink>
      <NavLink  style={{fontWeight:"bold",margin:"10px", color:"black"}} href="#">
      Entretien espaces verts
      </NavLink>
      <NavLink   style={{fontWeight:"bold",margin:"10px", color:"black"}} href="#">
      Nos réalisations
      </NavLink>
    
      <NavLink   style={{fontWeight:"bold",margin:"10px", color:"black"}} href="#">
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
    <AnimationRevealPage >
      <StyledHeader padding="0px"  links={navLinks} />
  
     
      <Steps />
 
    
      <Footer />
    </AnimationRevealPage>
  );
};
