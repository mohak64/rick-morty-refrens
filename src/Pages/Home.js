import React, { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "../components/Card/CardDetails";
import Card from "../components/Card/Card";
import Select from "react-select";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";


const Home = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    let [type, updateType] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false); // Add loading state
    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}&type=${type}`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let data = await fetch(api).then((res) => res.json());
                updateFetchedData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [api]);

    return (
        <div className="App homebg no-x-scroll">
            <h1 className="text-center mb-3 cw">Characters</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="row justify-content-center">
                <Filter
                    pageNumber={pageNumber}
                    status={status}
                    updateStatus={updateStatus}
                    updateGender={updateGender}
                    updateSpecies={updateSpecies}
                    updateType={updateType}
                    updatePageNumber={updatePageNumber}
                />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex col-lg-8 col-12 justify-content-center">
                        {loading ? (
                            <div className="spinner-container">

                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (

                            <div className="row">
                                <Card page="/" results={results} />
                            </div>

                        )}
                    </div>
                </div>
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
            />
        </div>
    );
};

export default Home;