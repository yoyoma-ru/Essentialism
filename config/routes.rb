Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'homes#top'
  get '/about' => 'homes#about'

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
end
