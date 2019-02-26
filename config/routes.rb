Rails.application.routes.draw do
  devise_for :users, controllers: {
          sessions: 'users/sessions'
        }

  get 'messages' => 'messages#index'

end
