const Shimmer = () => {
    const arr = new Array(20)
    arr.fill("")
    console.log(arr)
    return(
        <div className="shimmer-cont">
            {arr.map((x,i) => <div key={i} className="card-shimmer"></div>)}
        </div>
    )
}

export default Shimmer