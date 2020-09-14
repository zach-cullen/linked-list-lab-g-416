function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, collection) {
  return collection[index]
}