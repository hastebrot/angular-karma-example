/// <reference path="../../vendor/def.ts/jasmine/jasmine.d.ts" />
/// <reference path="../../vendor/def.ts/angularjs/angular-scenario.d.ts" />

describe("Application scenario", function() {

  describe("scenarioController", function() {

    beforeEach(function() {
      browser().navigateTo("index.html")
    })

    it("should succeed", function() {
      expect(element("#foo").text()).toEqual("foo")
    })

    it("should fail", function() {
      expect(element("#bar").text()).toEqual("foo")
    })

  })

})
