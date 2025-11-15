class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        const popped = this.top.data;
        this.top = this.top.next;
        return popped;
    }

    display() {
        let temp = this.top;
        const values = [];
        while (temp) {
            values.push(temp.data);
            temp = temp.next;
        }
        return values;
    }
}

const stack = new Stack();

function handlePush() {
    const value = document.getElementById('stackValue').value;
    if (!value) return;
    stack.push(parseInt(value));
    showStack();
    document.getElementById('output').innerText = `Pushed: ${value}`;
    document.getElementById('stackValue').value = '';
}

function handlePop() {
    const popped = stack.pop();
    if (popped === null) {
        document.getElementById('output').innerText = "Stack is empty";
    } else {
        document.getElementById('output').innerText = `Popped: ${popped}`;
        showStack();
    }
}

function showStack() {
    const stackDiv = document.getElementById('stackContents');
    const nodes = stack.display();
    stackDiv.innerHTML = "";
    nodes.forEach((data, idx) => {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'stack-node';
        nodeDiv.innerText = data;
        stackDiv.appendChild(nodeDiv);
    });
}
