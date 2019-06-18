// import React from 'react';
// import ReactDOM from 'react-dom';
// import {UserList} from './UserList';
// import 'bootstrap/dist/css/bootstrap.css';

// const data = [
//     {id:1, name:'Garuda', email:'acf@gmail.com',age:20,imgUrl:'https://cdn.webshopapp.com/shops/184325/files/92160599/800x1024x2/enso-martial-arts-shop-grey-shaolin-robes.jpg'},
//     {id:2, name:'Shihan', email:'acf-1@gmail.com',age:30,imgUrl:'https://www.bbncommunity.com/wp-content/uploads/2015/11/09.jpg'},
//     {id:3, name:'Sensai', email:'acf-1@gmail.com',age:40,imgUrl:'https://ae01.alicdn.com/kf/HTB1pXVjIXXXXXa.XpXXq6xXFXXXs/Gray-Cotton-Shaolin-Monk-Kung-fu-Uniform-Wushu-Martial-arts-Suit-Full-Sizes-for-Kids-Adults.jpg_640x640.jpg'}
// ];

// ReactDOM.render(
//     <div>
//         <UserList users={data}/>
        
//     </div>,
//     document.getElementById('root')
//     );

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './products/ProductList';

ReactDOM.render(

        <div className="alert alert-warning">
           <ProductList/> 
        </div>, 
        document.getElementById('root'));



