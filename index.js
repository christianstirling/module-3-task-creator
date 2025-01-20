/*  PART 0 - DATA

    'forceValues object' - stores all the mean and standard deviation values used in module 3.
*/

const forceValues = {}

/*  PART 1 - INPUT

    'input' array holds the user input in the form of objects (each object represents a task).
    This will contain all of the information that the user should enter during the task creation process.
    This array is what will be entered into the task creator function and used to locate the relevant mean and SD values.
*/


const input = [
    {
        handHeight: "Waist",
        lateralAngle: "45 degrees",
        elbowAngle: "180 degrees",
        forceDirection: "Superior"
    }
]

/* PART 2 - FUNCTIONS


*/

function createTask(input) {
    let horizontalPosition
    let verticalPositon
    let lateralPosition

    let output = newArray()

    for(i = 0; i < input.length; i++) {

        horizontalPosition = 0
        verticalPositon = 0
        lateralPosition = 0


        switch (input[i].handHeight) {
            case "Waist":
                verticalPositon = -0.411
                break
            case "Umbilicus":
                verticalPositon = -0.335
                break
            case "Shoulder":
                verticalPositon = 0
                break
            case "Eye":
                verticalPositon = 0.180
                break
            case "Stature":
                verticalPositon = 0.297
                break
            case "Overhead":
                verticalPositon = 0.473
                break
            default:
        }

        //  Calculate lateralPosition value

        switch (input[i].lateralAngle) {
            case "-20 degrees":
                lateralPosition = -0.200
                break
            case "0 degrees":
                lateralPosition = 0
                break
            case "45 degrees":
                switch (input[i].elbowAngle) {
                    case "180 degrees":
                        break
                    case "135 degrees":
                        break
                    case "90 degrees":
                        break
                    default:
                }
                break
            case "90 degrees":
                break
            default:
        }

        //  Calculate horizontalPosition value


        findValues(input[i].forceDirection, horizontalPosition, verticalPositon, lateralPosition)

        output.push(makeOutput(input[i]))

    }

    

    
}

function findValues(direction, x, y, z) {
    maleMean = 0
    maleStdDev = 0
    femaleMean = 0
    femaleStdDev = 0

    //  Calculate mean and standardDeviation pairs for both male and female in the selected direction at the given x, y, z values for the hand location
}

function makeOutput() {

}

