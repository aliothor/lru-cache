export class MapLRUCache<T> {
    max: number
    onRemove: (value: T) => void
    data: Map<string, T>
    constructor(max: number, onRemove = (_value: T) => {}) {
        this.max = max;
        this.onRemove = onRemove;
        this.reset();
    }

    reset() {
        if (this.data) {
            const values = this.data.values();
            for (const p of values) {
                this.onRemove(p);
            }
        }

        this.data = new Map();
        return this;
    }

    clear() {
        this.reset();
        this.onRemove = (_value: T) => {}
    }

    add(key: string, data: T) {
        if (!data) {
            return this;
        }
        if (this.has(key)) {
            this.data.delete(key);
            this.data.set(key, data);
            // if (this.data.size > this.max) {
            //     this.shrink();
            // }
        } else {
            this.data.set(key, data);
            // if (this.data.size > this.max) {
            //     this.shrink();
            // }
        }

        return this;
    }

    keys() {
        const keys = Array.from({ length: this.data.size });
        let i = 0;
        const iterator = this.data.keys();
        for (const k of iterator) {
            keys[i++] = k;
        }
        return keys;
    }


    shrink() {
        const iterator = this.data.keys();
        let item = iterator.next();
        while (this.data.size > this.max) {
            const removedData = this.getAndRemove(item.value);
            if (removedData) {
                this.onRemove(removedData);
            }
            item = iterator.next();
        }
    }

    has(key: string) {
        return this.data.has(key);
    }


    getAndRemove(key: string) {
        if (!this.has(key)) { return }

        const data = this.data.get(key);
        this.data.delete(key);
        return data;
    }


    get(key: string) {
        if (!this.has(key)) { return }

        const data = this.data.get(key);
        return data;
    }

    remove(key: string) {
        if (!this.has(key)) { return this; }

        const data = this.data.get(key);
        this.data.delete(key);
        this.onRemove(data!);

        return this;
    }

    setMaxSize(max: number) {
        this.max = max;
        if (this.data.size > this.max) {
            this.shrink();
        }
        return this;
    }
};

