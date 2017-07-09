$(document).ready(function(){
    
    var $heart = $('.heart'),
        $addComment = $('.photo__add-comment');

    $heart.click(function(){
        var likes = $(this).parent().parent()
                    .children('.photo__likes')
                    .children('.photo__likes-number'),
            likesNumber = parseInt(likes.html()),
            newValue
        if($(this).hasClass('fa-heart-o')){
            newValue = likesNumber + 1;
        } else{
            newValue = likesNumber - 1;
        }
        likes.html(newValue)
        $(this).toggleClass('fa-heart-o fa-heart');
    });

    	
	$addComment.keydown(function(event){
		if(event.keyCode == 13){
			var newComment = event.target.value;
			var commentList = $(this).parent().parent().children('.photo__comments');
			$(this).val('').blur();
			commentList.append("<li class='photo__comment'><span class='photo__comment__author'>Bambie</span> " + newComment + "</li>");		
		}
	})	
})








