import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1 a": {
        "color": "#FCA205",
        "fontFamily": "'Lobster'"
    },
    "body": {
        "paddingLeft": 20
    },
    "page-header": {
        "backgroundColor": "#ff9400",
        "marginTop": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "page-header h1": {
        "color": "#ffffff",
        "fontSize": "36pt",
        "textDecoration": "none"
    },
    "page-header h1 a": {
        "color": "#ffffff",
        "fontSize": "36pt",
        "textDecoration": "none"
    },
    "page-header h1 a:visited": {
        "color": "#ffffff",
        "fontSize": "36pt",
        "textDecoration": "none"
    },
    "page-header h1 a:active": {
        "color": "#ffffff",
        "fontSize": "36pt",
        "textDecoration": "none"
    },
    "content": {
        "marginLeft": 40
    },
    "h1": {
        "fontFamily": "'Lobster', cursive"
    },
    "h2": {
        "fontFamily": "'Lobster', cursive"
    },
    "h3": {
        "fontFamily": "'Lobster', cursive"
    },
    "h4": {
        "fontFamily": "'Lobster', cursive"
    },
    "date": {
        "float": "right",
        "color": "#828282"
    },
    "save": {
        "float": "right"
    },
    "post-form textarea": {
        "width": "100%"
    },
    "post-form input": {
        "width": "100%"
    },
    "top-menu": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "top-menu:hover": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "top-menu:visited": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "post": {
        "marginBottom": 70
    },
    "post h1 a": {
        "color": "#000000"
    },
    "post h1 a:visited": {
        "color": "#000000"
    }
});