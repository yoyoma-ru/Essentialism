Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/' => 'homes#top'
  get '/about' => 'homes#about'


  get '/learns' => 'learns#index'
  get '/learns/chapter1' => 'learns#chapter1'
  get '/learns/chapter2' => 'learns#chapter2'
  get '/learns/chapter3' => 'learns#chapter3'
  get '/learns/chapter4' => 'learns#chapter4'
  get '/learns/chapter5' => 'learns#chapter5'
  get '/learns/chapter6' => 'learns#chapter6'
  get '/learns/chapter7' => 'learns#chapter7'
  get '/learns/chapter8' => 'learns#chapter8'
  get '/learns/chapter9' => 'learns#chapter9'
  get '/learns/chapter10' => 'learns#chapter10'
  get '/learns/chapter11' => 'learns#chapter11'
  get '/learns/chapter12' => 'learns#chapter12'
  get '/learns/chapter13' => 'learns#chapter13'
  get '/learns/chapter14' => 'learns#chapter14'
  get '/learns/chapter15' => 'learns#chapter15'
  get '/learns/chapter16' => 'learns#chapter16'
  get '/learns/chapter17' => 'learns#chapter17'
  get '/learns/chapter18' => 'learns#chapter18'
  get '/learns/chapter19' => 'learns#chapter19'

  get '/works' => 'works#index'
  get '/works/step1_selection' => 'works#step1_selection'
  get '/works/step1_noise' => 'works#step1_noise'
  get '/works/step1_tradeoff' => 'works#step1_tradeoff'
  get '/works/step2' => 'works#step2'
  get '/works/step3_essential_goal' => 'works#step3_essential_goal'
  get '/works/step3_necessary_actions' => 'works#step3_necessary_actions'
  get '/works/step4_baby_steps' => 'works#step4_baby_steps'
  get '/works/step4_habits' => 'works#step4_habits'
  get '/works/user_works' => 'works#user_works'
end