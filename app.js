//Data
const data = [
    {
        name: 'John Doe', 
        age: 30, 
        gender: 'male', 
        lookingfor: 'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenn Smith', 
        age: 25, 
        gender: 'female', 
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson', 
        age: 35, 
        gender: 'male', 
        lookingfor: 'female',
        location: 'Lynn, MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
];

// Data passed in by...
const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

//necxt profile display
function nextProfile(){
const currentProfile = profiles.next().value;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group>
        <li class="list-group-item>Name: ${currentProfile.name}</li>
        <li class="list-group-item>Age: ${currentProfile.age}</li>
        <li class="list-group-item>Location: ${currentProfile.location}</li>
        <li class="list-group-item>Name: ${currentProfile.gender}</li>
        <li class="list-group-item>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}"`
}


// Iterator function (profile iterator)
function profileIterator(profiles){
let nextIndex = 0;

return {
    next: function(){
        return nextIndex < profiles.length ? 
        { value: profiles [nextIndex++], done: false } :
        { done: true }
    }
  }
}