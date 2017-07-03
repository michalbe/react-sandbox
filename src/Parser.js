export class Parser {
	constructor() {
		this.root_element = [{
			title: null,
			isRoot: true,
			children: []
		}];

		this.parent_elements = null;
	}

	parse_element(el) {
		const indentation_level = el.match(/^( *)/gi)[0].length;
		let title = el.substr(indentation_level);
		const data = {
			title, 
			isRoot: false,
			children: []
		};

		this.parent_elements[(indentation_level/2) + 1] = data;
		this.parent_elements[(indentation_level/2)].children.push(data);
	}

	parse(text) {
		this.parent_elements = [Object.assign({}, this.root_element)];
		text.split('\n').forEach(this.parse_element);

		return this.parent_elements.shift();
	}
}