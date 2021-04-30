export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608bdf082115ccbd2ff81d34',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t4fpy6vs',
                  apiId: 'fab54463-7ffb-47d7-bdd1-6ac77b8d9a05'
                },
                {
                  buildHookId: '608bdf08edc973c13109dc8b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8uo2p2cp',
                  apiId: '2db6b069-530e-4081-9a56-d5f089ba1ae2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcinrck/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8uo2p2cp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
