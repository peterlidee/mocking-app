import { render } from '@testing-library/react'
import FetchComponent from '../FetchComponent'
import useFetch from 'react-fetch-hook'

jest.mock('react-fetch-hook')
const ChildMock = jest.fn(props => null)

test('FetchComponent mocks useFetch correctly', () => {
  useFetch.mockReturnValue({
    isLoading: true,
    error: undefined,
    data: undefined,
  })
  render(
    <FetchComponent url="dummy">
      {ChildMock}
    </FetchComponent>
  )
  // check the useFetch mock
  expect(useFetch).toHaveBeenCalledWith('dummy')
  expect(useFetch).toHaveReturnedWith(
    expect.objectContaining({
      isLoading: true,
      error: undefined,
      data: undefined,
    })
  )
})

test('FetchComponent ChildMock works correctly', () => {
  expect(ChildMock).toHaveBeenCalledWith(
    expect.objectContaining({
      isLoading: true,
      error: undefined,
      data: undefined,
    })
  )
})