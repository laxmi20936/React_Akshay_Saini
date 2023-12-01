import {useRouteError} from 'react-router-dom'

const ErrorPage = () =>{
  const errMsg = useRouteError()
  console.log(errMsg);
  const {status, statusText,data} = errMsg
  return(
    <div>
        <h1>wwwOpps!! Something went wrong</h1>
        <h2>{status},{ statusText},{data}</h2>
    </div>
  )
}

export default ErrorPage