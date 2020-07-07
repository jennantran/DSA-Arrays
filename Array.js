const Memory = require('./Memory');

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.memory = new Memory()
        
        this.ptr = this.memory.allocate(this.length);
        console.log('length',this.length)
        console.log('ptr',this.ptr)
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
        this.ptr = this.memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        this.memory.copy(this.ptr, oldPtr, this.length);
        this.memory.free(oldPtr);
        this._capacity = size;
        console.log('size',size);
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
        const value = this.memory.get(this.ptr + this.length - 1);
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
    arr.push(3);
    console.log(arr);
    //length: 1, capacity: 3, addr: 0
    arr.push(15);
    console.log(arr);
    //length: 2, capacity: 3, addr: 1
    arr.push(19); 
    console.log(arr);
    //length: 3, capacity: 3, addr: 2 
    arr.push(45);
    console.log('push 45', arr);
    //length: 4, capacity: 12, addr: 6
    arr.push(10);
    console.log(arr);
    //length: 5, capacity: 12, addr: 7

    arr.pop();
    console.log('pop 1', arr);
    //length: 4, capacity: 12, addr: 7
    arr.pop();
    console.log('pop 2', arr);
    //length: 3, capacity: 12, addr: 7
    arr.pop();
    console.log('pop 3', arr);
    //length: 2, capacity: 12, addr: 7
    console.log('first item in array', arr.get(0));
    arr.push('tauhida');
    console.log('push tauhida',arr);
    //resize: address is changed

}

main();

