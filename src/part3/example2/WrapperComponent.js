function WrapperComponent(props){
  return(
    <div className="WrapperComponent">
      <div>Wrapper Component</div>
      {props.children}
    </div>
  )
}

function ExtraComponent(){
  return(
    <div className="ExtraComponent">
      Extra Component
    </div>
  )
}

export default WrapperComponent
export { ExtraComponent }