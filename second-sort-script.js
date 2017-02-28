$(document).ready(function() {

	 $.getJSON('data.json', function(data) {
        for( var i = 0; i < data.length; i++) {
            $('#data-table').append('<tr><td>' + data[i].Name + '</td><td>' + data[i].Date + '</td><td>' + 
            data[i].City + '</td><td>' + data[i].Phone + '</td></tr>');
        }
    });

	$('.searhInput').on('keyup', function() {
	    var searchTerm = $(this).val().toLowerCase();        //записує в перемінну те, що ввів користувач
	    $('#data-table tbody tr').each(function() {          //виконує функцію для кожного елементу набору
	        var lineStr = $(this).text().toLowerCase();
	        if(lineStr.indexOf(searchTerm) === -1) {
	            $(this).hide();
	        } else {
	            $(this).show()
	        }
	    });
	});
});