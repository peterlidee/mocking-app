import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import WrapperComponent from '../WrapperComponent'

jest.mock('../WrapperComponent')

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-node-access
  WrapperComponent.mockImplementation(props => <>{props.children}</>)
})

test('ParentComponent renders correctly', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

// you wouldn't write this test in a real app, but it makes sense here
test('WrapperComponent is mocked and not rendered', () => {
  render(<ParentComponent />)
  expect(screen.queryAllByText(/Wrapper Component/i)).toHaveLength(0)
})

test('Wrapper mock was called correctly', () => {
  jest.clearAllMocks()
  render(<ParentComponent />)
  expect(WrapperComponent).toHaveBeenCalledTimes(2)
})

test('Wrapper children got rendered', () => {
  render(<ParentComponent />)
  expect(screen.getAllByText(/Textblock/)).toHaveLength(4)
})