import styled from '@emotion/styled';
import { Box, Heading, Text, Container, Button } from 'theme-ui';

export const PageContainer = styled(Box)`
  min-height: 100vh;
  background: white;
  padding: 0;
`;

export const MainContainer = styled(Container)`
  max-width: 1200px;
  padding: 2rem;
  background: white;
`;

export const ButtonGroup = styled(Box)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
`;

export const NavButton = styled(Button)`
  cursor: pointer;
  padding: 1.5rem;
  font-size: 1.1rem;
`;

export const Header = styled(Box)`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  color: #1e3a8a;
`;

export const Title = styled(Heading)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled(Text)`
  font-size: 1.25rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ContentBox = styled(Box)`
  background: white;
  border-radius: 0;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const InfoBox = styled(Box)`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0;
  border-left: 4px solid #1e3a8a;
`;

export const InfoTitle = styled(Heading)`
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0 0 1rem 0;
`;

export const InfoText = styled(Text)`
  color: #718096;
  margin: 0;
  font-size: 0.95rem;
`;
