import { useRef } from 'react';

export default function useRefs(object) {
    if (typeof object !== 'object') {
        throw new TypeError('Argument of useRefs must be an object');
    }

    if (object === null) {
        throw new Error('Argument of useRefs cannot be null');
    }

    const refs = {};

    for (const [name, value] of Object.entries(object)) {
        refs[name] = useRef(value);
    }

    return new Proxy(refs, {
        get: (target, property) => {
            if (property in target) {
                return target[property].current;
            }
        },
        set: (target, property, value) => {
            if (property in target) {
                target[property].current = value;
                return true;
            } else {
                return false;
            }
        },
    });
}
