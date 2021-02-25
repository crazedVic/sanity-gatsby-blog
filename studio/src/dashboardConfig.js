export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60373724d8d8992b15289764',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ixkixemz',
                  apiId: '7c192083-1fa0-4290-8dff-66a472264e5c'
                },
                {
                  buildHookId: '6037372442aa8e37e3661c24',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-odz2i827',
                  apiId: 'c787857d-e1f7-469d-b0d2-b344123a138e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crazedVic/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-odz2i827.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
