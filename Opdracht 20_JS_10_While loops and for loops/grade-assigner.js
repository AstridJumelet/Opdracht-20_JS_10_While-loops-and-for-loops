console.log("** grade-assigner **");
function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}


for (i = 60; i <= 100; i++) {
    if (i > 65 && i <= 70) {
        console.log("for scoring " + i + " points, you get a D");
    } else if (i > 70 && i <= 80) {
        console.log("for scoring " + i + " points, you get a C");
    } else if (i > 80 && i <= 90) {
        console.log("for scoring " + i + " points, you get a B");
    } else if (i > 90) {
        console.log("for scoring " + i + " points, you get an A");
    }
}