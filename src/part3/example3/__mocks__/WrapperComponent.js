const WrapperComponent = jest.fn().mockImplementation((props) => <>{props.children}</>)
const ExtraComponent = jest.fn()

export default WrapperComponent
export { ExtraComponent }