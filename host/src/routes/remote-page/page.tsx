/** @jsxImportSource theme-ui */
import React from "react";
import { kit, loadRemote } from "@module-federation/modern-js/runtime";
import {
  PageContainer,
  MainContainer,
  Header,
  Title,
  Subtitle,
  ContentBox,
  ButtonWrapper,
  BackButton,
  LoadingBox,
  LoadingText,
  ErrorBox,
  ErrorText,
} from "./page.styles";

const RemotePageComponent = kit.createRemoteSSRComponent({
  loader: () => loadRemote("remote/RemotePage"),
  loading: (
    <LoadingBox
      sx={{
        padding: 5,
        textAlign: "center",
        color: "gray",
      }}
    >
      <LoadingText sx={{ fontSize: 5, marginBottom: 3 }}>⏳</LoadingText>
      <LoadingText>Loading remote page component...</LoadingText>
    </LoadingBox>
  ),
  fallback: ({ error }: { error: Error }) => {
    return (
      <ErrorBox
        sx={{
          padding: 5,
          bg: "white",
          borderRadius: 0,
          borderLeft: "4px solid #c53030",
          color: "#c53030",
          textAlign: "center",
        }}
      >
        <ErrorText sx={{ fontSize: 5, marginBottom: 3 }}>⚠️</ErrorText>
        <ErrorText>Error loading remote component</ErrorText>
        <ErrorText sx={{ fontSize: 1, marginTop: 2 }}>{error.message}</ErrorText>
      </ErrorBox>
    );
  },
});

const RemotePage = () => {
  return (
    <PageContainer
      sx={{
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <MainContainer sx={{ maxWidth: "1200px" }}>
        <Header
          as="header"
          sx={{
            textAlign: "center",
            marginBottom: 5,
            color: "#1e3a8a",
          }}
        >
          <Title
            as="h1"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: "bold",
              marginBottom: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            🏠 Host - Remote Page
          </Title>
          <Subtitle
            sx={{
              fontSize: [2, 3],
              opacity: 0.9,
            }}
          >
            This page uses a federated component from the remote module
          </Subtitle>
        </Header>

        <ContentBox
          sx={{
            bg: "white",
            borderRadius: 0,
            padding: 4,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <RemotePageComponent />
        </ContentBox>

        <ButtonWrapper
          sx={{
            marginTop: 4,
            textAlign: "center",
          }}
        >
          <BackButton
            onClick={() => (window.location.href = "/")}
            variant="success"
            sx={{
              padding: 3,
              fontSize: 2,
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </BackButton>
        </ButtonWrapper>
      </MainContainer>
    </PageContainer>
  );
};

export default RemotePage;
