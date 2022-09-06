import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import WrapperComponent, { ExtraComponent } from '../WrapperComponent'

beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock('../WrapperComponent', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line testing-library/no-node-access
    default: jest.fn((props) => <>{props.children}</>),
    ExtraComponent: jest.fn()
  }
})

test('ParentComponent renders correctly', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

test('WrapperComponent was mocked correctly', () => {
  render(<ParentComponent />)
  expect(WrapperComponent).toHaveBeenCalledTimes(1)
})

test('WrapperComponent children rendered correctly', () => {
  render(<ParentComponent />)
  expect(screen.getAllByText(/TextBlock/i)).toHaveLength(2)
})

test('ExtraComponent was mocked correctly', () => {
  render(<ParentComponent />)
  expect(ExtraComponent).toHaveBeenCalledTimes(1)
})