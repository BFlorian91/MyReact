
/**
 * All's in the title ;)
 * 
 * @param {string} type
 * @param {object} props
 * @param {...object|string} children
 */

export function createElement(type, props, ...children) {
  // console.log(type)
  // console.log(props)
  // console.log(...children);
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        // console.log(child)
        return typeof child == 'object' ? child : createTextElement(child)
      })
    }
  }
}


/**
 * Create a node type: text
 *
 * @param {string} text
 * @returns {{ type: string, props: {nodeValue: *, children[]} }}
 */

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}