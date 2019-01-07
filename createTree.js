
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insertNode(val) {
    var node = {
      data: val,
      left: null,
      right: null
    };

    var currentNode;
    if (!this.root) {
      this.root = node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (val < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log(`Valoarea ${val} este ignorata deoarece arborele ar trebui sa contina valori unice.`);
          break;
        }
      }
    }
  }

  inOrderRecursive(root) {

    if (root.left) {
      this.inOrderRecursive(root.left);
    }
    console.log(root.data);
    if (root.right) {
      this.inOrderRecursive(root.right);
    }
  }

  inOrderIterative(root) {
    var callStack = [];
    var current = root;
    var result = [];
    while (true) {
      while (current) {
        callStack.push(current);
        current = current.left;
      }
      if (callStack.length == 0) break;
      var lastCurrent = callStack.pop();
      result.push(lastCurrent.data);
      current = lastCurrent.right;
    }
    console.log(result);
  }

}

var BST = new BinarySearchTree();

BST.insertNode(8);
BST.insertNode(4);
BST.insertNode(10);
BST.insertNode(9);
BST.insertNode(2);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(5);
BST.insertNode(7);
BST.insertNode(13);
BST.insertNode(15);


function printTree(BST){
  var mainNode = BST.root.data
  var leftNodes = BST.root.left
  var rightNodes = BST.root.right
console.log(`
Arbore Rezultat  

       ${mainNode}
     /   \\
   ${leftNodes.data}      ${rightNodes.data}
  / \\     / \\
 ${leftNodes.left.data}   ${leftNodes.right.data}   ${rightNodes.left.data}   ${rightNodes.right.data}
    / \\      / \\
   ${leftNodes.right.left.data}   ${leftNodes.right.right.data}    ${rightNodes.right.left.data}  ${rightNodes.right.right.data} \n
   `)
}

setTimeout(printTree(BST), 50); 

console.log(`Parcurgere in ordine recursiv:`);
BST.inOrderRecursive(BST.root);
console.log(`Parcurgere in ordine iterativ:`);
BST.inOrderIterative(BST.root);




// Parcurgerea in inordine (stanga –varf – dreapta SVD) – se parcurge mai intai subarborele stang, apoi varful, apoi subarborele drept.

