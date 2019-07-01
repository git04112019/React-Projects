import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import useFetch from './useFetch.js'

// const useFetch = (url, options) => {
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     const FetchData = async () => {
//       try {
//         const res = await fetch(url, options);
//         const json = await res.json();
//         setResponse(json);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     FetchData();
//   }, []);
//   return { response, error };
// };

const URL = `https://pokeapi.co/api/v2/pokemon/ditto/`;

// `https://dog.ceo/api/breeds/image/random`
const options = {
  // method: 'get', 
  // headers: {
  //     'Content-Type': 'application/json',
  //     'X-MC-AUTH': 'aaf18da9-34db-4c4d-9bdb-645c37364dd6'
  // },
}

function App() {
  const res = useFetch(URL, options);

  if (!res.response) {
    return <div>Loading...</div>;
  }
  const TotalFound = res.response.TotalFound;
  
  const results = res.response.sprites;
  // const pokemon = results.map

  // const RESULTS = results.slice(0, 5).map((YearBuilt) =>
  //   <li>{YearBuilt}</li>
  // );

  return (
    <div className="App">
      <div>
        <h3>{TotalFound}</h3>
        <div>
          <img src={results.front_default} alt="avatar" />
          {/* <ul>{RESULTS}</ul>, */}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

