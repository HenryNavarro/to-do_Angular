function TAREAS($scope){
	$scope.tareas=[
  {id:0,descripcion:"Enviar pase Reporte 4",estado:false},
  {id:1,descripcion:"avanzar TAREAS angular",estado:false}
	];

	$scope.getTotalTareas=function(){
		return $scope.tareas.length;
	};
	$scope.getTareasPendientes=function(){
		return (_.where($scope.tareas,{estado:false})).length;
	};
	
	$scope.cambiarEstado=function(id){
        $scope.tareas[id].estado=!$scope.tareas[id].estado;
    };
  	$scope.agregarTarea=function(ev){

  		if (ev.keyCode===13){
            
  			$scope.tareas.push({id:$scope.getTotalTareas(),descripcion:$scope.nuevaTarea,estado:false});
  			$scope.nuevaTarea="";

  		}
  	};

}