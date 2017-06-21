block('header').content()(function() {
    var block = this.block,
        i18n = this.require('i18n'),
        pathname = this.data.url.pathname;

    return [
        {
            block: 'logo',
            url: pathname !== '/' && '/'
        },
        this.data.user ? [
            {
                block: 'avatar',
                mix: { block, elem: 'avatar' },
                url: this.data.user.avatar
            },
            {
                block: 'button',
                mix: { block: block, elem: 'button' },
                mods: { theme: 'islands', size: 'm', type: 'link' },
                text: i18n(this.block, 'exit'),
                url: '/logout'
            },
            {
                block: 'button',
                mix: [
                    { block: block, elem: 'post' },
                    { block: block, elem: 'button' }
                ],
                mods: { theme: 'islands', size: 'm', view: 'action', type: 'link' },
                text: i18n(this.block, 'writePost'),
                url: '/create'
            }
        ] : {
            block: 'button',
            mix: { block: block, elem: 'button' },
            mods: { theme: 'islands', size: 'm', view: 'action', type: 'link' },
            text: i18n(this.block, 'loginWithGh'),
            url: '/auth/github'
        }
    ];
});
