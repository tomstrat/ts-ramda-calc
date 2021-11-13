"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("ramda"));
var index_1 = require("../index");
describe("test add function", function () {
    it("add numbers correctly", function () {
        expect((0, index_1.calculate)(R.add, 10, 15)).toBe(25);
    });
    it("adds more than 2 numbers", function () {
        expect((0, index_1.calculate)(R.add, 5, 7, 20, 30)).toBe(62);
    });
    it("returns same number if one argument", function () {
        expect((0, index_1.calculate)(R.add, 10)).toBe(10);
    });
});
describe("test subtract function", function () {
    it("subtract numbers correctly", function () {
        expect((0, index_1.calculate)(R.subtract, 15, 5)).toBe(10);
    });
    it("subtracts more than 2 numbers", function () {
        expect((0, index_1.calculate)(R.subtract, 100, 50, 25, 10)).toBe(15);
    });
    it("returns same number if one argument", function () {
        expect((0, index_1.calculate)(R.subtract, 10)).toBe(10);
    });
    it("returns minus numbers", function () {
        expect((0, index_1.calculate)(R.subtract, 25, 10, 50, 6)).toBe(-41);
    });
});
