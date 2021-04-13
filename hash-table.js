class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      // prevent undefined errors
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  _find(key, onSuccess) {
    const hash = this.hashMethod(key);
    const bucket = this.data[hash];
    if (!bucket) {
      return undefined;
    }
    for (let index = 0; index < bucket.length; index++) {
      if (bucket[index][0] === key) {
        return onSuccess(bucket[index], index);
      }
    }
    return undefined;
  }

  get(key) {
    return this._find(key, (list) => {
      console.log(list);
      return list[1] || undefined;
    });
  }
  delete(key) {
    return this._find(key, (_, index) => {
      const hash = this.hashMethod(key);
      this.data[hash].splice(index, 1);
      return this.data;
    });
  }
  getAllKeys() {
    const keys = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {
        for (let subIndex = 0; subIndex < this.data[index].length; subIndex++) {
          keys.push(this.data[index][subIndex][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Mariana", 2000);
myHashTable.set("Diego", 110982);
myHashTable.set("Isaac", "3328919973");
myHashTable.set("Marco", "123456");
