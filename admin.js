"use strict";

var getById = function (id) { return document.getElementById(id); };

var names = [];
var numbers = [];
var dates = [];
var lengths = [];
var days = [];
var times = [];
var descriptions = [];

var addClass = function() {
    var courseName = getById("course-name").value;
    var courseNumber = getById("course-number").value.toUpperCase();
    var courseDate = getById("course-date").value;
    var courseLength = getById("course-length").value;
    var courseDay = getById("course-day").value;
    var courseTime = getById("course-time").value;
    var courseDesc = getById("course-desc").value;

    validateInput(courseName, courseNumber, courseDate, courseLength, courseDay, courseTime, courseDesc);

    names.push(courseName);
    numbers.push(courseNumber);
    dates.push(courseDate);
    lengths.push(courseLength);
    days.push(courseDay);
    times.push(courseTime);
    descriptions.push(courseDesc);

    addLocalStorage(names, numbers, dates, lengths, days, times, descriptions);

};

var addLocalStorage = function(names, numbers, dates, lengths, days, times, descriptions) {
    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("numbers", JSON.stringify(numbers));
    localStorage.setItem("dates", JSON.stringify(dates));
    localStorage.setItem("lengths", JSON.stringify(lengths));
    localStorage.setItem("days", JSON.stringify(days));
    localStorage.setItem("times", JSON.stringify(times));
    localStorage.setItem("descriptions", JSON.stringify(descriptions));
}

var validateInput = function(courseName, courseNumber, courseDate, courseLength, courseDay, courseTime, courseDesc) {

    if (courseName === "") {
        getById("error-course-name").innerHTML = "Enter a Class Name";
    }

    if (courseNumber === "") {
        getById("error-course-number").innerHTML = "Enter a Class Number";
    }
    else {

        var courseNumberPattern = /^[A-Z]{3}-\d{3}$/;

        if (courseNumberPattern.test(courseNumber) === false) {
            getById("error-course-number").innerHTML = "Must be ABC-123 Format";
        }
    }

    if (courseDate === "") {
        getById("error-course-start").innerHTML = "Enter a Start Date";
    }
    else {

        var courseDatePattern = /^\d{2}\/\d{2}\/\d{4}$/;

        if (courseDatePattern.test(courseDate) === false) {
            getById("error-course-start").innerHTML = "Must be XX/XX/XXXX Format";
        }
    }

    var courseDateObject = new Date(courseDate);

    if (courseDateObject.toString() === "Invalid Date") {
        getById("error-course-start").innerHTML = "Enter a Valid Date";
    }
    else {
        var today = new Date();
        var dateDifference = courseDateObject.getTime() - today.getTime();

        if (dateDifference < 0) {
            getById("error-course-start").innerHTML = "Enter a Future Date";
        }
    }

    if (courseDesc === "") {
        getById("error-course-description").innerHTML = "Enter a Class Description";
     }
};

window.onload = function() {
    getById("add-class").onclick = addClass;
}
