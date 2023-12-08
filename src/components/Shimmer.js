const Shimmer = () => {
    const arr = new Array(20)
    arr.fill("")
    console.log(arr)
    return(
        <div className="flex flex-wrap m-2">
            {arr.map((x,i) => <div key={i} className="bg-slate-300 m-2 w-48 h-72"></div>)}
        </div>
    )
}

export default Shimmer