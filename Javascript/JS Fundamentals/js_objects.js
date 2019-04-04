let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function allStudents(arr){
    for(let i=0; i<arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort);
    }
}

allStudents(students);




var users = {
    employees: [
        {'first_name': 'Miguel', 'last_name': 'Jones'},
        {'first_name': 'Ernie', 'last_name': 'Bertson'},
        {'first_name': 'Nora', 'last_name': 'Lu'},
        {'first_name': 'Sally', 'last_name': 'Barkyoumb'}
    ],
    managers: [
        {'first_name': 'Lillian', 'last_name': 'Chambers'},
        {'first_name': 'Gordon', 'last_name': 'Poe'}
    ]
};

function employeesManagers(dict){
    for(var attr in users){
        console.log(attr.toUpperCase());
        for(var i=0; i<dict[attr].length; i++){
            var count = dict[attr][i].last_name.length + dict[attr][i].first_name.length;
            console.log(i+1 + " - " + dict[attr][i].last_name + ", " +dict[attr][i].first_name + " - " + count);
        }
    }
}

employeesManagers(users);