/** @jsxImportSource theme-ui */
import React from "react";
import { Text } from "theme-ui";
import { kit, loadRemote } from "@module-federation/modern-js/runtime";
import {
  PageContainer,
  MainContainer,
  ButtonGroup,
  NavButton,
  Header,
  Title,
  Subtitle,
  ContentBox,
  InfoBox,
  InfoTitle,
  InfoText,
} from "./page.styles";

const RemoteHome = kit.createRemoteSSRComponent({
  loader: () => loadRemote("remote/Home"),
  loading: <Text>loading...</Text>,
  fallback: ({ error }: { error: Error }) => {
    if (error instanceof Error && error.message.includes("not exist")) {
      return <Text>fallback - not existed id</Text>;
    }
    return <Text>fallback</Text>;
  },
});

const Index = () => {
  return (
    <PageContainer>
      <MainContainer>
        <Header as="header">
          <Title as="h1">🏠 Host Application</Title>
          <Subtitle>Module Federation Demo - Main Container</Subtitle>
        </Header>

        <ContentBox>
          <InfoBox>
            <InfoTitle as="h2">📦 Remote Component</InfoTitle>
            <InfoText>
              Loading federated module from remote application...
            </InfoText>
          </InfoBox>

          <RemoteHome />
        </ContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Index;
