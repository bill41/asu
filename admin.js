"use strict";

var getById = function (id) { return document.getElementById(id); };

var addClass = function() {
    var courseName = getById("course-name").value;
    var courseNumber = getById("course-number").value.toUpperCase();
    var courseDate = getById("course-date").value;
    var courseLength = getById("course-length").value;
    var courseDay = getById("course-day").value;
    var courseTime = getById("course-time").value;
    var courseDesc = getById("course-desc").value;

    validateInput(courseName, courseNumber, courseDate, courseLength, courseDay, courseTime, courseDesc);
};

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
