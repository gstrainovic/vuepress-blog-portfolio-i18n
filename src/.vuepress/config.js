// src/.vuepress/config.js
module.exports = {
    plugins: [
        ['@vuepress/blog', {
            directories: [
                {
                    id: "en",
                    dirname: "_en-blog",
                    path: "/en/blog/",
                    itemPermalink: "/en/blog/:year/:month/:day/:slug",
                },
                {
                    id: "de",
                    dirname: "_de-blog",
                    path: "/blog/",
                    itemPermalink: "/blog/:year/:month/:day/:slug",
                }
            ],
            frontmatters: [
                {
                    id: "tag",
                    keys: ['tag', 'tags'],
                    path: '/tag/',
                    layout: 'Tag',
                    frontmatter: { title: 'Tag' },
                    itemlayout: 'Tag',
                    pagination: {
                        perPagePosts: 3
                    }
                },
            ]
        }]
    ],
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'de-CH', // this will be set as the lang attribute on <html>
            title: 'Strainovic IT',
            description: 'Webseite, Portfolio und Blog von Strainovic IT'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Strainovic IT',
            description: 'Website, portfolio and blog of Strainovic IT'
        }
    },

    themeConfig: {
        displayAllHeaders: true ,
        locales: {
            '/': {
                sidebar: 'auto',
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'Deutsch',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Deutsch',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Start', link: '/' },
                    { text: 'Blog', link: '/blog/' }
                ],
                sidebar: [
                    '/',
                    '/blog/'
                ]
            },
            '/en/': {
                sidebar: 'auto',
                selectText: 'Languages',
                label: 'English',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available..",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Blog', link: '/en/blog/' }
                ],
                sidebar: [
                    '/en/',
                    '/en/blog/'
                ]
            }
        }
    }
}