import doSomething from '../doSomething'

test('doSomething callback behaves correctly', () => {
  const mockCallback = jest.fn()
  doSomething(mockCallback)
  // take a look at the mockCallback
  // console.log('mockCallback',mockCallback.mock)
  expect(mockCallback.mock.calls).toHaveLength(2)
  expect(mockCallback.mock.calls[0][0]).toBe('foo')
  expect(mockCallback.mock.calls[1][0]).toBe('bar')
})

test('doSomething with Jest matchers', () => {
  const mockCallback = jest.fn()
  doSomething(mockCallback)
  expect(mockCallback).toHaveBeenCalled()
  expect(mockCallback).toHaveBeenCalledTimes(2)
  // this is not the recommended method when testing multiple calls
  expect(mockCallback).toHaveBeenCalledWith('foo')
  expect(mockCallback).toHaveBeenCalledWith('bar')
  // using .toHaveBeenNthCalledWith is better for multiple calls
  expect(mockCallback).toHaveBeenNthCalledWith(1, 'foo')
  expect(mockCallback).toHaveBeenNthCalledWith(2, 'bar')
  expect(mockCallback).toHaveBeenLastCalledWith('bar')
})

test('doSomething with no return value', () => {
  const mockCallback = jest.fn()
  doSomething(mockCallback)
  expect(mockCallback.mock.results[0].value).toBeUndefined()
  expect(mockCallback.mock.results[1].value).toBeUndefined()
})

test('doSomething with mock implementation parameter', () => {
  // pass mock implementation function into jest.fn
  const mockCallback = jest.fn(() => 'Hello')
  doSomething(mockCallback)
  expect(mockCallback).toHaveNthReturnedWith(1, 'Hello')
  expect(mockCallback).toHaveNthReturnedWith(2, 'Hello')
})

test('doSomething with mock implementation parameter that catches the values passed into mockCallback', () => {
  const mockCallback = jest.fn((value) => 'Hello ' + value)
  doSomething(mockCallback)
  expect(mockCallback).toHaveNthReturnedWith(1, 'Hello foo')
  expect(mockCallback).toHaveNthReturnedWith(2, 'Hello bar')
})

test('doSomething with .mockReturnValue() on mock', () => {
  const mockCallback = jest.fn()
  mockCallback.mockReturnValue('Hello')
  doSomething(mockCallback)
  expect(mockCallback).toHaveNthReturnedWith(1, 'Hello')
  expect(mockCallback).toHaveNthReturnedWith(2, 'Hello')
})

test('doSomething with .mockImplementation() on mock', () => {
  const mockCallback = jest
    .fn()
    .mockImplementation((value) => 'Hello ' + value)
  doSomething(mockCallback)
  expect(mockCallback).toHaveNthReturnedWith(1, 'Hello foo')
  expect(mockCallback).toHaveNthReturnedWith(2, 'Hello bar')
})