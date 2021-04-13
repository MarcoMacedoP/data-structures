

class CustomArray{

    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index]
    }
    push(value) {
          this.data[this.length] = value;
        this.length++;
        return this.data;
    }
    pop(){
      delete  this.data[this.length -1];
        this.length--;
        return this.data;
    }

    delete(index){
        const item = this.data[index];
        this.unshiftIndex(index);
        return item;
    }

    unshiftIndex(index){
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[index + 1]
        this.length --;
    }

}
const array = new CustomArray();
array.push("Marco");
array.push("Jose");
