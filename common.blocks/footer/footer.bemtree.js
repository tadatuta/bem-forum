block('footer').content()(function() {
    const { block } = this;
    const i18n = this.require('i18n');

    return {
        elem: 'links',
        content: [
            {
                url: '//github.com/bem/bem-forum',
                text: i18n(block, 'source-code'),
                icon: 'code'
            },
            {
                url: '//github.com/bem/bem-forum/issues',
                text: i18n(block, 'error-report'),
                icon: 'bug'
            }
        ].map(link => ({
            block: 'link',
            mix: { block, elem: 'link' },
            url: link.url,
            target: '_blank',
            content: [
                {
                    block: 'icon',
                    mods: { bg: link.icon },
                    mix: { block, elem: 'icon' }
                },
                link.text
            ]
        }))
    };
});
