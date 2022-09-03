import doSomethingElse from '../doSomethingElse'

test('doSomethingELSE with .mockReturnValueOnce() on mock', () => {
  const mockCallback = jest
    .fn()
    .mockReturnValue('default')
    .mockReturnValueOnce('value 1')
    .mockReturnValueOnce('value 2')
  doSomethingElse(mockCallback)
  expect(mockCallback).toHaveNthReturnedWith(1, 'value 1')
  expect(mockCallback).toHaveNthReturnedWith(2, 'value 2')
  expect(mockCallback).toHaveNthReturnedWith(3, 'default')
  expect(mockCallback).toHaveNthReturnedWith(3, 'default')
})