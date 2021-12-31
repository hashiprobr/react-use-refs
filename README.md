react-use-refs
==============

**A React Hook for using multiple refs with a clean sintax**

This hook receives an object and creates a ref for each one of its properties,
using the received value as the initial one. It returns a proxy object in which
the property names are the same, but each value is the `.current` property of
its respective ref.

The role of this proxy object in functional components is analogous to the role
of `this` in class components: you use its properties to preserve values between
renders, similar to how you would use instance fields.


Install
-------

```
npm install @hashiprobr/react-use-refs
```


Example
-------

You just need a single call of `useRefs`...

``` js
import useRefs from '@hashiprobr/react-use-refs';

export default function MyComponent() {
    const refs = useRefs({
        myInt: 1,
        myStr: 'hello',
        myObj: { a: 2, b: 'world' },
    });

    function change() {
        refs.myInt = 10;
        refs.myStr = 'HELLO';
        refs.myObj.a = 20;
        refs.myObj.b = 'WORLD';
    }

    return (
        <div>
            <p>{refs.myInt}</p>
            <p>{refs.myStr}</p>
            <p>{refs.myObj.a}</p>
            <p>{refs.myObj.b}</p>
        </div>
    );
}
```

...instead of multiple calls of `useRef`.

``` js
import { useRef } from 'react';

export default function MyComponent() {
    const myIntRef = useRef(1);
    const myStrRef = useRef('hello');
    const myObjRef = useRef({ a: 2, b: 'world' });

    function change() {
        myIntRef.current = 10;
        myStrRef.current = 'HELLO';
        myObjRef.current.a = 20;
        myObjRef.current.b = 'WORLD';
    }

    return (
        <div>
            <p>{myIntRef.current}</p>
            <p>{myStrRef.current}</p>
            <p>{myObjRef.current.a}</p>
            <p>{myObjRef.current.b}</p>
        </div>
    );
}
```
