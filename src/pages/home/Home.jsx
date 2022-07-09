import React from "react";
import Navbar from "../../components/navbar/Navbar";
import classes from "./Home.module.css";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={classes.homeContainer}>
                <Featured />
            </div>
        </div>
    );
};

export default Home;
