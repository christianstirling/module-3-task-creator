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
        name: "Task Name",
        hand: "Right",

        forceDirection: "Superior",

        verticalHeightFromFloor: "0.40",
        lateralDistanceFromShoulder: "0",
        lateralDirectionFromShoulder: "Neutral",
        horizontalDistanceFromShoulder: "0.15",

        isStanding: true,

        forceCount: "1",
        forceMagnitude: "2",
        forceDuration: "3"
    }
]

/* PART 2 - FUNCTIONS

    1.  createTask

    2.  findValues

    3.  makeOutput
*/

function createTask(input) {
    let h
    let v
    let l
    let h2
    let v2
    let l2
    let h3
    let v3
    let l3

    let n

    let output = new Array()

    for(i = 0; i < input.length; i++) {

        h = 0
        v = 0
        l = 0
        h2 = 0
        v2 = 0
        l2 = 0
        h3 = 0
        v3 = 0
        l3 = 0
        

        h = input[i].horizontalDistanceFromShoulder
        h2 = Math.pow(h, 2)
        h3 = Math.pow(h, 3)

        v = (averageFemaleShoulderHeight) - (input[i].verticalHeightFromFloor)
        v2 = Math.pow(v, 2)
        v3 = Math.pow(v, 3)

        switch (input[i].lateralDirectionFromShoulder) {
            case 'Inside':
                l = ((-1)*(input[i].lateralDistanceFromShoulder))
                break
            case 'Neutral':
                l = 0
                break
            case 'Outside':
                l = input[i].lateralDistanceFromShoulder
                break
            default:
        }
        l2 = Math.pow(l, 2)
        l3 = Math.pow(l, 3)
    
        n = 0

        switch (input[i].forceDirection) {
            case 'Superior':
                n = (100.7 + 91.93*(v2) - 161.7*(h2) - 179.03*(l2) - 60.6*(h*v) + 58.21*(l*v))
                break
            case 'Inferior':
                n = (140.2 + 208.72*(v) - 32.47*(l) - 46.37*(v2) - 187.06*(h2) - 169.46*(l2) - 604.21*(v3) - 220.40*(h*v) - 127.77*(l*v))
                break
            case 'Anterior':
                n = (96.2 - 43.06*(v) - 31.34*(l) - 126.96*(v2) + 181.93*(h2) - 283.74*(l2) + 147.23*(v3) + 373.58*(l3) + 32.08*(l*v))
                break
            case 'Posterior':
                n = (98.9 - 36.73(l) - 139.18*(v2) + 456.95*(h2) - 391.98(l2) - 496.04*(h3) + 607.89*(l3) - 171.07*(h*v) - 58.8*(l*v))
                break
            case 'Medial':
                n = (95.1 - 123.58*(v2) - 226.49*(h3) + 347.73*(l3) - 61.24*(h*v) - 179.04*(l*v))
                break
            case 'Lateral':
                n = (55.4 + 68.94*(h) + 87.23*(l) - 315.53*(h3) - 293.33*(h*l) + 45.4*(h*v))
                break
            default:
        }

        femaleMean = n
        femaleStdDev = (n*(0.3))
        maleMean = (n*(1.5))
        maleStdDev = (maleMean*(0.3))

        output.push(makeOutput(input[i]), i)
    } 
}

function makeOutput(input, index) {
    let output = new Object();

    output.Task = (index + 1);
    output.TaskName = input[index].name;
    output.Hand = input[index].hand;
    // output.ForceType = input[index].handleType;
    output.ForceMagnitude = input[index].forceMagnitude;
    output.ForceCount = input[index].forceCount;
    output.ForceDuration = input[index].forceDuration;

    output.MaleMean = maleMean;
    output.MaleStdDev = maleStdDev;
    output.FemaleMean = femaleMean;
    output.FemaleStdDev = femaleStdDev;

    return output;
}

/*  PART 3 - MAIN
*/

const averageFemaleShoulderHeight = 0.54

let maleMean
let maleStdDev
let femaleMean
let femaleStdDev

const tasks = createTask(input)

/*  PART 4 - CONSOLE LOG

    Not for use in actual calculator.
*/

console.log(tasks)