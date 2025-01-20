const inputTemplate = [
    // Option 1 - assuming that the selected force direction can only operate along a single dimension.
    {
        taskName: "",
        hand: "",

        forceDirection: "Superior ? Inferior ? Median ? Lateral ? Anterior ? Posterior",

        handHeight: "Waist ? Umbilicus ? Shoulder ? Eye ? Overhead",
        lateralAngle: "-20 degrees ? 0 degrees ? 45 degrees ? 90 degrees",
        elbowAngle: "180 degrees ? 135 degrees ? 90 degrees ? 45 degrees",

        forceCount: "9999",
        forceMagnitude: "9999",
        forceDuration: "9999"
    },
    // Option 2 - force direction can operate freely along 3 dimensions, so it would be determined by a combination of up to 3 directions.
    {
        taskName: "",
        hand: "",
        
        xDirection: "Anterior ? Posterior ? Neutral",
        yDirection: "Superior ? Inferior ? Neutral",
        zDirection: "Median ? Lateral ? Neutral",

        handHeight: "Waist ? Umbilicus ? Shoulder ? Eye ? Overhead",
        lateralAngle: "-20 degrees ? 0 degrees ? 45 degrees ? 90 degrees",
        elbowAngle: "180 degrees ? 135 degrees ? 90 degrees",

        forceCount: "9999",
        forceMagnitude: "9999",
        forceDuration: "9999"
        
        // All three directions must not be neutral or else the force is not moving!
    }
]