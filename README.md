# ReactiveProperty & ReactiveCollection implementations for rxjs5

Inspired by implementation in other languages e.g. [UniRx](https://github.com/neuecc/UniRx#reactiveproperty-reactivecollection)

1. ReactiveProperty 
````javascript
const { ReactiveProperty } = require("reactiveproperty-rxjs");

const MyClass {
  this.myProperty = new ReactiveProperty(); // could be undefined
}

const myInstnace = new MyClass();

myInstance.myProperty.subscribe(x => console.log(`first subscriber: ${x}`)); // you can work with the prop as any other observable -> filer, map, merge etc.

myInstance.myProperty.value = 20; // this value will be propagated to all subscribers

myInstance.myProperty.subscribe(x => console.log(`second subscriber: ${x}`));

myInstance.myProperty.value = 30;
// RESULT:
first subscriber: 20
second subscriber: 20
first subscriber: 30
second subscriber: 30
````

1. ReactiveProperty - default value (if the default value is empty - it will not be send immediately to new subscribers)
````javascript
const { ReactiveProperty } = require("reactiveproperty-rxjs");

const MyClass {
  this.myProperty = new ReactiveProperty(10); // could be undefined
}

const myInstnace = new MyClass();

myInstance.myProperty.subscribe(x => console.log(`first subscriber: ${x}`)); // you can work with the prop as any other observable -> filer, map, merge etc.

myInstance.myProperty.value = 20; // this value will be propagated to all subscribers

myInstance.myProperty.subscribe(x => console.log(`second subscriber: ${x}`));

myInstance.myProperty.value = 30;
// RESULT:
first subscriber: 10
first subscriber: 20
second subscriber: 20
first subscriber: 30
second subscriber: 30
````

TODO: add `toReactiveProperty()` and `ReactiveCollection` support
