class ExpensesController < ApplicationController

  def show 
    expenses = Expense.all 
    render json: expenses
  end 
end
