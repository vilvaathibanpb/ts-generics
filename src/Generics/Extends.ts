
class HTMLWrapper<GenericType extends HTMLElement> {
    // get a HTML Element and add few attributes/text to it
    private element: GenericType;

    constructor(element: GenericType) {
        this.element = element
    }

    setText() {
        this.element.textContent = "Hello"
    }

    setName() {
        this.element.setAttribute("name", "heading")
    }
}

const heading = document.createElement("h1");
const headingWrapper = new HTMLWrapper<HTMLHeadingElement>(heading)

const button = document.createElement("button");
const buttonWrapper = new HTMLWrapper<HTMLButtonElement>(button)