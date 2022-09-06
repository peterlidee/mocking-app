import ChildComponent from "./ChildComponent"

function ParentComponent(props){
  return(
    <div className="ParentComponent">
      <div>Parent Component</div>
      <ChildComponent message={props.message} />
    </div>
  )
}

export default ParentComponent