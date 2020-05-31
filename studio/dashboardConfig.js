export default {
  widgets: [
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
                  buildHookId: '5ed3317d987c7a5db4356866',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1m52qwsq',
                  apiId: 'c9ed5f21-4766-4a97-8507-96c4de969a01'
                },
                {
                  buildHookId: '5ed3317d1c84489b2f327c47',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p2aankpn',
                  apiId: 'e4f88451-7baf-4cde-acf8-514902c80f2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ebox86/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p2aankpn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
