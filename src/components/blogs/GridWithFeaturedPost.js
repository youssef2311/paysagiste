import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";
import LogoImage from "../../images/logo.jpg";

const HeadingContainer = tw.div`text-center `;
const Subheading = tw(SubheadingBase)`mb-4 `;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto `;

const Posts = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8 ` 
const PostTitle = tw.h6`font-bold group-hocus:text-red-700 transition duration-300 `;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-xs text-gray-600`;
const AuthorName = tw.div`font-semibold mt-2`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${props => props.featured && css`
    ${tw`w-full sm:w-full lg:w-2/3 `}
    ${Post} {
      ${tw`sm:flex-row items-center sm:pr-3 `}
    }
    ${PostImage} {
      ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
    }
    ${PostText} {
      ${tw`pl-8 pr-5`}
    }
    ${PostTitle} {
      ${tw`text-2xl`}
    }
    ${PostDescription} {
      ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
    }
    ${AuthorInfo} {
      ${tw`mt-8 flex items-center`}
    }
    ${AuthorName} {
      ${tw`mt-0 font-bold text-gray-700 text-sm`}
    }
  `}
`;

const DecoratorBlob1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`
const DecoratorBlob2 = tw(SvgDotPatternIcon)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`

export default ({
  subheading = "",
  heading = "Nos Articles",
  description = "",
  posts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1584987274840-919ff11490ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      authorImageSrc:
        "https://i.imgur.com/VjbXWDo.png",
      title: "Les avantages des jardins verticaux et comment les créer chez vous",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Dugois Paysages",
      authorProfile: "Dugois Paysages",
      url: "https://reddit.com",
      featured: true
    },
    {
      postImageSrc:
        "https://plus.unsplash.com/premium_photo-1673141390222-2bd01b623bf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
      title: "Les plantes d'ombre pour un jardin frais et agréable en été",
      authorName: "Dugois Paysages",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1506868544459-9bb3a18fbc94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Les principes essentiels d’un jardin bio",
      authorName: "Dugois Paysages",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://e-paysages.fr/wp-content/uploads/2022/11/plan-plantations.jpg",
      title: "Logiciel jardin 3D gratuit en ligne : et si la solution était e-paysages ?",
      authorName: "Dugois Paysages",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://e-paysages.fr/wp-content/uploads/2022/12/plan_1-Photo.jpg",
      title: "IDEE AMENAGEMENT JARDIN : 15 IDÉES INGÉNIEUSES, DÉCORATIVES ET FACILES À RÉALISER",
      authorName: "Dugois Paysages",
      url: "https://timerse.com"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && <PostDescription>{post.description}</PostDescription>}
                  <AuthorInfo>
                    {post.featured && <AuthorImage src={post.authorImageSrc} />}
                    <AuthorTextInfo>
                      <AuthorName>{post.authorName}</AuthorName>
                      {post.featured && <AuthorProfile>{post.authorProfile}</AuthorProfile>}
                    </AuthorTextInfo>
                  </AuthorInfo>
                </PostText>
              </Post>
            </PostContainer>
          ))}
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
