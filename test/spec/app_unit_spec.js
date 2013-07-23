
describe("Application unit", function() {
  beforeEach(module("unit"))

  describe("unitController", function() {
    var scope, unitController

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new()
      unitController = $controller("unitController", {$scope: scope})
    }))

    it("should succeed", function() {
      expect(scope.elements.length).toEqual(3)
    })

    it("should fail", function() {
      expect(scope.elements.length).toEqual(4)
    })
  })
})
