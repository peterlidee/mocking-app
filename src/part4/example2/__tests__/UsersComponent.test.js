import { render, screen } from '@testing-library/react'
import UsersComponent from '../UsersComponent'
import FetchComponent from '../FetchComponent'

jest.mock('../FetchComponent')

beforeEach(() => {
  jest.resetAllMocks()
})

test('UsersComponent renders correctly with loading state', () => {
  FetchComponent.mockImplementation(
    // eslint-disable-next-line testing-library/no-node-access
    (props) => props.children({
    isLoading: true,
    error: false,
    data: undefined,
  }))
  render(<UsersComponent />)
  expect(FetchComponent).toHaveBeenCalled()
  expect(screen.getByText(/...loading/)).toBeInTheDocument()
})

test('UsersComponent renders correctly with error state', () => {
  FetchComponent.mockImplementation(
    // eslint-disable-next-line testing-library/no-node-access
    (props) => props.children({
    isLoading: false,
    error: true,
    data: undefined,
  }))
  render(<UsersComponent />)
  expect(FetchComponent).toHaveBeenCalled()
  expect(screen.getByText(/Error/)).toBeInTheDocument()
})

test('UsersComponent renders correctly with no isLoading, no error and data', () => {
  FetchComponent.mockImplementation(
    // eslint-disable-next-line testing-library/no-node-access
    (props) => props.children({
    isLoading: false,
    error: undefined,
    data: [
      { name: 'Foo', id: '1' },
      { name: 'Bar', id: '2' },
    ],
  }))
  render(<UsersComponent />)
  expect(FetchComponent).toHaveBeenCalled()
  expect(screen.getByText(/Foo/)).toBeInTheDocument()
  expect(screen.getByText(/Bar/)).toBeInTheDocument()
})