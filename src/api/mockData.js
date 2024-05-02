export const projectsData = [
    {
        id: 1,
        name: 'Project Alpha',
        description: 'Develop a new feature for our software platform.',
        tasks: [
            { id: 1, name: 'Create API Endpoints', status: 'To Do', description: 'Design and implement new RESTful endpoints.', deadline: '2024-01-15', assignee: 'John Doe' },
            { id: 2, name: 'Develop Frontend Components', status: 'In Progress', description: 'Build new React components for the user interface.', deadline: '2024-02-01', assignee: 'Jane Smith' },
            { id: 3, name: 'Write Unit Tests', status: 'Done', description: 'Develop and run unit tests for backend services.', deadline: '2023-12-15', assignee: 'Michael Johnson' },
        ],
        team: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }],
        activities: [
            { id: 1, description: 'Project Kickoff Meeting' },
            { id: 2, description: 'Design Review Session' },
        ],
    },
    {
        id: 2,
        name: 'Project Beta',
        description: 'Implement a new customer-facing feature for a product.',
        tasks: [
            { id: 1, name: 'Conduct User Research', status: 'To Do', description: 'Interview customers to gather feedback.', deadline: '2024-01-20', assignee: 'Emily Davis' },
            { id: 2, name: 'Develop Wireframes', status: 'In Progress', description: 'Create wireframes for the new feature.', deadline: '2024-02-10', assignee: 'Christopher Lee' },
            { id: 3, name: 'Integrate with Backend', status: 'Done', description: 'Connect frontend to backend services.', deadline: '2023-12-20', assignee: 'James Brown' },
        ],
        team: [{ id: 3, name: 'Emily Davis' }, { id: 4, name: 'Christopher Lee' }],
        activities: [
            { id: 1, description: 'Customer Feedback Session' },
            { id: 2, description: 'Prototype Demonstration' },
        ],
    },
    {
        id: 3,
        name: 'Project Gamma',
        description: 'Refactor the codebase to improve maintainability.',
        tasks: [
            { id: 1, name: 'Identify Code Smells', status: 'To Do', description: 'Analyze the codebase for refactoring opportunities.', deadline: '2024-01-25', assignee: 'Sophia White' },
            { id: 2, name: 'Refactor Components', status: 'In Progress', description: 'Refactor legacy components for improved maintainability.', deadline: '2024-02-15', assignee: 'Liam Johnson' },
            { id: 3, name: 'Test Refactored Code', status: 'Done', description: 'Run integration tests on refactored code.', deadline: '2023-12-25', assignee: 'Olivia Martin' },
        ],
        team: [{ id: 5, name: 'Sophia White' }, { id: 6, name: 'Liam Johnson' }],
        activities: [
            { id: 1, description: 'Code Review Session' },
            { id: 2, description: 'Refactoring Workshop' },
        ],
    },
    {
        id: 4,
        name: 'Project Delta',
        description: 'Develop a new marketing campaign for a product launch.',
        tasks: [
            { id: 1, name: 'Design Marketing Material', status: 'To Do', description: 'Create banners and flyers for the campaign.', deadline: '2024-01-30', assignee: 'Ava Thompson' },
            { id: 2, name: 'Launch Social Media Campaign', status: 'In Progress', description: 'Initiate the campaign on social media platforms.', deadline: '2024-02-20', assignee: 'Noah Williams' },
            { id: 3, name: 'Analyze Campaign Results', status: 'Done', description: 'Collect and analyze data from the campaign.', deadline: '2023-12-30', assignee: 'Isabella Moore' },
        ],
        team: [{ id: 7, name: 'Ava Thompson' }, { id: 8, name: 'Noah Williams' }],
        activities: [
            { id: 1, description: 'Marketing Strategy Meeting' },
            { id: 2, description: 'Campaign Launch Party' },
        ],
    },
    {
        id: 5,
        name: 'Project Epsilon',
        description: 'Develop a new internal tool for project management.',
        tasks: [
            { id: 1, name: 'Gather Requirements', status: 'To Do', description: 'Collect requirements for the new tool.', deadline: '2024-02-05', assignee: 'Emma Jones' },
            { id: 2, name: 'Design UI', status: 'In Progress', description: 'Create user interface designs for the tool.', deadline: '2024-03-01', assignee: 'Lucas Brown' },
            { id: 3, name: 'Build Backend Services', status: 'Done', description: 'Develop backend services for the tool.', deadline: '2023-12-15', assignee: 'Charlotte Johnson' },
        ],
        team: [{ id: 9, name: 'Emma Jones' }, { id: 10, name: 'Lucas Brown' }],
        activities: [
            { id: 1, description: 'Project Planning Meeting' },
            { id: 2, description: 'UI Design Review' },
        ],
    },
    {
        id: 6,
        name: 'Project Zeta',
        description: 'Develop a new customer support system.',
        tasks: [
            { id: 1, name: 'Analyze Customer Requests', status: 'To Do', description: 'Review customer support requests.', deadline: '2024-02-10', assignee: 'Matthew Martinez' },
            { id: 2, name: 'Design Support Process', status: 'In Progress', description: 'Create a new support process for customers.', deadline: '2024-03-10', assignee: 'Sophia Rodriguez' },
            { id: 3, name: 'Implement Support Tools', status: 'Done', description: 'Develop and integrate customer support tools.', deadline: '2023-12-10', assignee: 'William Garcia' },
        ],
        team: [{ id: 11, name: 'Matthew Martinez' }, { id: 12, name: 'Sophia Rodriguez' }],
        activities: [
            { id: 1, description: 'Customer Support Training' },
            { id: 2, description: 'Support Tools Deployment' },
        ],
    },
    {
        id: 7,
        name: 'Project Eta',
        description: 'Develop a new data analysis tool.',
        tasks: [
            { id: 1, name: 'Gather Data Sources', status: 'To Do', description: 'Identify and gather data sources.', deadline: '2024-02-15', assignee: 'Lily Walker' },
            { id: 2, name: 'Develop Data Models', status: 'In Progress', description: 'Create data models for analysis.', deadline: '2024-03-15', assignee: 'Ethan Hernandez' },
            { id: 3, name: 'Develop Data Analysis Tools', status: 'Done', description: 'Create and implement data analysis tools.', deadline: '2023-12-15', assignee: 'Chloe Anderson' },
        ],
        team: [{ id: 13, name: 'Lily Walker' }, { id: 14, name: 'Ethan Hernandez' }],
        activities: [
            { id: 1, description: 'Data Analysis Workshop' },
            { id: 2, description: 'Data Models Review' },
        ],
    },
    {
        id: 8,
        name: 'Project Theta',
        description: 'Develop a new product line for the company.',
        tasks: [
            { id: 1, name: 'Research Product Trends', status: 'To Do', description: 'Identify current product trends in the industry.', deadline: '2024-02-20', assignee: 'Henry White' },
            { id: 2, name: 'Design New Product Line', status: 'In Progress', description: 'Create designs for the new product line.', deadline: '2024-03-20', assignee: 'Grace Wilson' },
            { id: 3, name: 'Launch New Product Line', status: 'Done', description: 'Implement and launch the new product line.', deadline: '2023-12-20', assignee: 'Scarlett Miller' },
        ],
        team: [{ id: 15, name: 'Henry White' }, { id: 16, name: 'Grace Wilson' }],
        activities: [
            { id: 1, description: 'Product Launch Meeting' },
            { id: 2, description: 'Product Design Review' },
        ],
    },
    {
        id: 9,
        name: 'Project Iota',
        description: 'Implement a new system for internal communication.',
        tasks: [
            { id: 1, name: 'Research Communication Tools', status: 'To Do', description: 'Review different internal communication tools.', deadline: '2024-02-25', assignee: 'Alexander Johnson' },
            { id: 2, name: 'Design Communication Process', status: 'In Progress', description: 'Create a new communication process for internal teams.', deadline: '2024-03-25', assignee: 'Victoria Brown' },
            { id: 3, name: 'Deploy Communication System', status: 'Done', description: 'Develop and deploy internal communication tools.', deadline: '2023-12-25', assignee: 'Benjamin Clark' },
        ],
        team: [{ id: 17, name: 'Alexander Johnson' }, { id: 18, name: 'Victoria Brown' }],
        activities: [
            { id: 1, description: 'Internal Communication Workshop' },
            { id: 2, description: 'Process Design Review' },
        ],
    },
    {
        id: 10,
        name: 'Project Kappa',
        description: 'Develop a new quality assurance process.',
        tasks: [
            { id: 1, name: 'Define Quality Standards', status: 'To Do', description: 'Identify quality standards for the project.', deadline: '2024-03-01', assignee: 'Ella King' },
            { id: 2, name: 'Develop Quality Assurance Process', status: 'In Progress', description: 'Create a quality assurance process for the project.', deadline: '2024-04-01', assignee: 'Mason Smith' },
            { id: 3, name: 'Implement Quality Assurance Process', status: 'Done', description: 'Deploy quality assurance tools and methods.', deadline: '2023-12-01', assignee: 'Avery Lee' },
        ],
        team: [{ id: 19, name: 'Ella King' }, { id: 20, name: 'Mason Smith' }],
        activities: [
            { id: 1, description: 'Quality Assurance Training' },
            { id: 2, description: 'Quality Standards Review' },
        ],
    },
    {
        id: 11,
        name: 'Project Lambda',
        description: 'Develop a new training program for employees.',
        tasks: [
            { id: 1, name: 'Conduct Training Needs Analysis', status: 'To Do', description: 'Identify training needs across the company.', deadline: '2024-03-05', assignee: 'Natalie Turner' },
            { id: 2, name: 'Design Training Curriculum', status: 'In Progress', description: 'Create the curriculum for the training program.', deadline: '2024-04-05', assignee: 'Liam Walker' },
            { id: 3, name: 'Implement Training Program', status: 'Done', description: 'Deploy the training program to employees.', deadline: '2023-12-05', assignee: 'Grace Davis' },
        ],
        team: [{ id: 21, name: 'Natalie Turner' }, { id: 22, name: 'Liam Walker' }],
        activities: [
            { id: 1, description: 'Training Needs Meeting' },
            { id: 2, description: 'Curriculum Design Review' },
        ],
    },
    {
        id: 12,
        name: 'Project Mu',
        description: 'Implement a new security system for the company.',
        tasks: [
            { id: 1, name: 'Analyze Security Risks', status: 'To Do', description: 'Identify potential security risks.', deadline: '2024-03-10', assignee: 'Olivia Brown' },
            { id: 2, name: 'Design Security System', status: 'In Progress', description: 'Create a new security system for the company.', deadline: '2024-04-10', assignee: 'William Johnson' },
            { id: 3, name: 'Deploy Security System', status: 'Done', description: 'Implement and deploy the security system.', deadline: '2023-12-10', assignee: 'Victoria Lee' },
        ],
        team: [{ id: 23, name: 'Olivia Brown' }, { id: 24, name: 'William Johnson' }],
        activities: [
            { id: 1, description: 'Security Risk Analysis Meeting' },
            { id: 2, description: 'Security System Design Review' },
        ],
    },
];
