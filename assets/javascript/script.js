let currentDate;
let currentTime;

function init() {
    // check if 'all_times' exists
    // if it doesn't set it to empty string
    if (!localStorage.getItem("all_times")) {
        localStorage.setItem("all_times", "");
    }
}

/**
 * saves events to localStorage
 * @param {string} title 
 * @param {moment} time 
 */
function saveEvent(title, time) {
    // tie together the time with the text
    localStorage.setItem(time, title);

    // keeps track of all the times that have been scheduled
    const allTimes = localStorage.getItem('all_times').split(",");
    allTimes.push(time);
    localStorage.setItem('all_times', allTimes.join(","));
}

function displayTimeblocks() {
    // get all events from local storage

    // from start time to end time
    // - create html to display a block
    // <div class="row"><div class="col"><input type="text"></div><div>Text</div><div><button></button></div></div>
    // -- if time is in the past, make it {color}
    // -- if it is the current hour, make it {color}
    // -- else make it {color}
    // - if this time exists in local storage, then display the text for this event
}


init();