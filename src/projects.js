// This will be a list of the main tables Items. the list should have the title, description, Start date, Delivery date and Outstanding Tasks

function Project (title, desc, start, end, outstanding) {
    this.title = title
    this.description = desc
    this.start = start
    this.end = end
    this.outstanding = outstanding

}

const example1 = new Project('Example', 'A description of the project', '02/01/23', '10/01/23', 5)

const projectList = []
projectList.push(example1)


export default projectList // This should be an array of objects

// This list will be exported to the maintable .js and a funciotn will need to be exported to add additional projects