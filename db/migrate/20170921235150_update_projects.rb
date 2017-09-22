class UpdateProjects < ActiveRecord::Migration[5.1]
  def change
    rename_column :projects, :type, :project_type
  end
end
