import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    totalBox: {
        marginLeft: '10%',
        marginRight: '10%', 
        width: '100%', 
        letterSpacing: 0,
        opacity: 1,
        fontSize: theme.typography.pxToRem(15),
        color: '#5a6169', 
      },
      totalCol: {
        paddingTop: 24,
        width: '20%', 
        textAlign: 'right', 
      }, 
      leftCol: {
        height: 40,
        color: '#484848',
        fontWeight: 'bold',  
        fontFamily: "Sofia Pro", 
      }, 
      rightCol: {
          height: 20,
          color: '#5a6169',
          fontFamily: "Mackinac Pro", 
      }
})); 

export default useStyles;