class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create

  end


  private
    def user_params
      params.require(:user).permit(:name, :username, :password)
    end
end
