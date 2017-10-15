$('document').ready(function(){
    var name = null;
    $('#submit').click(function(){
        name = $('#name').val();
        if (typeof name == 'string'){
            $('#gendercontainer').css('display','block');
            $('#login').css('display','none');
            $('#intro').text('Hello, '+ name + '');
        }
    });
    $('#continue').click(function(){
        lunch = $('input[type=radio]:checked').val();
        gender = $('select').val();
        if((lunch==null || lunch == undefined || lunch == "")||(gender==null || gender == undefined || gender == "")){
            alert('You have not selected all the options');
        }else{
            alert('James John James')
        }
    })
});
