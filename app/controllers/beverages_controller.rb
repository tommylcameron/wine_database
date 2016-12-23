class BeveragesController < ApplicationController
    def index 
        #retrieve all beverages
        @beverages = Beverage.all
        #pass beverages into the view
    end
    def new
        @beverage = Beverage.new
        @action = 'create'
        #form to add a new beverage to the view
    end
    def destroy
        beverage = Beverage.find(params[:id])
        beverage.destroy
        redirect_to action: "index"
    end
    def edit
        @beverage = Beverage.find(params[:id])
        @action = 'update'
    end
    def create
        permitted = params[:beverage].permit(:name, :varietal, :alcohol_percentage, :vintage_year, :rating, :country, :description, :reporter)
        @beverage = Beverage.new permitted
        success = @beverage.save 
        if success 
            redirect_to action: "index"
        else
            redirect_to action: "new"    
        end
    end
     def update
        permitted = params[:beverage].permit(:name, :varietal, :alcohol_percentage, :vintage_year, :rating, :country, :description, :reporter)
        @beverage = Beverage.find(params[:id]) 
        success = @beverage.update_attributes(permitted)
        if success 
            redirect_to action: "index"
        else
            redirect_to action: "new"    
        end
    end
    
    def show
        @beverage = Beverage.find(params[:id])
    end
end
