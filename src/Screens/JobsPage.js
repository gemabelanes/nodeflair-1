import {
    Grid,
    makeStyles,
} from "@material-ui/core";

import Moment from "moment";

import React from "react";
import JobCard from "../Components/JobCard";
import { DATA } from "../Data/data";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

    },
    container: {
        display: "flex",
        maxWidth : 1200,
        padding: 15,
        justifyContent : 'center',
        alignItems : 'center',
    },
}));


export default function Jobs() {
    const styles = useStyles();

    return (
        <div className = {styles.root}>
            <Grid
                container
                spacing = {2}
                className={styles.container}
            >
                {DATA.map((data) => (
                        <JobCard data = {data}/>
                ))}
            </Grid>
        </div>
    )

}