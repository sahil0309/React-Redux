import PostDetails from '../Components/PostDetails';
import { StoreState } from '../types/index';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


export interface OwnProps {
}

export function mapStateToProps({ posts }: StoreState,ownProps:any) {
  console.log("Map State to Props");
 const postid = ownProps.match.params.id; //this is used when we have parameters in URL 
 //const postid=ownProps.location.state.detail;

 console.log(postid);
 const postobj = Object.assign({}, posts.find(post => post.postid == 
    postid));

    console.log(postobj);
  return {
     postid:postobj.postid,
     title:postobj.title,
     postdata:postobj.postdata 
  }
}



export default withRouter(connect(mapStateToProps) (PostDetails));