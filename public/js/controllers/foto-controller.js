angular.module('alurapic')
    .controller('FotoController', function($scope, $http) {

        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {
                $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.foto = {};
                        $scope.mensagem = 'foto adicionada com sucesso';
                    })
                    .error(function(erro) {
                        $scope.mensagem = 'Não foi possivel cadastrar sua foto';
                    })
            };
        };


    });
