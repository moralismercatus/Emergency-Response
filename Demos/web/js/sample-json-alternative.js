// Example JSON array of a possible scenario with a Player, Floors, Rooms and Walls defined
// In this sample, the definitions of Floors, Rooms, and Walls are seperated. 
//
// Scenario -->
//      [scenario-attributes]
//      Player -->
//          [player-attributes]
//      Floors -->
//          [floor-attributes]
//      Rooms -->
//          [room-attributes]
//      Walls -->
//          [wall-attributes]
// Floors are referenced by:    scenario['Floors'][floor-number]
// Rooms are referenced by:     scenario['Rooms'][floor-number][room-id]
// Walls are reference by:      scneario['Walls'][floor-number][room-id][direction]

var scenario = {
    'name': 'Example Scenario',
    'Player': {
        'x': 1,
        'y': 2,
        'z': 0,
        'facing': 'n',
    },
    'Floors' : {
        0 : {
            'name': 'First Floor',
        },
        1: {
            'name': 'Second Floor',
        },
        2: {
            'name': 'Third Floor'
        },
    },
    'Rooms': {
        0: {
            'profoff': {
                'name': 'Professor\'s Office',
                'x': 0,
                'y': 0,
                'z': 0,
            },
            'hall0': {
                'name': 'Hallway-South',
                'x': 1,
                'y': 0,
                'z': 0,
            },
            'hall1': {
                'name': 'Hallway-Middle', 
                'x': 1, 
                'y': 1, 
                'z': 0,
            },
            'hall2': {
                'name': 'Hallway-North', 
                'x': 1, 
                'y': 2, 
                'z': 0,
            },
            'miscoff': {
                'name': 'Miscellaneous Office', 
                'x': 2, 
                'y': 2, 
                'z': 0,
            },
            'elev0': {
                'name': 'Elevator', 
                'x': 1, 
                'y': 3, 
                'z': 0,
            },
        }
        1: {
            'elev1': {
                'name': 'Elevator', 
                'x': 1, 
                'y': 3, 
                'z': 1,
            },
            '2hall2': {
                'name': '2nd Floor Hallway', 
                'x': 1, 
                'y': 2, 
                'z': 1,
            },
            'bthrm': {
                'name': 'Bathroom', 
                'x': 1, 
                'y': 1, 
                'z': 1,
            },
        },
        2: {},

    },
    'Walls': {
        0: {
            'profoffice': {
                'e': {
                    'name': 'E Office Wall',
                    'image': 'profoffice-e.jpg'
                },
                'w': {
                    'name': 'W Office Wall'
                    'image': 'profoffice-w.jpg'
                },
                'n': {
                    'name': 'N Office Wall'
                    'image': 'profoffice-n.jpg'
                },
                's': {
                    'name': 'S Office Wall'
                    'image': 'profoffice-s.jpg'
                },
            },
            'hall0': {
                'e': {
                    'name': 'E Hallway-East Wall',
                    'image': 'hall0-e.jpg'
                },
                'w': {
                    'name': 'W Hallway-West Wall',
                    'image': 'hall0-w.jpg'
                }, 
                'n': {
                    'name': 'N Hallway-North Wall',
                    'image': 'hall0-n.jpg'
                },
                's': {
                    'name': 'S Hallway-South Wall',
                    'image': 'hall0-s.jpg'
                },
            },
            'hall1': {
                'e': {
                    'name': 'E Hallway-Middle Wall', 
                    'image': 'hall1-e.jpg'
                },
                'w': {
                    'name': 'W Hallway-Middle Wall', 
                    'image': 'hall1-w.jpg'
                },
                'n': {
                    'name': 'N Hallway-Middle Wall', 
                    'image': 'hall1-n.jpg'
                },
                's': {
                    'name': 'S Hallway-Middle Wall', 
                    'image': 'hall1-s.jpg'
                },
            },
            'hall2' : {
                'e': {
                    'name': 'E Hallway-North Wall', 
                    'image': 'hall2-e.jpg'
                },
                'w': {
                    'name': 'W Hallway-North Wall', 
                    'image': 'hall2-w.jpg'
                },
                'n': {
                    'name': 'N Hallway-North Wall', 
                    'image': 'hall2-n.jpg'
                },
                's': {
                    'name': 'S Hallway-North Wall', 
                    'image': 'hall2-s.jpg'
                },
            },
            'miscoff' : {
                'e': {
                    'name': 'E Misc-Office Wall', 
                    'image': 'miscoff-e.jpg'
                },
                'w': {
                    'name': 'W Misc-Office Wall', 
                    'image': 'miscoff-w.jpg'
                },
                'n': {
                    'name': 'N Misc-Office Wall', 
                    'image': 'miscoff-n.jpg'
                },
                's': {
                    'name': 'S Misc-Office Wall', 
                    'image': 'miscoff-s.jpg'
                },
            },
            'elev': {
                'e': {
                    'name': 'E Elevator Wall', 
                    'image': 'elev-e.jpg'
                }, 
                'w': {
                    'name': 'W Elevator Wall', 
                    'image': 'elev-w.jpg'
                },
                'n': {
                    'name': 'N Elevator Wall', 
                    'image': 'elev-n.jpg'
                },
                's': {
                    'name': 'S Elevator Wall', 
                    'image': 'elev-s.jpg'
                },
            },
        },
        1: {
            'elev1': {
                'e': {
                    'name': 'E Elevator Wall', 
                    'image': 'elev1-e.jpg'
                },
                'w': {
                'name': 'W Elevator Wall', 
                'image': 'elev1-w.jpg'
                },
                'n': {
                    'name': 'N Elevator Wall', 
                    'image': 'elev1-n.jpg'
                },
                's': {
                    'name': 'S Elevator Wall', 
                    'image': 'elev1-s.jpg'
                },
            },
            '2hall2': {
                'e': {
                    'name': 'E 2nd Floor Hallway Wall', 
                    'image': '2hall2-e.jpg'
                },
                'w': {
                    'name': 'W 2nd Floor Hallway Wall', 
                    'image': '2hall2-w.jpg'
                },
                'n': {
                    'name': 'N 2nd Floor Hallway Wall', 
                    'image': '2hall2-n.jpg'
                },
                's': {
                    'name': 'S 2nd Floor Hallway Wall', 
                    'image': '2hall2-s.jpg'
                },
            },
            'bthrm': {
                'e': {
                    'name': 'E Bathroom Wall', 
                    'image': 'bthrm-e.jpg'
                },
                'w': {
                    'name': 'W Bathroom Wall', 
                    'image': 'bthrm-w.jpg'
                },
                'n': {
                    'name': 'N Bathroom Wall', 
                    'image': 'bthrm-n.jpg'
                },
                's': {
                    'name': 'S Bathroom Wall', 
                    'image': 'bthrm-s.jpg'
                },
            },   
        },
    },
}
