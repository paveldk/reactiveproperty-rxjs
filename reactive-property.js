const rx = require("rxjs");
const _ = require("lodash");

const _values = new WeakMap();
const _observers = new WeakMap();
const _defaultIsUndefined = new WeakMap();

class ReactiveProperty {
    constructor(defaultValue) {
        const source = rx.Observable.create((obs) => {
            if(!_defaultIsUndefined.get(this)) {
                obs.next(_values.get(this));
            }

            _observers.get(this).push(obs);
        });

        _.assignIn(this, source);

        _observers.set(this, []);

        if (!_.isUndefined(defaultValue)) {
            _values.set(this, defaultValue);
        } else {
            _defaultIsUndefined.set(this, true);
        }
    }

    get value() {
        return _values.get(this);
    }

    set value(val) {
        const currentVal = _values.get(this);

        if (_.isEqual(val, currentVal)) {
            return;
        }

        _values.set(this, val);

        const observers = _observers.get(this);

        _.forEach(observers, (obs) => {
            obs.next(val);
        });
    }
}

module.exports = ReactiveProperty;