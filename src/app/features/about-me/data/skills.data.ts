export type Skill = {
    name: string
    image: string
    type: 'frontend' | 'backend' | 'database' | 'testing' | 'devops'
    color: string
    experience?: number
}

//frontend: Angular, Node.js, JavaScrip, CSS, HTML

export const skills: Skill[] = [
    {
        name: 'Angular',
        image: 'angular.webp',
        type: 'frontend',
        color: '#4da6ff',
        experience: 2,
    },
    {
        name: 'JavaScript',
        image: 'javascript.png',
        type: 'frontend',
        color: '#f0db4f',   
        experience: 9,
    },
    {
        name: 'CSS',
        image: 'css.png',
        type: 'frontend',
        color: '#2965f1',
        experience: 9,
    },
    {
        name: 'HTML',
        image: 'html.png',
        type: 'frontend',
        color: '#f06529',
        experience: 9,
    },
    {
        name: 'Jest',
        image: 'jest.png',
        type: 'testing',
        color: '#99425b',
    },
    {
        name: '.NET',
        image: 'dotnet.png',
        type: 'backend',
        experience: 2,
        color: '#512bd4',
    },
    {
        name: 'Node.js',
        image: 'nodejs.webp',
        type: 'backend',
        color: '#68a063',
    },
    {
        name: 'SQL Server',
        image: 'sql-server.png',
        type: 'database',
        experience: 2,
        color: '#cc2927',
    },
    {
        name: 'PostgreSQL',
        image: 'postgresql.png',
        type: 'database',
        color: '#336791',
    },
    {
        name: 'MySQL',
        image: 'mysql.png',
        type: 'database',
        color: '#00758f',
    },
    {
        name: 'Docker',
        image: 'docker.webp',
        type: 'devops',
        color: '#0db7ed',
    },
    {
        name: 'Github Actions',
        image: 'github-actions.png',
        type: 'devops',
        experience: 2,
        color: '#2088ff',
    },
    {
        name: 'Svelte',
        image: 'svelte.png',
        type: 'frontend',
        color: '#ff3e00',
    },
    {
        name: 'playwright',
        image: 'playwright.png',
        type: 'testing',
        color: '#f57f17',
    }
]