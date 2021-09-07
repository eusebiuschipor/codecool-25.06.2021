import './App.css';
import Header from './components/Header/Header.js';
import Image from './components/Image/Image.js';
import Form from './components/Form/Form.js';
import Article from './components/Article/Article.js';

function App() {
  const headerMenu = [
    {
      id: 1,
      text: 'Home',
      link: '/home'
    },
    {
      id: 2,
      text: 'About',
      link: '/about'
    },
    {
      id: 3,
      text: 'Contact',
      link: '/contact'
    }
  ];

  return (
    <>
      <Header menu={headerMenu} title="My Blog" />

      <Article title="Titlu articol 1" paragraph="Text articol 1" color="green" background="blue" />
      <Article title="Titlu articol 2" paragraph="Text articol 2" color="black" background="red" />
      <Article title="Titlu articol 3" paragraph="Text articol 3" color="red" background="yellow" />
    </>
  );
}

export default App;
