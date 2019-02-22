import * as React  from 'react';
import IconButton from "@material-ui/core/IconButton";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { MailFolderListItems} from './titleData';
import { createStyles } from '../node_modules/@material-ui/core';

const styles = createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButtonRight: {
        marginRight: -25
      },
    list: {
        width: 200,
      }
  });
  
interface Props{
  history:any,
  classes: {
    list:string,
    flex:string,
    menuButtonRight:string
  };
}

interface State{
  width:number,
  right:boolean
}

interface Direction{
  right:boolean
}
class Swipe extends React.Component<Props,State> {

  public readonly state: State = {
  width:100,
  right:false
  }
    constructor(props:Props) {
        super(props);
        this.setRedirect=this.setRedirect.bind(this);
        this.state.width = window.innerWidth;
      }
      direction : Direction= {
        right: false,
      };
    
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

      toggleDrawer = (open1:boolean) => () => {
        this.setState({
          right:open1
        });
      };
       
      setRedirect(path:string){
        console.log("Hello" + path);

        this.props.history.push({
          pathname: path,
        });
        
       // browserHistory.push('/about');
      }
   
      render() {
        const {classes}=this.props;
        //It could be written as const classes = this.props.classes
        console.log(this.props);
         const  width  = this.state.width;
        const isMobile = width <= 500;

        const sideList = (
          <div className={classes.list}>
            <List> <MailFolderListItems setRedirect={this.setRedirect}/></List>
          </div>
        );
      
        if (isMobile) {
          return (
              <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Post's App
                </Typography>
                <IconButton  color="inherit" aria-label="Menu" className={classes.menuButtonRight}
                   onClick={this.toggleDrawer(true)} />
              <MenuIcon/>
              </Toolbar>
            </AppBar>
            
            <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
           </div>
          );
        } else {
          return (
            <div >
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
               Post's App
                </Typography>
                <Button color="inherit" onClick={()=>this.setRedirect('/')}>Home</Button> 
                <Button color="inherit" onClick={()=>this.setRedirect('/about')}>About us</Button>  
                <Button color="inherit"  onClick={()=>this.setRedirect('/products')}>Products</Button>

              </Toolbar>
            </AppBar>
          </div>
          );
        }
      }
}


export default  withStyles(styles)(Swipe);
