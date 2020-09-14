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



