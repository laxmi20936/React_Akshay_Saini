import { useState, useEffect } from "react";

function Challenge2() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [btnData, setbtnData] = useState(false);

  useEffect(() => {
    getData();
    console.log("a");
  }, [skip]);

  const clickHandler = () => {
    data.length === 80 ? setbtnData(true) : setSkip(skip + 20);
  };

  const getData = async () => {
    const res = await fetch(
      "https://dummyjson.com/todos?limit=20" + "&skip=" + skip
    );
    const json = await res.json();
    console.log(json);
    console.log(json.todos);
    //  setData(json?.todos)
    setData([...data, ...json?.todos]);
  };

  return data.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="App">
      <div>
        {data.map((x) => (
          <div className="data" key={x?.id}>
            {" "}
            {x?.id}{" "}
          </div>
        ))}
      </div>
      <button onClick={() => clickHandler()} disabled={btnData}>
        Load More
      </button>
    </div>
  );
}

export default Challenge2;
