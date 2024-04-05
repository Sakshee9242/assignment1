import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Header from './Components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
function App() {
  const theme = {
    colors : {
      text : "#ffd7ad",
      bg : "#4a1831" ,
      footer_bg : "#0a1435",
      btn : "rgb(98 84 243)",
      
    },
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <BrowserRouter>
          <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service'  element={<Service/>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
