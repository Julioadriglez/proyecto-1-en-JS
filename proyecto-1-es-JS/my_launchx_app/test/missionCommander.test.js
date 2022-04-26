const missionCommander = require('../app/missionCommander');

describe("unit tests for Mission Commander Class", () => {
    test( '1) Create a mission commander objet', () => {
        const myMissionCommander = new missionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");

    });
} )