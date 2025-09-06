// Example course list array
const courses = [
    { id: 1, name: 'Web Fundamentals (WDD 231)', credits: 3, subject: 'WDD', completed: true },
    { id: 2, name: 'Introduction to Programming (CSE 101)', credits: 4, subject: 'CSE', completed: false },
    { id: 3, name: 'Advanced JavaScript (WDD 301)', credits: 3, subject: 'WDD', completed: true },
    { id: 4, name: 'Data Structures (CSE 202)', credits: 4, subject: 'CSE', completed: false }
];

// Function to display courses dynamically
function displayCourses(filteredCourses) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    filteredCourses.forEach(course => {
        const div = document.createElement('div');
        div.classList.add('course-card');
        div.style.backgroundColor = course.completed ? '#DFF2BF' : '#FFCCCB';  // Completed courses in green
        div.textContent = `${course.name} (${course.credits} credits)`;
        container.appendChild(div);
    });

    // Calculate and display total credits
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('credits-total').textContent = `Total Credits: ${totalCredits}`;
}

// Filter courses based on subject
function filterCourses(subject) {
    let filteredCourses = courses;
    if (subject !== 'all') {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    displayCourses(filteredCourses);
}

// Initially display all courses
filterCourses('all');
