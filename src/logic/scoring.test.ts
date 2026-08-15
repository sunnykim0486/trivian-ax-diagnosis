import test from "node:test";import assert from "node:assert/strict";import {calculateScores,maturity} from "./scoring";import {questions} from "../data/diagnosis";
test("score formula",()=>{for(const v of [1,5])assert.equal(calculateScores(Object.fromEntries(questions.map(q=>[q.id,v]))).overall,v*20)});
test("level boundaries",()=>{for(const [s,l] of [[35,1],[36,2],[50,2],[51,3],[65,3],[66,4],[80,4],[81,5]])assert.equal(maturity(s).level,l)});
