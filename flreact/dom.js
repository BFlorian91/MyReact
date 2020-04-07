
/** 
 * Add Element to the DOM
 * @export
 * @param {object} element
 * @param {HTMLElement} container
 */

export function render(element, container) {
  // console.log(element)
  // console.log(container)
  const dom = 
    element.type == 'TEXT_ELEMENT'
    ? document.createTextNode(element.props.nodeValue)
    : document.createElement(element.type)

    Object.keys(element.props).forEach(name => {
      if (name != 'children') {
      // console.log(element.props[name])
        dom[name] = element.props[name]
      }
    })
  
  element.props.children.forEach(child => {
    render(child, dom)
  });

  container.appendChild(dom)
}