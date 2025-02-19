import { HashMap } from "./HashMap.js";

const hashmap = new HashMap();
// hashmap.set("a", "aku");
// hashmap.set("b", "kamu");
// hashmap.set("B", "KAMU");
// hashmap.toString();

// hashmap._resize();
// hashmap.toString();

// console.log("Get B : " + hashmap.get("B"));
// console.log("Has B : " + hashmap.has("B"));
// console.log("Has C : " + hashmap.has("C"));

// console.log("Remove B : " + hashmap.remove("B"));
// console.log("Remove C : " + hashmap.remove("C"));
// hashmap.toString();

hashmap.set("apple", "red");
hashmap.set("banana", "yellow");
hashmap.set("carrot", "orange");
hashmap.set("dog", "brown");
hashmap.set("elephant", "gray");
hashmap.set("frog", "green");
hashmap.set("grape", "purple");
hashmap.set("hat", "black");
hashmap.set("ice cream", "white");
hashmap.set("jacket", "blue");
hashmap.set("kite", "pink");
hashmap.set("lion", "golden");

hashmap.toString();

console.log("Total key : " + hashmap.length());

// hashmap.clear();
// hashmap.toString();
// console.log("hash filled : " + hashmap.size);
// console.log("Total key : " + hashmap.length());

console.log("Values : " + hashmap.values().join(", "));
console.log("Entries : " + hashmap.entries().join(", "));
