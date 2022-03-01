import { eventList } from './info'

const allEvents = document.querySelector('.allevents')

eventList.forEach(event=>{
    let col = document.createElement('div')
    let eventItem =document.createElement('div')
    let imageContainer = document.createElement('div')
    let info = document.createElement('div')
    let img = document.createElement('img')

    
    let colClasses =['col-12','col-md-3','p-2']
    colClasses.forEach(c=>{
        col.classList.add(c)
    })
    eventItem.classList.add('event')
    imageContainer.classList.add('event-image-container')
    info.classList.add('event-info')


})