const { validateRequestWithID } = require("./recipe.controller");

const requestWith = id => {
  return {
    params: { id }
  };
};
describe("recipe controller", () => {
  describe("validateRequestWithID", () => {
    it("throws an error if id is incorrect format", () => {
      const resSpy = jest.fn();
      const nextSpy = jest.fn();
      function validator() {
        validateRequestWithID(requestWith("1"), resSpy, nextSpy);
      }
      expect(validator).toThrowError("ID:1 is invalid");
      expect(resSpy).not.toHaveBeenCalled();
      expect(nextSpy).not.toHaveBeenCalled();
    });

    it("throws an error if id is not present", () => {
      const resSpy = jest.fn();
      const nextSpy = jest.fn();
      function validator() {
        validateRequestWithID(requestWith(undefined), resSpy, nextSpy);
      }
      expect(validator).toThrowError("ID is not passed");
      expect(resSpy).not.toHaveBeenCalled();
      expect(nextSpy).not.toHaveBeenCalled();
    });
  });
});
