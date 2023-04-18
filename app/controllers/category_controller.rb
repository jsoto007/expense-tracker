class CategoryController < ApplicationController


  def show
    categories = Category.all
    render json: categories
  end 
  
end
