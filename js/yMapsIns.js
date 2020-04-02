//points page map initialization
function initPointsMap() {
  var myMap = new ymaps.Map('points_map', {
    center: [59.95,30.67],
    zoom: 9,
    controls: ['zoomControl']
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
    clusterize: false,
    // ObjectManager принимает те же опции, что и кластеризатор.
    gridSize: 32,
    clusterDisableClickZoom: false
  });

  // Чтобы задать опции одиночным объектам и кластерам,
  // обратимся к дочерним коллекциям ObjectManager.
  objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
  myMap.geoObjects.add(objectManager);

  $.getJSON("js/points.json", function(points) {
      objectManager.add(points);
    })
  .fail(function(e) {
    console.log( ["error", e] );
  })
  .always(function() {
    console.log( "complete" );
  });
}




jQuery(document).ready(function($) {
  ymaps.ready(initPointsMap);
});
