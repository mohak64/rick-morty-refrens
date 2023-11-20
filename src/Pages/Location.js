import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Select from "react-select";

const Location = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const api = `https://rickandmortyapi.com/api/location/${selectedLocation?.value || 1}`;

  const locationOptions = Array.from({ length: 126 }, (_, index) => ({
    value: index + 1,
    label: `Location - ${index + 1}`,
  }));
  let types = [
    "Planet",
    "Cluster",
    "Space station",
    "Microverse",
    "TV",
    "Resort",
    "Fantasy Town",
    "Dream",
  ];

  let dimensions = [
    "Dimension C-137",
    "Post-Apocalyptic Dimension",
    "unknown",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "Fantasy Dimension",
    "Dimension 5-126",
  ];
  useEffect(() => {
    const fetchData = async () => {
      setNoResults(false);
      setLoading(true);
      try {
        const data = await fetch(api).then((res) => res.json());
        setInfo(data);

        if (data.residents.length === 0) {
          setNoResults(true);
        } else {
          const residentsData = await Promise.all(
            data.residents.map((resident) => fetch(resident).then((res) => res.json()))
          );
          setResults(residentsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, selectedLocation]);

  return (
    <div className="locationbg">
      <div className="container">
        <div className="row mb-3">
          <h1 className="text-center mb-3 cw">
            Location :
            <span className="text-danger">
              {" "}
              {info.name === "" ? "Unknown" : info.name}
            </span>
          </h1>
          <h5 className="text-center cwt">
            Dimension: {info.dimension === "" ? "Unknown" : info.dimension}
          </h5>
          <h6 className="text-center cwt">Type: {info.type === "" ? "Unknown" : info.type}</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4 cwt">Pick Location</h4>
            <Select
              options={locationOptions}
              value={selectedLocation}
              onChange={(selectedOption) => setSelectedLocation(selectedOption)}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 justify-content-center">
            {loading ? (
              <div className="spinner-container">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row">
                {noResults ? (
                  <div className="text-center cwt">No results found.</div>
                ) : (
                  <Card page="/location/" results={results} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
