import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import './App.css';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Login() {
  return (
    <>
      <div>
      <Hero />

      </div>
    </>
  );
}

export default Login;
