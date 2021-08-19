class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  _isEmpty(address) {
    return !this.data[address];
  }

  set(key, value) {
    const address = this._hash(key);
    if (this._isEmpty(address)) {
      this.data[address] = [];
    }

    this.data[address].push([ key, value ]);
  }

  get(key) {
    const valueArr = this.data[this._hash(key)];
    if (valueArr) {
      for (let i = 0; i < valueArr.length; i++) {
        if (valueArr[i][0] === key) {
          return valueArr[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const valueArr = this.data[i];
      if (valueArr) {
        for (let j = 0; j < valueArr.length; j++) {
          keys.push(valueArr[j][0]);
        }
      }
    }
    return keys.join(',');
  }
}