import Post from '../Components/Posts';
import * as actions from '../Actions/index';
import { StoreState } from '../types/index';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';

export interface OwnProps {
  name: string
}

export function mapStateToProps({ iserror,isloading,posts }: StoreState,ownProps:any) {
  return {
    iserror,
    isloading,
    posts,
    ownProps
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    LoadPosts: () => dispatch<any>(actions.LoadPosts())
  }
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps) (Post));