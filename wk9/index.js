import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Greeter from './Greeter';
import LikeButton from './LikeButton';
//ReactDOM.render(<App />, document.getElementById('root'));

const Display = () => {
   let myButtonList = [];
    for(let x = 0; x<10; x++){
        myButtonList.push(<LikeButton/>)
    }
    return <>< Greeter />
    {myButtonList}
    </>;
}
 
export default Display;

ReactDOM.render(  <Display/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
