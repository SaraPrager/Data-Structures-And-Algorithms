class CustomArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    get(index) {
      return this.data[index];
    }

    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }

    pop() {
      this.length--;
      const obj = this.data[this.length];
      delete this.data[this.length];
      return obj;
    }

    delete(index) {
      const item = this.data[index];
      this.data = this.shift(index);  
      this.length--;
      return item;
    }

    shift(index) {
      const tempObj = {};
      for (let i = 0; i < this.length; i++) {
        if (i !== index) {
          tempObj[i] = this.data[i];
        }
      }
      return tempObj;
    }
}