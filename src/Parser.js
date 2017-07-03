export class Parser {
	constructor() {
		this.root_element = {
			title: null,
			isRoot: true,
			children: [],
			el_id: -1
		};

		this.parent_elements = null;
		this.el_id = 0;
	}

	parse_element(el) {
		const indentation_level = el.match(/^( *)/gi)[0].length;

		let title = el.substr(indentation_level);
		const data = {
			id: this.el_id++,
			title, 
			isRoot: false,
			children: []
		};
		
		this.parent_elements[(indentation_level/2) + 1] = data;

		if (this.parent_elements[(indentation_level/2)]) {
			this.parent_elements[(indentation_level/2)].children.push(data);
		}
	}

	parse(text) {
		this.el_id = 0;

		// This isn't the smartest deep cloning of JS objects, but it works
		this.parent_elements = [JSON.parse(JSON.stringify(this.root_element))];

		text.split('\n').forEach((el) => this.parse_element(el));
		return this.parent_elements.shift();
	}
}