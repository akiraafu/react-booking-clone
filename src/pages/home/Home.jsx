import React from "react";
import Navbar from "../../components/navbar/Navbar";
import classes from "./Home.module.css";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import PopularItems from "../../components/popularItems/PopularItems";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={classes.homeContainer}>
                <Featured />
                <h2 className={classes.homeTitle}>Browse by property type</h2>
                <PropertyList />
                <h2 className={classes.homeTitle}>Homes guests love</h2>
                <PopularItems />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
