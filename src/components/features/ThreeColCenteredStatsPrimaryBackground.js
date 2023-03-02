import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import team from "../../img/team.png"





const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-500 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

export default ({
  subheading = "",
  heading = "Notre Entreprise",
  description = "Bienvenue sur le site de Jean Baptiste Dugois Paysagiste, basé à ‘‘ Les Arsures’’ dans le Jura.\nNous sommes spécialisés dans les aménagements extérieurs, la création de jardins, les espaces verts et la maçonnerie paysagère depuis 2016.\nNous proposons une large gamme de services pour répondre à tous vos besoins en matière d'aménagements extérieurs. Nous réalisons des aménagements sur mesure, des plantations, des créations de terrasses et de bassins de toutes dimensions. Nous exécutons également la pose de clôtures, l'entretien régulier ou ponctuel, la tonte et la taille, l'élagage, l'abattage.\nSitué près d'Arbois, Poligny et Salins les Bains, nous sommes à votre disposition pour tous vos projets de paysagisme dans la région. Notre équipe de professionnels expérimentés est à l'écoute de vos besoins et vous accompagne tout au long du processus, de la conception à la réalisation.\nN'hésitez pas à nous contacter pour toute demande de renseignements ou de devis. Nous serons ravis de vous aider à réaliser votre projet d'aménagement extérieur de rêve.",

  stats = [
    {
      key: "",
      value: "",
    },
    {
      key: "",
      value: "",
    },
    {
      key: "",
      value: "",
    },
  ]
}) => {
  return (
    <Container style={{backgroundColor:"#edf2f7"}}>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading style={{color:"black"}}>{subheading}</Subheading>}
          <Heading style={{color:"black"}}>{heading}</Heading>
          {description && <Description style={{color:"black"}}>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
        <div style={{display:'flex', justifyContent:'center'}}>
      <img  width="750"  alt="worker" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/334500790_523114506614360_904491168318383583_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XgEGm37zIq0AX-ay9TD&_nc_oc=AQmWya4wuArkyuIQReZ3gub117isEAizBpgTHlt5aPyS17A9Zar4bt4c4rBoGqwq66I&_nc_ht=scontent.ftun2-2.fna&oh=03_AdReh41UndrSjBkjiFFRwlpGWTUJBl9wJ6wofdUWfFtYhQ&oe=6427E417" />
      </div>
      </ContentWithPaddingXl>
     
    </Container>
  );
};
