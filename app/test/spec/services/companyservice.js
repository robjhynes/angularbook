'use strict';

describe('Service: CompanyService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var CompanyService;
  beforeEach(inject(function (_CompanyService_) {
    CompanyService = _CompanyService_;
  }));

  it('should do something', function () {
    expect(!!CompanyService).toBe(true);
  });

});
