/** @jsxImportSource theme-ui */
import {
  Container,
  Header,
  Title,
  Description,
  FeaturesBox,
  FeaturesTitle,
  FeaturesList,
} from "./index.styles";

const RemotePage = () => {
  return (
    <Container
      sx={{
        padding: 5,
        background: "white",
        borderRadius: 0,
        color: "#2d3748",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Header
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        <Title
          as="h1"
          sx={{
            fontSize: [4, 5, 6],
            fontWeight: "bold",
            marginBottom: 3,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          🎯 Remote Page Component
        </Title>
        <Description
          sx={{
            fontSize: [2, 3],
            opacity: 0.9,
          }}
        >
          This component is loaded from the remote module via Module Federation
        </Description>
      </Header>

      <FeaturesBox
        sx={{
          background: "#f8f9fa",
          padding: 4,
          borderRadius: 0,
        }}
      >
        <FeaturesTitle as="h3" sx={{ marginBottom: 3 }}>
          Features:
        </FeaturesTitle>
        <FeaturesList
          as="ul"
          sx={{
            lineHeight: "2",
            fontSize: [2, 3],
            margin: 0,
            paddingLeft: 4,
          }}
        >
          <li>✨ Exported from remote module (port 3052)</li>
          <li>🔗 Imported dynamically in host module</li>
          <li>🚀 Module Federation in action</li>
          <li>⚡ Independent deployment</li>
        </FeaturesList>
      </FeaturesBox>
    </Container>
  );
};

export default RemotePage;
