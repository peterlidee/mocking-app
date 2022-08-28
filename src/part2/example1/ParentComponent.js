import ChildComponent from "./ChildComponent"

function ParentComponent(){
  return(
    <div className="ParentComponent">
      <div>Parent Component</div>
      <ChildComponent />
    </div>
  )
}

export default ParentComponent