const mockedData = require('./Mock/Mock')
import transformRecipeResponse from './transformers'
it('transforms recipe object correctly', () => {
    let transformedObject = transformRecipeResponse(mockedData)
    expect(transformedObject).toBeDefined
    expect(transformedObject).toMatchSnapshot()
})