Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :edit, :update, :destroy]

  root 'homes#top'
  get '/about' => 'homes#about', as: "about"


  # get '/learns' => 'learns#index', as: "learns"
  # post '/learns' => 'learns#create', as: "learn"
  # get 'learns/:id/eit' => 'learns#edit', as: "edit_learn"
  # patch '/learns/:id/' => 'learns#update', as: "learn"
  # delete '/learns/:id' => 'learns#destroy', as: "learn"
  resources :learns, only: [:index, :create, :edit, :update, :destroy]
  get '/learns/chapter1' => 'learns#chapter1', as: :chapter1
  get '/learns/chapter2' => 'learns#chapter2', as: :chapter2
  get '/learns/chapter3' => 'learns#chapter3', as: :chapter3
  get '/learns/chapter4' => 'learns#chapter4', as: :chapter4
  get '/learns/chapter5' => 'learns#chapter5', as: :chapter5
  get '/learns/chapter6' => 'learns#chapter6', as: :chapter6
  get '/learns/chapter7' => 'learns#chapter7', as: :chapter7
  get '/learns/chapter8' => 'learns#chapter8', as: :chapter8
  get '/learns/chapter9' => 'learns#chapter9', as: :chapter9
  get '/learns/chapter10' => 'learns#chapter10', as: :chapter10
  get '/learns/chapter11' => 'learns#chapter11', as: :chapter11
  get '/learns/chapter12' => 'learns#chapter12', as: :chapter12
  get '/learns/chapter13' => 'learns#chapter13', as: :chapter13
  get '/learns/chapter14' => 'learns#chapter14', as: :chapter14
  get '/learns/chapter15' => 'learns#chapter15', as: :chapter15
  get '/learns/chapter16' => 'learns#chapter16', as: :chapter16
  get '/learns/chapter17' => 'learns#chapter17', as: :chapter17
  get '/learns/chapter18' => 'learns#chapter18', as: :chapter18
  get '/learns/chapter19' => 'learns#chapter19', as: :chapter19
  get '/learns/chapter20' => 'learns#chapter20', as: :chapter20

  resources :works, only: [:index, :create, :edit , :update, :destroy] do
    resources  :favorites, only: [:create, :index, :destroy]
  end
  get '/works/step1_selection' => 'works#step1_selection', as: "works_1"
  get '/works/step1_noise' => 'works#step1_noise', as: "works_2"
  get '/works/step1_tradeoff' => 'works#step1_tradeoff', as: "works_3"
  get '/works/step2' => 'works#step2', as: "works_4"
  get '/works/step3_essential_goal' => 'works#step3_essential_goal', as: "works_5"
  get '/works/step3_necessary_actions' => 'works#step3_necessary_actions', as: "works_6"
  get '/works/step4_baby_steps' => 'works#step4_baby_steps', as: "works_7"
  get '/works/step4_habits' => 'works#step4_habits', as: "works_8"
  get '/works/user_works' => 'works#user_works', as: "user_works"
  get '/works/user_works/:id' => 'works#user_work', as: "user_work"
end