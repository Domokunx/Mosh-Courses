function HTMLElement() {
    this.click = function() {
        console.log("clicked");
    }
}
HTMLElement.prototype.focus = function(){
    console.log("focused");
}

function HTMLSelectElement(...items) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }
                                        
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
};

function HTMLImageElement(src) {
    this.src = src;

    this.render = function() {
        return(`<img src="${this.src}" />`)
    }
}
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const elements = [new HTMLSelectElement(1,2,3), new HTMLImageElement('https://')];
for (let element of elements) {
    console.log(element.render());
}