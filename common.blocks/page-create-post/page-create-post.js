modules.define('page-create-post', [
    'i-bem-dom', 'add-form', 'api-request'
], function(provide, bemDom, AddForm, request) {
    const PageCreatePost = bemDom.declBlock(this.name, {
        _onFormSubmit: function(e, postData) {
            this._getForm().setMod('loading');

            var _this = this;

            request.post('create', postData)
                .then(function(response) {
                    return response.json();
                })
                .then(function(post) {
                    window.location = '/' + post.number;
                })
                .catch(function() {
                    _this._getForm()
                        .delMod('loading')
                        .showErrorMessage('Что-то пошло не так, попробуй позже');
                });
        },

        _onEmptyData: function() {
            this._getForm().showErrorMessage('Сначала нужно заполнить все поля');
        },

        _getForm: function() {
            return this._addForm || (this._addForm = this.findChildBlock(AddForm));
        }
    }, {
        lazyInit: true,
        onInit: function() {
            this._events(AddForm)
                .on('submit', this.prototype._onFormSubmit)
                .on('empty-data', this.prototype._onEmptyData);
        }
    });

    provide(PageCreatePost);
});
