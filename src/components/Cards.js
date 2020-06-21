import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



export function Cards(props) {
    // console.log('salam');
  const {confirmed, recovered, deaths, lastUpdate} = props.data;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Last Update: {new Date(lastUpdate).toDateString()}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {confirmed.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={3}
                        />
                    </Typography>
                    <Typography variant="body2" component="p">
                        Number of total infected cases
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {recovered.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={3}
                        />
                    </Typography>
                    <Typography variant="body2" component="p">
                        Number of recovered cases of COVID - 19.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {deaths.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={3}
                        />
                    </Typography>
                    <Typography variant="body2" component="p">
                        Number of death cases of COVID - 19.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}