class User < ApplicationRecord
  has_many :expenses
  has_many :categories, through: :expenses
end