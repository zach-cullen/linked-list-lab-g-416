function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let prevNode = nodeAt(index - 1, linkedList, collection)
    return prevNode.next
  }
}

function indexAt(node, collection, linkedList) {
  let i = 0
  while(nodeAt(i, linkedList, collection) != node) {
    i++
  }
  return i
}

function insertNodeAt(index, newNode, linkedList, collection) {
  // get address of node currently at index
  const bumped = addressAt(index, linkedList, collection)
  // get address of node pointing to bumped
  const prev = addressAt(index - 1, linkedList, collection)
  // add new node to collection pointing to bumped
  collection[newNode] = {next: bumped}
  console.log('COLLECTION NEW NODE: ', collection[newNode])
  console.log(collection)
  // update prev to point to new node
  collection[prev]['next'] = newNode
}