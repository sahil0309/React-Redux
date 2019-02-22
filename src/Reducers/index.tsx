import { StoreState } from '../types/index';
import {PostsAction} from '../Actions/index';
import * as constants from '../Constants/index';

export function PostsReducer (state:StoreState,action:PostsAction):StoreState{
    switch(action.type)
    {
       case constants.POSTS_LOADING:
        return { ...state, isloading: true };
       case constants.POSTS_LOADED:
           return {...state,posts:action.data,isloading:false}
       case constants.POSTS_LOADING_ERROR:
           return {...state,isloading:false,iserror:true}
       default:
       return state;
    }
}