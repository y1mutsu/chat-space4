$(document).on('turbolinks:load', function() {

  function appendUsers(user) {
    html = `<div class="chat-group-user clearfix">
             <p class="chat-group-user__name">${user.name}</p>
             <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
            </div>`
    $('#user-search-result').append(html)
  }

  function addUser(name,id){
    html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
              <input name='group[user_ids][]' type='hidden' value='${id}'>
              <p class='chat-group-user__name'>${name}</p>
              <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id=${id}>削除</a>
            </div>`
    $('.js-add-user').append(html);
  }

  function addMessage(message) {
    html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
              <p class='chat-group-user__name'>${message}</p>
            </div>`
    $('#user-search-result').append(html);
  }

  var current = $('.current-user').val();
  var user_list =[current];

  $("#user-search-field").on("input", function() {
    var input = $("#user-search-field").val();
    console.log(user_list)
     $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input,
              user_ids: user_list
            },
      dataType: 'json'
    })
      .done(function(users) {
     $("#user-search-result").empty();
     if (users.length !== 0) {
       users.forEach(function(user){
         appendUsers(user);
       });
     }
     else {
       addMessage("一致する名前がありません");
     }
   })
    .fail(function(){
    alert('ユーザー検索に失敗しました');
  })
  });

  $('#user-search-result').on('click','.chat-group-user__btn--add', function () {
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    user_list.push(id);
    console.log(user_list)
    addUser(name,id)
    $(this).parent().remove();
  })

  $('.js-add-user').on('click','.js-remove-btn', function () {
    var user_id = $(this).data('user-id');
    user_list = user_list.filter(id => id != user_id)
    $(this).parent().remove();
    console.log(user_list)
  })
})
