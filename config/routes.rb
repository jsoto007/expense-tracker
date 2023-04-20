Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :user, only:[:show, :create]

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"

  get "/categories", to: "categories#show"
  get "/expenses", to: "expenses#show"

end
