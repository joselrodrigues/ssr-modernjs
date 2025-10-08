/** @jsxImportSource theme-ui */
import {
  PageContainer,
  MainContainer,
  ContentBox,
  Title,
  Description,
} from "./page.styles";

const Spa = () => {
  return (
    <PageContainer
      sx={{
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <MainContainer sx={{ maxWidth: "800px" }}>
        <ContentBox
          sx={{
            bg: "white",
            borderRadius: 0,
            padding: 5,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Title
            as="h1"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: "bold",
              color: "primary",
              marginBottom: 3,
            }}
          >
            🎯 SPA Route
          </Title>
          <Description
            sx={{
              fontSize: [2, 3],
              color: "text",
            }}
          >
            This is a simple SPA page in your host application
          </Description>
        </ContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Spa;
