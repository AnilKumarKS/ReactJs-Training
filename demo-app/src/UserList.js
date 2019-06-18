import React from 'react'
import User from './User'

/********************************** Class Components**************************/
// export class UserList extends React.Component{
//     render(){
//         return(
//             <div className="alert alert-primary">
//                 <h1>Users Length:{this.props.users.length}</h1>
//                 <div className="row">
//                     {this.props.users.map(user=>{
//                         return <User key={user.id} data={user}/>
//                     })}
//                 </div>
//             </div>
//         )
//     }
    
// }


let printFunc=function(data){
    alert('id is '+data);
    console.log('called from the print function inside UserList component');
}
export class UserList extends React.Component{
    render(){
        return (
            <div className="alert alert-success">
            <h1>Users Length:{this.props.users.length}</h1>
            <div className="row">
                {this.props.users.map(user=>{
                    return <User key={user.id} data={user} print={printFunc}/>
                })}
            </div>
        </div>
        )
    }
           
}
    