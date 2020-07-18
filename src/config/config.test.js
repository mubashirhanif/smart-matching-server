"use strict";

process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const { config, db, smtpTransport, logger } = require("./index");

describe("Config", () => {
  it("should get config object", () => {
    expect(config).to.be.an("object");
  });
  it("should get db object", () => {
    expect(db).to.be.an("object");
  });
  it("should get smtpTransport object", () => {
    expect(smtpTransport).to.be.an("object");
  });
  it("should get logger object", () => {
    expect(logger).to.be.an("object");
  });
});
