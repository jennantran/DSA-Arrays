const Memory = require('./Memory');

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.memory = new Memory()
        
        this.ptr = Memory.allocate(this.length);
        console.log(this.ptr)
    }

    push(value) {
        //each time you go over the capacity,
        // you triple the size of memory which is allocated
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        this.memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        this.memory.copy(this.ptr, oldPtr, this.length);
        this.memory.free(oldPtr);
        this._capacity = size;
        console.log(size);
    }

    //this adds an index offset and get the value stored at a memory
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this.memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    //you need to shift all of the values after the new value back 1 position. 
    //Then you put the new value in its correct place.
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        this.memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        this.memory.set(this.ptr + index, value);
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}
Array.SIZE_RATIO = 3;

function main(){
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(5);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();

}

main();

