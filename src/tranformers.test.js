const mockedData = require("./Mock/Mock");
const transformRecipeResponse = require("./transformers");

it("transforms recipe object correctly", () => {
  const transformedObject = transformRecipeResponse(mockedData);
  expect(transformedObject).toBeDefined();
  expect(transformedObject).toMatchSnapshot();
});
