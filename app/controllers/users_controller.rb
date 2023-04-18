class UsersController < ApplicationController
  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end 

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else 
      render json: {error: user.error.full_messages }, status: :unprocessable_entity
    end 
  end 

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end 
end
