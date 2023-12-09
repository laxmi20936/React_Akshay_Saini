import { useState } from "react";

// const Challenges = () =>{
//     const [msg, setMsg]  = useState(false)
//     return (
//         <div>
//             <button onClick = {()=> setMsg(!msg)}>Show/Hide</button>
//             <div>{msg && "llll"} </div>
//         </div>
//     )
// }

const Challenges = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  console.log(data, input);
  const changeHandler = (e) => {
    // console.log(e)
    setInput(e.target.value);
  };

  const clickHandler = () => {
    // console.log("clicked");
    setData([...data, input]);
    setInput("");
  };

  const delHandler = (e,index) => {
    console.log(index,e);
    const dup = [...data]
    const a = dup.splice(index,1)
    // console.log(dup,a);
    setData(dup)
    
  };

  return (
    <div>
      <input
        type="text"
        name="input"
        value={input}
        className="border-slate-900"
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <button onClick={clickHandler}>Add</button>
      {/* <div>{data} </div> */}
      {data.map((x, index) => (
        <div key={index}>
          <div className="bg-slate-500 ml-60 m-4">
            {x}
            <span className="ml-40" onClick={(e) => delHandler(e,index)} >X</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
