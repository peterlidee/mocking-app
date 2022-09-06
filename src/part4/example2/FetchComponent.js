import useFetch from 'react-fetch-hook'

function FetchComponent(props){
  const {isLoading, data, error} = useFetch(props.url)
  return props.children({ isLoading, error, data })
}

export default FetchComponent