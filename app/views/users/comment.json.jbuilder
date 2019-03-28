if @new_message.present?
  json.array! @new_message do |message|
  json.message_id message.id
  json.content message.content
  json.user_id message.user.id
  json.user_name message.user.name
  json.image message.image
  json.date message.created_at.strftime("%Y/%m/%d %H:%M")
  end
end
