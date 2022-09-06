import FetchComponent from "./FetchComponent";

function UsersComponent(){
  const url = `https://jsonplaceholder.typicode.com/users/`
  return(
    <FetchComponent url={url}>
      {({ isLoading, error, data }) => {
        if( isLoading ) return '...loading'
        if( error ) return 'Error'
        return data.map(user => <div key={user.id}>{user.name}</div>)
      }}
    </FetchComponent>
  )
}

export default UsersComponent