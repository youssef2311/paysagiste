import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-red-700! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "COMMUNICATION COMMERCIALE",
  tabs = {
    Starters: [
      {
        imageSrc:
          "https://www.ideematic.com/wp-content/uploads/2018/03/strategie-editoriale-1-1024x1002.png",
        title: "Conception  éditoriale  et  rédactionnelle",
        content: "(magazine, webzine, lettre d’information...)",
       
      },
      {
        imageSrc:
          "https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description-1024x576.jpg",
        title: "Création  graphique  et  réalisation  de  support d’information",
        content: "(site  web,  dépliant,  plaquette, rapport d’activité)",
       
      },
      {
        imageSrc:
          "https://www.graphicstyle.fr/wp-content/uploads/charte-graphique-codes-2.jpg",
        title: "Création  éditoriale  et  graphique  de  document  de présentation",
        content: "(carte  de  visite,  plaquette,  catalogue,  site internet)",
   
      },
     
      {
        imageSrc:
          "https://www.amobat-ingenierie.com/wp-content/uploads/2019/09/page_amo-2.jpg",
        title: "Assistance à maitrise d’ouvrage",
        content: "(AMO) ",
      
      }
      ,
      {
        imageSrc:
          "https://pixelune.com/storage/2020/03/identitevisuelle_teledok.jpg",
        title: "Identité visuelle,",
        content: " logo et charte graphique",
     
      },
      {
        imageSrc:
          "https://abcmperformances.com/wp-content/uploads/2019/04/video-enjeu-webmarketing.png",
        title: "Diffusion online",
        content: "(e-citoyenneté) ",
    
      },
      {
        imageSrc:
          "https://www.idealco.fr/image/formation/1864.jpg?v=1583425969",
        title: "Campagne d’interêt général,",
        content: "concertation publique",
        
      },
      {
        imageSrc:
          "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2202/creer-une-boite-de-production-audiovisuelle.jpg",
        title: "Présentation audiovisuelle,",
        content: "vidéo ",
     
      },
   
      
      {
        imageSrc:
          "https://www.operationbusiness.fr/wp-content/uploads/2018/07/Lancement-produit.jpg",
        title: "Lancement de marque et de produits",
        content: "Stratégie de fidélisation clients",
      
      }
      ,
      {
        imageSrc:
          "https://www.keacrea.com/images/pages/site/refonte/etapes-refonte.png",
        title: "Création  et  refonte  de  site  internet",
        content: "(adapté  pour mobiles et tablettes)  ",
      
      }
      ,
      {
        imageSrc:
          "data:image/jpeg;base64,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",
        title: "Développement d’application mobile",
        content: "",
      
      }
      ,
      {
        imageSrc:
          "http://www.byfilling.com/hubfs/Visuels_Cahier_Des_Charges/visuel_top/choisir_son_hebergement_web_et_son_nom_de_domaine.png",
        title: "Hébergement et gestion de nom de domaine",
        content: "Webmastering et maintenance technique ",
      
      }
    ],
    Main: getRandomCards(),
    Soup: getRandomCards(),
    Desserts: getRandomCards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          {/* <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl> */}
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    {/* <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating> */}
                      {/* <CardReview>({card.reviews})</CardReview> 
                    </CardRatingContainer>*/}
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Voir plus</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    {/* <CardPrice>{card.price}</CardPrice> */}
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
