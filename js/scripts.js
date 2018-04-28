$(document).ready(function() {
	console.log("slick");
    $(".slider").slick({
        appendArrows: $('.slider-arrow'),
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
    });

});

$(document).ready(function($) {
		console.log("slick");
	//Получаем цвета предложений, переданные через data-color
	var $color = $('.product-properties .colors .color-product');
	var $container = $('.product-properties .colors .mark');

	$color.eq(0).attr('checked', true); 

	for (var i = $color.length - 1; i >= 0; i--) {
		$container.eq(i).css('background-color', $color.eq(i).attr('data-color') )
	}
});

$(document).ready(function () {
	
	var $cur_offer;
	var $options;
	var $cur_options; 
	var $select;

	//Получаем id предложения
	$cur_offer = $('input[type=radio][name=color]').attr('data-id');

	//Скрываем размеры
	$options = $('.product-properties .size-product option:not([data-id='+$cur_offer+'])');
	$options.prop('hidden',true);
	$options.prop('disabled', true);

	//Если сменили цвет, меняем на соотвествующие размеры
	$('input[type=radio][name=color]').change(function () {

		$select = $('.product-properties .size-product option');
		$cur_offer = $(this).attr('data-id');

		//Скрываем лишние
		$options = $('.product-properties .size-product option:not([data-id='+$cur_offer+'])');
		$options.prop('hidden',true);
		$options.prop('disabled', true);

		// Показываем текущий
		$cur_options = $('.product-properties .size-product option[data-id='+$cur_offer+']');
		$cur_options.prop('hidden', false);
		$cur_options.prop('disabled', false);

		//Устанавливаем дефолтное значение
		$select.eq(0).prop('selected', true).change();



	});
});

$(document).ready(function($) {	
	//Если выбрали размер
	$('select[name=size]').change(function () {
		var $btn_basket = $('.product-properties .add-basket');
		var $selected = $('.product-properties .size-product option:selected');

		// Если размер выбран, активируем кнопку
		if($selected.val() != ""){
			$btn_basket.prop('disabled', false);
		}
		else{
			$btn_basket.prop('disabled', true);
		}		
	});
});
$(document).ready(function($) {		

});