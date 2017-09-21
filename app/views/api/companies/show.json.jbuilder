unless @errors
  json.company do
    json.partial! 'api/companies/company', company: @company
    json.employees @employees
  end
end
json.errors @errors
