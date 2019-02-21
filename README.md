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
|e-mail|string|null: false,add_index :email|
|password|integer|null: false|

### Association
- has_many :groups through :members
- has_many :members
- has_many :messages



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|text|integer|null: false|
|image|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through :members
- has_many :members
