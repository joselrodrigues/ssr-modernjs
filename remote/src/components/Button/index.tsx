/** @jsxImportSource theme-ui */
import { useAsyncValue } from "@modern-js/runtime/router";
import {
  Container,
  Title,
  BannersWrapper,
  BannerTag,
  NoDataText,
} from "./index.styles";

const Button = () => {
  const data = useAsyncValue() as { banners: string[] };

  return (
    <Container
      sx={{
        padding: 4,
        background: "white",
        borderRadius: 0,
        color: "#2d3748",
      }}
    >
      <Title as="h2" sx={{ margin: "0 0 3 0" }}>
        Remote Component
      </Title>

      {data?.banners && data.banners.length > 0 ? (
        <BannersWrapper sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {data.banners.map((banner, index) => (
            <BannerTag
              key={index}
              sx={{
                padding: "2 3",
                background: "#f8f9fa",
                borderRadius: 0,
              }}
            >
              {banner}
            </BannerTag>
          ))}
        </BannersWrapper>
      ) : (
        <NoDataText>No banners available</NoDataText>
      )}
    </Container>
  );
};

export default Button;
