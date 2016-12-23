class Beverage < ActiveRecord::Base
     validates :name, presence: true
end