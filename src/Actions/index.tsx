import {Dispatch} from 'redux';
import axios from 'axios';
import * as Constants from '../Constants';
import { Posts } from '../types';
 interface IPostsAreLoading {
    type:Constants.POSTS_LOADING,
    loading:boolean
}

 interface IPostsLoadingError {
    type:Constants.POSTS_LOADING_ERROR
}

 interface IPostsAreLoaded{
   type:Constants.POSTS_LOADED,
   data:Array<Posts>
}

export type PostsAction =  IPostsAreLoading | IPostsLoadingError | IPostsAreLoaded;



export function LoadPosts()
{
    return(dispatch:Dispatch<PostsAction>)=>{
       dispatch(PostsAreLoading(true))
       axios.get('http://localhost:4000/api/posts')
       .then((res)=>{
         console.log("Response Aageya");
         //console.log(res.data);
         dispatch(PostsLoaded(res.data));
       }).catch((err)=>{
           dispatch(PostsLoadingError());
        //console.log("Error aayaa Re");
       })
               
    }
}


export function PostsAreLoading(x:boolean):IPostsAreLoading{
   // console.log("Posts are Loading ");
return{
type:Constants.POSTS_LOADING,
loading:true
}
}

function PostsLoadingError():IPostsLoadingError{
   // console.log("Posts  Loading Error ");
return{
    type:Constants.POSTS_LOADING_ERROR
}
}

function PostsLoaded(data:Array<Posts>):IPostsAreLoaded{
  //  console.log("Posts Loaded Succesfully");
    return{
        type:Constants.POSTS_LOADED,
        data:data
    }

}