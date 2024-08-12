class PostsController < ApplicationController
  def index
    @posts = Post.order(id: :desc)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    respond_to do |format|
      format.turbo_stream { flash.now[:notice] = "Post was successfully created." }
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :content)
  end
end
