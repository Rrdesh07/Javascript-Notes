// Map keys

/*
*   In javascript, keys can be any type... because of course they can
*   This is javascript, after all.But just because you can, doesn't mean
*   you should ... if you're a sicko you might be wondering if this works:
* */

const map = new Map();
map.set(["hello","world"],"value of hello world");
console.log(map.get(["hello","world"]));// --> this give undefined

// why?

/*
*  -- > It actually doesn't . Ha! The key is an array, but it's a different
*       array than one we used to set the value . Sure , the contents are the
*       same , but what matters when comparing keys is that reference to the
*       object (or array) in memory is the same. So, unfortunately if we use
*       a single named variable, it does work:
* */

const secondMap= new Map();
const greetingKey=["hello","world"];
secondMap.set(greetingKey,"value of hello world");
console.log(secondMap.get(greetingKey)); // value of hello world

// That said , this still makes me sick to look at ... 99% of cases, you
// should just use string or numbers as keys.
