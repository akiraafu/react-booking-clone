import React from "react";
import classes from "./SearchItem.module.css";

const SearchItem = () => {
    return (
        <div className={classes.searchItem}>
            <img
                src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
                alt=''
                className={classes.siImg}
            />
            <div className={classes.siDesc}>
                <h2 className={classes.siTitle}>Tower Street Apartments</h2>
                <span className={classes.siDistance}>500m from center</span>
                <span className={classes.siTaxiOp}>Free airport taxi</span>
                <span className={classes.siSubtitle}>Studio Apartment with Air conditioning</span>
                <span className={classes.siFeatures}>
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className={classes.siCancelOp}>Free cancellation </span>
                <span className={classes.siCancelOpSubtitle}>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className={classes.siDetails}>
                <div className={classes.siRating}>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className={classes.siDetailTexts}>
                    <span className={classes.siPrice}>$112</span>
                    <span className={classes.siTaxOp}>Includes taxes and fees</span>
                    <button className={classes.siCheckButton}>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
