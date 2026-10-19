import test from 'node:test';
import assert from 'node:assert/strict';
import {time,derivative,exactChange,probability,clamp} from './dist/math.mjs';
test('ejemplo académico y unidades numéricas',()=>{assert.equal(probability(150),.75);assert.equal(time(100),121);assert.equal(derivative(100),2.2);assert.ok(Math.abs(exactChange(100)-2.21)<1e-10);});
test('extremos y tasa creciente',()=>{assert.equal(probability(0),0);assert.equal(probability(200),1);assert.equal(time(0),1);assert.equal(time(200),441);for(let x=0;x<=200;x++){assert.ok(Math.abs((exactChange(x)-derivative(x))-.01)<1e-10);assert.ok(time(x+1)>time(x));}assert.equal(clamp(-9,0,200),0);assert.equal(clamp(999,0,200),200);});
