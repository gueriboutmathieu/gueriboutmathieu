export class WorkExperience {

	title: string;
	company: string;
	startDate: string;
	endDate: string;
	currentWork: boolean;
	description: string;
	tasks: Array<string>;
	stack: Array<Array<string>>;

	constructor(title: string, company: string, startDate: string, endDate: string, currentWork: boolean,
		description: string, tasks: Array<string>, stack: Array<Array<string>>) {

		this.title = title;
		this.company = company;
		this.startDate = startDate;
		this.endDate = endDate;
		this.currentWork = currentWork;
		this.description = description;
		this.tasks = tasks;
		this.stack = stack;
	}

}