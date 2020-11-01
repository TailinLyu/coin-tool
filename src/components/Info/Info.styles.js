import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    totalBox: {
        paddingTop: 64,
        paddingRight: 64,
        paddingLeft: '5%',
        marginRight: '0',
        minWidth: '40%', 
        letterSpacing: 0,
        opacity: 1,
        fontSize: theme.typography.pxToRem(30),
        color: '#5a6169', 
        // border: '1px solid black', 
      },
      totalCol: {
        paddingTop: 24,
      }, 
      leftCol: {
        fontWeight: 'bold',
        width: '70%', 
      }, 
      rightCol: {
          textAlign: 'right', 
        //   border: '1px solid black', 
      }
})); 

export default useStyles;