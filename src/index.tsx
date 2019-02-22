import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Route,Switch } from 'react-router-dom';
import NavigationBar from './SwipeableDrawer';
import Footer from './Footer' ;
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import {StoreState} from './types/index';
import {PostsReducer} from './Reducers';
import thunkMiddleware from 'redux-thunk';
import Posts from './Containers/Posts';
import PostDetails from './Containers/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';

const store = createStore<StoreState,any,any,any>(PostsReducer, {
  posts:[],
  isloading:false,
  iserror:false
},applyMiddleware(thunkMiddleware));

store.subscribe(()=>{

  // console.log(store.getState());
 })
 


const Products = ()=>{
  return (
      <div>
      <h3>Products</h3>
      </div>  
  )
}

const About = ()=>{
  return(
   <div>
       <h3> About Us </h3>
    </div>
  )
}

const Routing = () =>(
  <BrowserRouter  >
  <div>
  <Route component={NavigationBar}/>
  <Switch>
    <Route exact path="/" component={Posts}/>
    <Route exact path='/postdetails/:id' component={PostDetails}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/products' component={Products}/>
    <Route component={NotFound}/>
  </Switch>
<Route component={Footer}/>
  </div>
</BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
  <Routing/>
  </Provider> ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
