import React from 'react';

/********************************** Class Components**************************/

//  class User extends React.Component{
//     render(){
        
//         const user = this.props.data;
//         return (
        
//             <div className="col-lg-3">
//                 <div className="card" style={{width: '18rem'}}>
//                     <img src={user.imgUrl} className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{user.name}</h5>
//                         <p className="card-text">Email: {user.email}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default User;
/*******************Functional Components**********************/
class User extends React.Component{
    render(){
        const user = this.props.data;
      let s=
            <div className="col-lg-3">
                <div className="card text-center">
                    <div className="card-header">
                    {user.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                            <img src={user.imgUrl} className="card-img-top" alt="..." style={{height:'200px'}}/>

                        </p>
                        <button className="btn btn-primary" onClick={()=>{this.props.print(user.id)}}>
                            Details
                        </button>
                    </div>
                    <div className="card-footer text-muted">
                    {user.email}
                    </div>
                </div>
            </div>
            ;
            return s;
       
    
    }
}
    export default User;

