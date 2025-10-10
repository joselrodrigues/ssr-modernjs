/** @jsxImportSource theme-ui */
import { Suspense } from "react";
import BannerComponent from "../components/Button";
import BannerCarousel from "../components/Carousel/BannerCarousel";
import { getBanners } from "@/services/getBanners";
import { getCarouselBanners } from "@/services/getCarouselBanners";
import { useNavigate } from "@modern-js/runtime/router";

import { Await } from "@modern-js/runtime/router";
import {
  PageContainer,
  MainContainer,
  ButtonGroup,
  NavButton,
  Header,
  Title,
  Subtitle,
  ContentBox,
  LoadingBox,
  LoadingText,
  ErrorBox,
  ErrorText,
} from "./page.styles";

const Index = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <MainContainer>
        <ContentBox>
          <Suspense
            fallback={
              <LoadingBox>
                <LoadingText>⏳</LoadingText>
                <LoadingText>Loading carousel...</LoadingText>
              </LoadingBox>
            }
          >
            <Await
              resolve={getCarouselBanners()}
              errorElement={
                <ErrorBox>
                  <ErrorText>⚠️</ErrorText>
                  <ErrorText>Error loading carousel</ErrorText>
                </ErrorBox>
              }
            >
              <BannerCarousel />
            </Await>
          </Suspense>
        </ContentBox>

        <ButtonGroup>
          <NavButton onClick={() => navigate("/spa")} variant="success">
            Redirect to Spa page
          </NavButton>
          <NavButton onClick={() => navigate("/remote-page")} variant="success">
            Redirect to remote page
          </NavButton>
        </ButtonGroup>

        <Header as="header">
          <Title as="h1">🎨 Remote Application</Title>
          <Subtitle>Module Federation Demo - Remote Module Provider</Subtitle>
        </Header>

        <ContentBox>
          <Suspense
            fallback={
              <LoadingBox>
                <LoadingText>⏳</LoadingText>
                <LoadingText>Loading remote component...</LoadingText>
              </LoadingBox>
            }
          >
            <Await
              resolve={getBanners()}
              errorElement={
                <ErrorBox>
                  <ErrorText>⚠️</ErrorText>
                  <ErrorText>Error loading data</ErrorText>
                </ErrorBox>
              }
            >
              <BannerComponent />
            </Await>
          </Suspense>
        </ContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Index;
