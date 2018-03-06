import React, { Component } from 'react';

//Components
import Body from './components/Body/Body'
import Cart from './components/Body/Cart'
import Footer from './components/Footer/Footer'
//styles
import './assets/css/styles.min.css';


class App extends Component {
  render() {
    const imageUrl = require(`./assets/images/${this.props.imageName}.jpg`)
    return (
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <Body imageName='bg'>
          <Cart author="Mihai" title="Coffe Pic" cartImage="coffee" avatarImage="avatar" description="
              Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
          "/>
          <Cart author="Mihai" title="On the road again" cartImage="road" avatarImage="avatar" description="Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."/>
          <Cart author="Mihai" title="Shopping" cartImage="shopping" avatarImage="avatar"/>
        </Body>
        <Footer socials={['twitter', 'facebook', 'google']}/>
      </div>
    );
  }
}

export default App;
