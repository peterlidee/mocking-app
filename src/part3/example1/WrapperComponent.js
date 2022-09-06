function WrapperComponent(props){
  return(
    <div className="WrapperComponent">
      <div>Wrapper Component</div>
      {props.children}
    </div>
  )
}

export default WrapperComponent