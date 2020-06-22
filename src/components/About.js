import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


export const About = () => {
    const classes = useStyles();
    return (
        <div className="text-center">
            <Typography className={classes.root}>
                <Link href="https://github.com/huseyn0w/Covid19-Tracker" target="_blank">
                    Github Repo
                </Link>
                <Link href="http://huseyn0w.github.io/" target="_blank">
                    Portfolio Website
                </Link>
                <Link href="https://www.linkedin.com/in/huseyn0w/" target="_blank">
                    Linkedin Profile
                </Link>
            </Typography>
        </div>
    )
}