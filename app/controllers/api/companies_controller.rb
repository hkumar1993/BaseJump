class Api::CompaniesController < ApplicationController

  def show
    begin
      @company = Company.find(params[:id])
    rescue
      @errors = ['Company not found']
    end
    if @company &&
      @employees = @company.employees.map { |user| user.id }
      render 'api/companies/show'
    else
      render 'api/companies/show', status: 404
    end

  end

  def update
    begin
      @company = Company.find(params[:id])

      if @company.update(company_params)
        render 'api/companies/show'
      else
        @errors = @company.errors.full_messages
        render 'api/companies/show', status: 422
      end

    rescue ExceptionName
      @errors = ['Company not found']
      render 'api/companies/show', status: 404
    end
  end

  def company_params
    params.require(:company).permit(:name,:image_url)
  end

  def ensure_current_user_company
    p current_user.company_id
    p params[:id]
    if params[:id].to_i!=current_user.company_id
      @errors = ['Unauthorized Access']
      render 'api/companies/show', status: 404
      return nil
    end
  end
end
