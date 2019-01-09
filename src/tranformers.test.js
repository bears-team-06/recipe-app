const mockedData = require('./Mock/Mock')
const transformRecipeResponse = require('./transformers')

it('transforms recipe object correctly', () => {
    let transformedObject = transformRecipeResponse(mockedData)
    expect(transformedObject).toBeDefined
    expect(transformedObject).toMatchSnapshot()
})