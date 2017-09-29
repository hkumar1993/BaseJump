export const fetchProjectEvents = id => {
  return $.ajax({
    url: `api/projects/${id}/events`
  })
}

export const fetchEvent = id => {
  return $.ajax({
    url: `api/events/${id}`
  })
}

export const createEvent = event => {
  return $.ajax({
    method: 'post',
    url: `api/events`,
    data: { event }
  })
}

export const updateEvent = event => {
  return $.ajax({
    method: 'patch',
    url: `api/events/${event.id}`,
    data: { event }
  })
}

export const deleteEvent = id => {
  return $.ajax({
    method: 'delete',
    url: `api/events/${id}`
  })
}
