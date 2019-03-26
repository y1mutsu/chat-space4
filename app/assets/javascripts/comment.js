$(document).on('turbolinks:load', function() {
 function buildHTML(message){
  console.log(message)
    var html = `<div class="message_contents">
                  <div class="upper-info">
                      <p class="upper-info__talker">${message.user_name}</p>
                    <p class="upper-info__date">${message.date}</p>
                  </div>
                  <div class="message__text">${message.content}</div>
                  <img class="lower-message__image" src="/uploads/message/image>${message.content.image}
                </div>`

    return html;
  }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html)
      $('.form__message').val('');
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight }, 500);
    })
    .fail(function(){
      alert('投稿がありません');
    })
    .always(function(){
      $(".submitBtn").prop('disabled', false);
    });
  })
});
