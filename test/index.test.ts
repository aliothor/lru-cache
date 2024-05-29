import { describe, expect, it } from "vitest";
import { ArrayLRUCache, MapLRUCache } from "../src";

describe("ArrayLRUCache", () => {
  const lru = new ArrayLRUCache<number>(256, (value) => {
    console.log(value);
  })

  it("add", () => {
    const res = lru.add('test', 1).get('test')
    expect(res).toBe(1)
  })
})


describe("MapLRUCache", () => {

  const lru = new MapLRUCache<number>(256, (value) => {
    console.log(value);
  })

  it("add", () => {
    const res = lru.add('test', 1).get('test')
    expect(res).toBe(1)
  })
})