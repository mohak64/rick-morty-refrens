import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Select from "react-select";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const Episodes = () => {
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, episode, name } = info;
  const [id, setID] = useState(1);
  const [loading, setLoading] = useState(false);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(api).then((res) => res.json());
        setInfo(data);

        const charactersData = await Promise.all(
          data.characters.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(charactersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, id]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const episodeOptions = Array.from({ length: 51 }, (_, i) => ({
    value: i + 1,
    label: `Episode ${i + 1}`,
  }));

  const handleEpisodeChange = (selectedOption) => {
    setID(selectedOption.value);
  };

  return (
    <div className="episodebg">
      <div className="container">
        <div className="row mb-3">
          <h1 className="text-center mb-3 cw">
            Episode name :{" "}
            <span className="text-primary ">{name === "" ? "Unknown" : name}</span>
          </h1>
          <h5 className="text-center cwt">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4 cwt">Pick Episode</h4>
            <Select
              options={episodeOptions}
              onChange={handleEpisodeChange}
              placeholder="Select an episode"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 ">
            <div className="row  justify-content-center">
              {loading ? (
                <div className="spinner-container">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <Card page="/episodes/" results={results} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
