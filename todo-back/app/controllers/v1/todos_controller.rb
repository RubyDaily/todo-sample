class V1::TodosController < V1::BaseController
  def index
    @todos = Todo.all

    render json: @todos, status: :ok
  end

  def create
    todo = Todo.create(_todo_params)

    render json: todo, status: :created
  end

  def update
    todo = Todo.find(params[:id])
    todo.update_attributes(title: _todo_params[:title])

    render json: todo, status: :ok
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy

    render json: {}, status: :ok
  end

  private

  def _todo_params
    params.permit(:title)
  end
end
