import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import conseil from "../../img/conseil.png"





const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-red-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-black`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
      "https://www.paysage-sharon.lu/wp-content/uploads/2023/01/Creation-terrasse.jpg",
      subtitle: "Création de terrasses :",
      title: "Création de terrasses :",
      description:
        "Nous créons des terrasse en bois «sur-mesure », afin de vous faire profiter des meilleurs moments de détente en extérieur. Nous pouvons réaliser différentes terrasse avec différentes matériaux dont  la terrasse en WPC (composite bois-polymère) et bois exotique en vous conseillant sur les technique dentretien pour maintenir votre terrasse en parfait état. Nous nous chargeons de la maîtrise dœuvre, du suivi des travaux à la réception des travaux « clef en main » en vous aidant à aménager votre terrasse pour créer un espace extérieur structuré, beau et qui vous correspond.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://www.paysage-sharon.lu/wp-content/uploads/2023/02/News-Petits-travaux-de-maconnerie-paysagere.jpg",
      subtitle: "Petits travaux de maçonnerie paysagère",
      title: "Petits travaux de maçonnerie paysagère : ",
      description:
        "Dans  la  mesure  du  budget  et  des  délais  impartis,  nous privilégions  la  création  d’objets  exclusifs  sur  mesure, meilleur  gage  d’originalité  et  de  visibilité  pour l’annonceur.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://www.paysage-sharon.lu/wp-content/uploads/2023/01/Brise-vue.jpg",
      subtitle: "Brises vues, espaliers, clôtures rigides",
      title: "Brises vues, espaliers, clôtures rigides :",
      description:
        "Nous réalisons des voyages d’exploration et assistons aux plus importants salons professionnels afin de dénicher les dernières nouveautés; Nous disposons d’autre part d’un accès internet à la plus grande base mondiale de Sourcing d’objets promotionnels existants.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://www.paysage-sharon.lu/wp-content/uploads/2023/02/Gabion-news.jpg",
      subtitle: "Installation électrique des éclairages",
      title: "Installation électrique des éclairages : ",
      description:
        "Dans  la  mesure  du  budget  et  des  délais  impartis,  nous privilégions  la  création  d’objets  exclusifs  sur  mesure, meilleur  gage  d’originalité  et  de  visibilité  pour l’annonceur.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://www.paysage-sharon.lu/wp-content/uploads/2023/02/Jeux-enfants-news.jpg",
      subtitle: "Installation des systèmes d’arrosages",
      title: "Installation des systèmes d’arrosages : ",
      description:
        "Dans  la  mesure  du  budget  et  des  délais  impartis,  nous privilégions  la  création  d’objets  exclusifs  sur  mesure, meilleur  gage  d’originalité  et  de  visibilité  pour l’annonceur.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://www.paysage-sharon.lu/wp-content/uploads/2023/01/Eclairage.jpg",
      subtitle: "Installation de robot autonome",
      title: "Installation de robot autonome : ",
      description:
        "Dans  la  mesure  du  budget  et  des  délais  impartis,  nous privilégions  la  création  d’objets  exclusifs  sur  mesure, meilleur  gage  d’originalité  et  de  visibilité  pour l’annonceur.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container id="About">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Notre passion</HeadingTitle>
          <HeadingDescription>
          vous accompagner dans votre développement et vous apporter  les  solutions  les  plus  adaptées  à  vos problématiques. <br />
          La communication est un métier nécessitant rigueur, méthode,  recherche,  réflexion,  créativité…  Et  ce, pour  vous  fournir  des  prestations  de  qualité  et toucher vos cibles.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Voir plus</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
