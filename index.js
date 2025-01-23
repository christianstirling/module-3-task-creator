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
        name: "Task One",
        hand: "Right",

        forceDirection: "Superior",
        isStanding: true,
        verticalHeight: "0.40",
        lateralDistanceFromShoulder: "0",
        lateralDirectionFromShoulder: "Neutral",
        horizontalDistanceFromShoulder: "0.15",

        forceCount: "1",
        forceMagnitude: "2",
        forceDuration: "3"
    },
    {
        name: "Task Two",
        hand: "Left",

        forceDirection: "Medial",
        isStanding: false,
        verticalHeight: "0.2",
        lateralDistanceFromShoulder: "0.1",
        lateralDirectionFromShoulder: "Outside",
        horizontalDistanceFromShoulder: "0.13",

        forceCount: "1",
        forceMagnitude: "3",
        forceDuration: "2"
    }
]

/* PART 2 - FUNCTIONS

    1.  createTask 

        This function is the main piece of the task creation process for module 3.
        It takes the input in the form of an array of objects.
        Each object contains the normal task information:
            name, hand, force magnitude, count, and duration
        -Plus the new modifier information specific to module 3:
            vertical height (from floor), horizontal distance (from shoulder), lateral distance (from shoulder),
            lateral direction (inside or outside shoulder), and force direction (out of 6 possible 1d directions)

        The function begins a for loop to iterate through the input array, performing the following calculations
        for each object.
        
            The function sets the three variables (v, h, l) based on the user's input, 
            then proceeds to calculate the mean strength for females in the given force direction.

            Once the female mean is determined, the other values (female SD, male mean, male SD) are
            calculated from that value.

            The makeOutput function is called at the end to create the output object for this input object,
            and that object is pushed onto the output array.
        
        Once the for loop ends, the whole output array is returned.

    2.  makeOutput

        This function is used to create the output objects which will ultimately be held in an output array.

        The format of these objects is designed to match up with the input of the module 3 calculator.
*/

function createTask(input) {
    let h
    let v
    let l

    let output = new Array()

    for(i = 0; i < input.length; i++) {

        h = 0
        v = 0
        l = 0

        maleMean = 0
        maleStdDev = 0
        femaleMean = 0
        femaleStdDev = 0
                

        h = input[i].horizontalDistanceFromShoulder

        v = (averageFemaleShoulderHeight) - (input[i].verticalHeight)

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

        switch (input[i].forceDirection) {
            case 'Superior':
                femaleMean = (100.7 + 91.93*(v**2) - 161.7*(h**2) - 179.03*(l**2) - 60.6*(h*v) + 58.21*(l*v))
                break
            case 'Inferior':
                femaleMean = (140.2 + 208.72*(v) - 32.47*(l) - 46.37*(v**2) - 187.06*(h**2) - 169.46*(l**2) - 604.21*(v**3) - 220.40*(h*v) - 127.77*(l*v))
                break
            case 'Anterior':
                femaleMean = (96.2 - 43.06*(v) - 31.34*(l) - 126.96*(v**2) + 181.93*(h**2) - 283.74*(l**2) + 147.23*(v**3) + 373.58*(l**3) + 32.08*(l*v))
                break
            case 'Posterior':
                femaleMean = (98.9 - 36.73(l) - 139.18*(v**2) + 456.95*(h**2) - 391.98(l**2) - 496.04*(h**3) + 607.89*(l**3) - 171.07*(h*v) - 58.8*(l*v))
                break
            case 'Medial':
                femaleMean = (95.1 - 123.58*(v**2) - 226.49*(h**3) + 347.73*(l**3) - 61.24*(h*v) - 179.04*(l*v))
                break
            case 'Lateral':
                femaleMean = (55.4 + 68.94*(h) + 87.23*(l) - 315.53*(h**3) - 293.33*(h*l) + 45.4*(h*v))
                break
            default:
                femaleMean = 0
        }

        femaleStdDev = (femaleMean*(0.3))
        maleMean = (femaleMean*(1.5))
        maleStdDev = (maleMean*(0.3))

        output.push(makeOutput(input[i], i))
    }
    
    return output
}

function makeOutput(input, index) {
    let output = new Object();

    output.Task = (index + 1);
    output.TaskName = input.name;
    output.Hand = input.hand;
    // output.ForceType = input.handleType;
    output.ForceMagnitude = input.forceMagnitude;
    output.ForceCount = input.forceCount;
    output.ForceDuration = input.forceDuration;

    output.MaleMean = maleMean;
    output.MaleStdDev = maleStdDev;
    output.FemaleMean = femaleMean;
    output.FemaleStdDev = femaleStdDev;

    return output;
}

/*  PART 3 - MAIN

    First, it creates a constant for the average female shoulder height.  This is used to compare to the height above the
    ground, which is the vertical value that the user enters, to determine the hand's v value.

    Then, variables for each mean and standard deviation value (male and female) are created globally.

    Last, we create a constant tasks which is assigned the return value of the createTask function.
    That function returns the output array of objects which contains the input tasks in the exact form
    needed to be processed as input to the calculator. (includes the mean and standard deviation values)
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