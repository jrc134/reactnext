import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Device from './device'
import Border from './styled'
import styled, { ThemeProvider } from 'styled-components'
// npm run dev -> 

const Main = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

/* Color the border and text with theme.main */
color: ${props => props.theme.main};
border: 2px solid ${props => props.theme.main};
`;
//
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Main.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const blue = {
  main: "blue"
};
const red = {
  main: "red"
};


//
export default function Home() {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={red}>
        <Main>Red</Main>
      </ThemeProvider>
      <ThemeProvider theme={blue}>
        <Main>Blue</Main>
      </ThemeProvider>

      <Main>Default</Main>
      <Border />
      <Device> Item 1 </Device>
      <Device> Item 2 </Device>
      <Device> Item 3 </Device>
      <Device> Item 4 </Device>
      
    </div>
  )
}
