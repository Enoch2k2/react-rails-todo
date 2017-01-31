class ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    @item = Item.create(item_params)
    if @item
      render json: @item
    end
  end

  def toggle_complete
    @item = Item.find(params[:id])
    @item.update(completed: !@item.completed)
    render json: @item
  end

  private

    def item_params
      params.require(:item).permit(:name)
    end
end
