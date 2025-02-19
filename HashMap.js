export class HashMap {
    MAX_CAP = 0.75;
    buckets = Array.from({ length: 16 }, () => []);
    size = 0;

    _hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.buckets.length;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        const pair = bucket.find((item) => item.key === key);
        if (pair) {
            pair.value = value;
            return;
        }

        if (bucket.length === 0) this.size += 1;
        bucket.push({ key, value });

        if (this.buckets.length * this.MAX_CAP < this.size) {
            this._resize();
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        const pair = bucket.find((pair) => pair.key === key);
        if (pair) return pair.value;
        return null;
    }

    has(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        for (let pair of bucket) {
            if (pair.key === key) return true;
        }
        return false;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        const pairIndex = bucket.findIndex((pair) => pair.key === key);
        if (pairIndex > -1) {
            bucket.splice(pairIndex, 1);
            if (bucket.length === 0) this.size -= 1;
            return true;
        }
        return false;
    }

    length() {
        const countPair = this.buckets.reduce((sum, bucket) => sum + bucket.length, 0);
        return countPair;
    }

    values() {
        const values = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach((pair) => values.push(pair.value));
        });
        return values;
    }

    entries() {
        const pairs = [];
        this.buckets.forEach((bucket, index) => {
            bucket.forEach((pair) => pairs.push(`[${pair.key}, ${pair.value}]`));
        });
        return pairs;
    }

    toString() {
        this.buckets.forEach((bucket, index) => {
            let string = `[${index}] : `;
            bucket.forEach((pair) => (string += ` --> {${pair.key} = "${pair.value}"}`));
            console.log(string);
        });
    }

    _resize() {
        const newBucketsLen = this.buckets.length * 2;
        const newBuckets = Array.from({ length: newBucketsLen }, () => []);
        this.size = 0;

        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                const index = this._hash(pair.key);
                if (newBuckets[index].length === 0) this.size += 1;
                newBuckets[index].push(pair);
            }
        }

        this.buckets = newBuckets;
    }

    clear() {
        const newBuckets = Array.from({ length: 16 }, () => []);
        this.buckets = newBuckets;
        this.size = 0;
    }
}
