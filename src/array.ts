export class ArrayLRUCache<T> {
    max: number
    onRemove: (value: T) => void
    data: {
        [key: string]: T
    }
    order: string[]

    /**
     * @param max number of permitted values
     * @param onRemove callback called with items when they expire
     */
    constructor(max: number, onRemove = (_value: T) => {}) {
        this.max = max;
        this.onRemove = onRemove;
        this.reset();
    }

    /**
     * Clear the cache
     *
     * @returns this cache
     */
    reset() {
        for (const key in this.data) {
            this.onRemove(this.data[key]);
        }

        this.data = {};
        this.order = [];

        return this;
    }

    clear() {
        this.reset();
        this.onRemove = (_value: T) => {};
    }

    /**
     * Add a key, value combination to the cache, trimming its size if this pushes
     * it over max length.
     *
     * @param key lookup key for the item
     * @param data any value
     * @returns this cache
     */
    add(key: string, data: T) {

        if (this.has(key)) {
            this.order.splice(this.order.indexOf(key), 1);
            this.data[key] = data;
            this.order.push(key);

        } else {
            this.data[key] = data;
            this.order.push(key);

            if (this.order.length > this.max) {
                const removedData = this.getAndRemove(this.order[0]);
                if (removedData) this.onRemove(removedData);
            }
        }

        return this;
    }

    /**
     * Determine whether the value attached to `key` is present
     *
     * @param key the key to be looked-up
     * @returns whether the cache has this value
     */
    has(key: string) {
        return key in this.data;
    }

    /**
     * List all keys in the cache
     *
     * @returns an array of keys in this cache.
     */
    keys(): string[] {
        return this.order;
    }

    /**
     * Get the value attached to a specific key and remove data from cache.
     * If the key is not found, returns `null`
     *
     * @param key the key to look up
     * @returns the data, or null if it isn't found
     */
    getAndRemove(key: string) {
        if (!this.has(key)) { return }

        const data = this.data[key];

        delete this.data[key];
        this.order.splice(this.order.indexOf(key), 1);

        return data;
    }

    /**
     * Get the value attached to a specific key without removing data
     * from the cache. If the key is not found, returns `null`
     *
     * @param key the key to look up
     * @returns the data, or null if it isn't found
     */
    get(key: string) {
        if (!this.has(key)) { return }

        const data = this.data[key];
        return data;
    }

    /**
     * Remove a key/value combination from the cache.
     *
     * @param key the key for the pair to delete
     * @returns this cache
     */
    remove(key: string) {
        if (!this.has(key)) { return this; }

        const data = this.data[key];
        delete this.data[key];
        this.onRemove(data);
        this.order.splice(this.order.indexOf(key), 1);

        return this;
    }

    /**
     * Change the max size of the cache.
     *
     * @param max the max size of the cache
     * @returns this cache
     */
    setMaxSize(max: number) {
        this.max = max;

        while (this.order.length > this.max) {
            const removedData = this.getAndRemove(this.order[0]);
            if (removedData) this.onRemove(removedData);
        }

        return this;
    }
}