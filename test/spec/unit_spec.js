
describe("suiteFunction", function() {

  it("should succeed", function() {
		expect(suiteFunction("foo")).toEqual("foo")
	})

  it("should fail", function() {
		expect(suiteFunction("foo")).toEqual("bar")
	})

})
