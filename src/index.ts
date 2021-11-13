import * as R from "ramda";

export function calculate(fn: any, ...args: number[]){
  return R.reduce(fn, args[0], R.slice(1, args.length, args));
}