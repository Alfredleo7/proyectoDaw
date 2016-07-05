$(document).ready(function() {  
    var progressbar = $('#progressbar'),  
        max = progressbar.attr('max'),  
        time = (1000/max)*5,      
        value = progressbar.val();  
 
    var loading = function() {  
        value += 1;  
        addValue = progressbar.val(value);  
         
        $('.progress-value').html(value + '%');  
 
        if (value == max) {  
            clearInterval(animate);                      
        }  
    };  
 
    var animate = setInterval(function() {  
        loading();  
    }, time);  
};

function abrir() { 
open('FormularioDelPaciente.html','','top=300,left=300,width=300,height=300') ; 
} 