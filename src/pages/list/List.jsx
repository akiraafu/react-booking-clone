import React from "react";
import classes from "./List.module.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className={classes.listContainer}>
                <div className={classes.listWrapper}>
                    <div className={classes.listSearch}>
                        <h2 className={classes.lsTitle}>Search</h2>
                        <div className={classes.lsItem}>
                            <label>Destination</label>
                            <input type='text' placeholder={destination} />
                        </div>
                        <div className={classes.lsItem}>
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onchange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    rages={date}
                                />
                            )}
                        </div>
                        <div className={classes.lsItem}>
                            <label>Options</label>
                            <div className={classes.lsOptions}>
                                <div className={classes.lsOptionItem}>
                                    <span className={classes.lsOptionInput}>
                                        Min price <small>per night</small>
                                    </span>
                                    <input type='text' className={classes.lsOptionInput} />
                                </div>
                                <div className={classes.lsOptionItem}>
                                    <span className={classes.lsOptionInput}>
                                        Max price <small>per night</small>
                                    </span>
                                    <input type='text' className={classes.lsOptionInput} />
                                </div>
                                <div className={classes.lsOptionItem}>
                                    <span className={classes.lsOptionInput}>Adult</span>
                                    <input
                                        type='number'
                                        className={classes.lsOptionInput}
                                        placeholder={options.adult}
                                        min={1}
                                    />
                                </div>
                                <div className={classes.lsOptionItem}>
                                    <span className={classes.lsOptionInput}>Children</span>
                                    <input
                                        type='number'
                                        className={classes.lsOptionInput}
                                        placeholder={options.children}
                                        min={0}
                                    />
                                </div>
                                <div className={classes.lsOptionItem}>
                                    <span className={classes.lsOptionInput}>Room</span>
                                    <input
                                        type='number'
                                        className={classes.lsOptionInput}
                                        placeholder={options.room}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className={classes.listResult}>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
