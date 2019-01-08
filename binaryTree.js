
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
$('#treeForm').append(`
Arbore Rezultat  </br>

&emsp;&emsp;&emsp;&nbsp;&nbsp;${mainNode}</br>
&emsp;&emsp;&emsp;/&nbsp;&nbsp;&nbsp;\\</br>
&emsp;&emsp;&nbsp;${leftNodes.data}&emsp;&nbsp;&nbsp;${rightNodes.data}</br>
&emsp;&emsp;/ \\ &emsp;&nbsp;/ \\</br>
&emsp;&ensp;${leftNodes.left.data}&ensp;   ${leftNodes.right.data} &nbsp;  ${rightNodes.left.data} &nbsp;  ${rightNodes.right.data}</br>
&emsp;&nbsp;/ \\    &emsp;&emsp;&ensp;  &nbsp;/ &nbsp;&nbsp;\\</br>
&ensp; ${leftNodes.right.left.data} &nbsp; ${leftNodes.right.right.data}  &emsp;&nbsp;&nbsp;&nbsp; ${rightNodes.right.left.data}&ensp;  ${rightNodes.right.right.data} </br>
   `)
}

console.log(`Parcurgere in ordine recursiv:`);
BST.inOrderRecursive(BST.root);
console.log(`Parcurgere in ordine iterativ:`);
BST.inOrderIterative(BST.root);


$(document).ready( function () {
  printTree(BST);
});

// Parcurgerea in inordine (stanga –varf – dreapta SVD) – se parcurge mai intai subarborele stang, apoi varful, apoi subarborele drept.

// Two spaces - Type in &ensp;
// Four spaces - Type in &emsp;