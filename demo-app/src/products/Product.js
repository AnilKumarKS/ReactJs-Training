import React from 'react'
export class Product extends React.Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header">
                    Id:{this.props.data.id} <span> Count: {this.props.data.counter}</span>
                    </div>
                </div>
                <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5><br/>
                        <input type="text" onBlur={function(data){
                            alert(this.event.target.value);
                            console.log(data.value);
                        }}/>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                        <button className="btn btn-primary" onClick={
                            ()=>{
                                console.log('came after the button is clicked..');
                                this.props.click(this.props.data);
                            }
                        }>

                            Details
                        </button>
                </div>
                <div className="card-footer text-muted">
                    {this.props.data.price}
                </div>
            </div>

        );
    }

}