app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {
    const options = {
        reconnectionAttempts: 3,
        reconnectionDelay: 500
    }
    indexFactory.connectSocket('http://localhost:3000', options)
        .then((socket) => {
            console.log('bağlantı gerçekleşti')
        }).catch((err) => {
            console.log(err);
        });
}]);