$(document).ready(function(){


$boxContainer ='<div class = "box-container-simple"><h3>Dummy Header</h3><h4 class = "subheading">Subheading text</h4><div class = "content-wrp"><p> Box container</p></div></div>';
$dropdown = '<div class = "dropModule"><p class = "trigger active">This is a dropdown</p><div class = "dropdownContent"><p>Hey there</p></div>'



   setInterval(function() {tinymce.triggerSave()}, 5000);

    $('.sidebar a').on('click',function(e){
        e.preventDefault();

    });

    $('.sidebar .addText').on('click',function(e){
        $('.editableContainer')
            .append($boxContainer);

    // tinymce.init({
        
    //     selector: "div.box-container-simple",
    //     theme: "modern",
    //     plugins: [
    //         ["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker"],
    //         ["searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking"],
    //         ["save table contextmenu directionality emoticons template paste"]
    //     ],
    //     add_unload_trigger: false,
    //     schema: "html5",
    //     inline: true,
    //     toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image     | print preview media",
    //     statusbar: false
    //  });

    });


$('button').on('click',function(e){
    $('.editableContainer').append('<div ng-bind-html = "renderHtml(body)"></div>')
});
    
    $('.sidebar .addComponent').on('click',function(e){
        $('.editableContainer-wrapper')
            .append($dropdown);

        tinymce.init({
            selector: "div.dropModule",
            theme: "modern",
            plugins: [
                ["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker"],
                ["searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking"],
                ["save table contextmenu directionality emoticons template paste"]
            ],
            add_unload_trigger: false,
            schema: "html5",
            inline: true,
            toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image     | print preview media",
            statusbar: false
         });

    
    });
    

 

});

