# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|string|null: false|
|password|integer|null: false|

### Association
- has_many :groups through :members
- has_many :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|text|integer|null: false|
|image|integer|null: false|

### Association
- belongs_to :user

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- has_many :users through :members
- has_many :members
