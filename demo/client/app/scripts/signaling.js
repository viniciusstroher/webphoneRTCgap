angular.module('phonertcdemo')
  .factory('signaling', function (socketFactory) {
  	if(window.cordova){
    		var socket = io.connect('http://192.168.0.15:3000/');
    }else{
    		var socket = io.connect('http://localhost:3000/');
    }
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  });

  