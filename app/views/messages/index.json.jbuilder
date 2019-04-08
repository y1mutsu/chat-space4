json.array! @new_message do |message|
  json.id  message.id
  json.content  message.content
  json.user_name  message.user.name
  json.image  message.image
  json.date  message.created_at.strftime("%Y/%m/%d %H:%M")
end
