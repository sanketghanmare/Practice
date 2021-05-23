class Node {

    constructor(data) {
        this.val = data;
        this.next = null;
    }

    stringValue() {
        return `<Node data: ${this.val}>`
    }
}

/**
 * Class representing singly linked list data structure
 */
export default class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    isEmpty() {
        return this.head === null
    }

    size() {
        /*
        Returns the number of node in the list takes linear time
         */
        let count = 0;
        let current = this.head
        while (current) {
            count += 1;
            current = current.next;
        }
        return count
    }

    /**
     * Method to add new node in singly linked list
     * @param data
     */
    add(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * Method to search a node in linked list
     * @param node value to search
     * @returns {null} by default or node if found
     */
    search(node){
        let current = this.head
        while (current) {
            if (current.val === node) {
                return current
            } else {
                current = current.next
            }
        }
        return null
    }


    /**
     * Method to insert new value at a particular position
     * @param value to be inserted
     * @param index position for a new value
     */
    insert(value, index) {
        if (index === 0) {
            this.add(value)
        }

        if(index > 0) {
            let newNode = new Node(value)
            let position  = index
            let current = this.head
            while (position > 1) {
                current = current.next
                position -= 1
            }

            let prevNode = current
            let nextNode = current.next

            prevNode.next = newNode
            newNode.next = nextNode
        }

    }

    remove(key) {
        let current = this.head
        let previous = null
        let found = false

        while (current && found === false) {
            if(current.val === key && current === this.head) {
                found = true
                this.head = current.next
            } else if(current.val === key) {
                found = true
                previous.next = current.next
            }
            else {
                previous = current
                current = current.next
            }

        }

        return current

    }

    /**
     * Method which returns all the nodes value in the form of array
     * @returns array of node values.
     */
    stringValue() {
        let nodes = []
        let current = this.head

        while (current) {
            if (current === this.head) {
                nodes.push(`[Head: ${current.val}]`)
            } else if (current.next === null) {
                nodes.push(`[Tail: ${current.val}]`)
            } else {
                nodes.push(current.val)
            }

            current = current.next
        }

        return nodes
    }
}

// let node1 = new Node(10);
// let node2 = new Node(20);
// node1.next = node2

let l = new SinglyLinkedList();
l.add(10)
l.add(20)
l.add(30)
l.add(40)



console.log(l.size())
console.log(l.search(20))
console.log(l.insert(50,4))
console.log(l.stringValue())
console.log(l.remove(50))
console.log(l.stringValue())


