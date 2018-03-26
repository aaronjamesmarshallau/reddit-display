class Store {
    constructor() {
        this.boundCallbacks = {};
        this.items = [];
    }    

    refresh() {
        throw new Error("Not implemented.");
    }

    add(item) {
        this.items.push(item);
    }

    trigger(eventName) {
        var callbacks = this.boundCallbacks[eventName];

        if (!Array.isArray(callbacks)) return;

        for (var i = 0; i < callbacks.length; i++) {
            var callback = callbacks[i];

            callback.apply(this);
        }
    }

    bind(eventName, callbackFn) {
        if (!this.boundCallbacks.hasOwnProperty(eventName)) {
            this.boundCallbacks[eventName] = [];
        }

        this.boundCallbacks[eventName].push(callbackFn);
    }
}

export default Store;