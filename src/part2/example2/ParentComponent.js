import ChildComponent from "./ChildComponent"

function ParentComponent(){
  return(
    <div className="ParentComponent">
      <div>Parent Component</div>
      <ChildComponent message="Hello" />
    </div>
  )
}

export default ParentComponent