import WrapperComponent, { ExtraComponent } from './WrapperComponent'

function ParentComponent(){
  return(
    <div className="ParentComponent">
      <div>Parent Component</div>
      <WrapperComponent>
        <div>Textblock 1</div>
        <div>Textblock 2</div>
      </WrapperComponent>
      <ExtraComponent />
    </div>
  )
}

export default ParentComponent