import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      '& .font-tabular-nums': {
        fontVariantNumeric: 'tabular-nums',
      },
      '& .redType': {
        color: '#DC143C', 
      },
      '& .greenType': {
        color: 'green', 
      },
    },
  });

export default useStyles;