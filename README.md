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


Example
-------

Instead of multiple calls of `useRef`...

```
```

...you use a single call of `useRefs`.

```
```
