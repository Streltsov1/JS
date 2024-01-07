function switchTrafficLight() {
    let $trafficLight = $('.trafficLight');
    let colors = $trafficLight.children().toArray();
    let activeColor = $(colors).index($trafficLight.find(':not(.inactiveItem)'));
    colors[(activeColor + 1) % colors.length].classList.remove('inactiveItem');
    colors[activeColor].classList.add('inactiveItem'); 
}
$('#switchTrafficLight').on('click', switchTrafficLight);