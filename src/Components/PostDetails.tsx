
import * as React from 'react';

export interface Props {
    postid:number,
    title:string,
    postdata:string
  }

class PostDetails extends React.Component<Props>{
   
    public constructor(props:Props)
    {
        super(props);
    }

render(){
  
    console.log("Inside");
    return(
        <div >
       <div >
           <h3> Post Id :-  {this.props.postid} </h3>
           <h4> Title :-  {this.props.title} </h4>
           <h5> Data :- {this.props.postdata} </h5>
       </div>
       </div>
    );
}
}

export default PostDetails;