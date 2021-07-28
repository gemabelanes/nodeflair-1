import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";

import Moment from "moment";


import React from "react";



const useStyles = makeStyles((theme) => ({
    root : {
        transitionProperty : "transform",
        transitionDuration: 500,
        "&:hover" : {
            transform: 'translateY(-0.25em)',
        }
    },
    cardContainer : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : 20,
        "&:last-child": {
            paddingBottom: 0
        },
    },
    image : {
        maxHeight : 100,
        maxWidth : 100,
    },
    imageContainer : {
        textAlign : 'center',
    },
    companyText : {
        margin : 0,
        marginBottom :2,
    },
    jobTitleText : {
        fontSize : 20,
        margin : 0,
        fontWeight : 'bold',
        overflow : 'hidden',
        textOverflow : 'ellipsis',
        display : '-webkit-box',
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    salaryContainer : {
        justifyContent : 'right',
    },
    salaryText : {
        marginTop : 6,
        marginBottom : 2,
    },
    estText : {
        backgroundColor : "#f1f1f1",
        fontSize : 10,
        paddingLeft : 7,
        paddingTop : 3,
        paddingRight : 7,
        paddingBottom : 3,
        marginLeft : 8,
        borderRadius : 5,
    },
    dateContainer : {
        justifyContent : 'space-between',
        display : 'flex',
        alignItems : 'center',
    },
    timeAgoText : {
        color : 'rgb(131, 131, 131)',
        fontStyle : 'italic',
        fontSize : 14,
    },
    roleText : {
        backgroundColor : "#ddf7e9",
        color : "#1fc76a",
        fontSize : 14,
        paddingLeft : 8,
        paddingTop : 5,
        paddingRight : 8,
        paddingBottom : 5,
        fontWeight : 600,
        borderRadius : 5,

    },
    tagContainer : {
        padding : 0,
        borderTop : 0.5,
        borderTopStyle : 'solid',
        borderTopColor : 'rgb(223, 223, 223)',
        borderTopWidth : 0.5,
        paddingTop : 10,
        width : '100%',
        height : 30,
        overflow : 'hidden',
        display : '-webkit-box',
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
    },
    tagText : {
        backgroundColor : "#f1f1f1",
        color : "#838383",
        fontWeight : 'bold',
        borderRadius : 5,
        paddingLeft : 8,
        paddingTop : 5,
        paddingRight : 8,
        paddingBottom : 5,
        marginRight : 5,
        //overflow : 'hidden',
        //textOverflow : 'ellipsis',
        display : 'inline-block',
        margin : 0,
        marginBottom : 5,
    },
}));


export default function JobCard(data) {
    const styles = useStyles();
    const theme = useTheme();

    const [isRaised, setIsRaised] = React.useState(false);

    function handleRaise() {
        setIsRaised(!isRaised);
    }
    
    const isNotSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Grid 
            item 
            xs = {12}
            sm = {6}
            md = {4}
            className = {styles.root}
        >
            <Card onMouseOver = {handleRaise} onMouseOut = {handleRaise} raised = {isRaised}>
                <CardContent style = {isNotSmallScreen ? {height : 306} : {height: 186}} className = {styles.cardContainer} >
                    <Grid
                        container
                        justifyContent = 'space-between'
                    >
                        <Grid container xs = {12}>
                        <Grid 
                            item
                            xs = {3}
                            sm = {12}
                            className = {styles.imageContainer}
                        >
                            <img 
                                src = {data.data.icon} 
                                alt={data.data.company} 
                                className= {styles.image}
                                style = {!isNotSmallScreen ? {paddingRight : 20, maxHeight : 90, maxWidth: 90} : {}}/>
                        </Grid>
                        <Grid
                            item
                            xs = {9}
                            sm = {12}
                            className = {styles.salaryContainer}
                        >
                            <p className = {styles.companyText}>{data.data.company}</p>
                            <p className = {styles.jobTitleText}>{data.data.jobTitle}</p>
                            <p className = {styles.salaryText}>{data.data.salary} SGD / Monthly <text className = {styles.estText}>EST</text></p>

                        </Grid>
                        <Grid
                            item
                            xs = {12}
                        >
                            <div className = {styles.dateContainer}>
                                <p className = {styles.timeAgoText}>{Moment(data.data.datePosted).fromNow()}</p>
                                <text className = {styles.roleText}>{data.data.role}</text>
                            </div>
                        </Grid>
                        </Grid>
                        <div className = {styles.tagContainer}>
                                {data.data.tags.map((tag) => (
                                    <p className = {styles.tagText}>
                                        {tag}
                                    </p>
                                ))}
                            
                        </div>
    
                    </Grid>
                    
                </CardContent>
                
            </Card>

        </Grid>
    )
}