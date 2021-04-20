// 最小堆类,但是不支持传入引用类型
class MinHeap {
    constructor() {
        this.heap = [];
    };
    // 交换节点位置
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    };
    // 获得父节点
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    };
    // 获得左节点
    getleftIndex(i) {
        return 2 * i + 1;
    };
    // 获得右节点
    getrightIndex(i) {
        return 2 * i + 2;
    };
    // 上移
    shiftUp(index) {
        if (index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    };
    // 下移
    shiftDown(index) {
        const leftIndex = this.getleftIndex(index);
        const rightIndex = this.getrightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    };
    // 插入 时间复杂度O(logk)，k为堆大小
    push(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    };
    // 删除堆顶
    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        let ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        // 对堆顶重新排序
        this.shiftDown(0);
        return ret;
    };
    // 获取堆顶
    peek() {
        return this.heap[0];
    };
    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}



let h =new heap();
console.log(h);