import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const Heading = styled.h1`
  font-family: monospace;
  font-size: 38px;
  font-weight: normal;
  padding-left: 10px;
  border-left: 2px solid #000;

  ::-moz-selection {
    color: #000;
    background: #f9b4cb;
  }

  ::selection {
    color: #000;
    background: #f9b4cb;
  }
`;

export const Text = styled.p`
  max-width: 500px;
  font-family: 'Courier New', Courier, monospace;

  ::-moz-selection {
    color: #000;
    background: #f9b4cb;
  }

  ::selection {
    color: #000;
    background: #f9b4cb;
  }
`;

export const Tab = styled.span`
  display: inline-block;
  width: 1em;
`;
