'room411': {
    'id': 'room411',
    'x': 4,
    'y': 1,
    '_triggers': ['groupAttack411'],
    '_walls': {
        'e': {
            'name': 'ERoom411',
            'image': 'R411-east.jpg'
        },
        'w': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'destination': {
                'x': 3
            }
        },
        'n': {
            'name': 'NRoom411',
            'image': 'R411-north.jpg'
        },
        's': {
            'name': 'SRoom411',
            'image': 'R411-south.jpg'
        },
        'entryScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection' : 'w',
            'isCutscene': true,
            '_props': {
                'group-of-people': {
                    'name': 'group-of-people',
                    'image': 'GroupOfPeople.png',
                    'width': 650,
                    'height': 315,
                    'left': 280,
                    'top': 230
                }
            }
        },
        'shooterEntersScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection' : 'w',
            'isCutscene': true,
            '_props': {
                'group-of-people': {
                    'name': 'group-of-people',
                    'image': 'GroupOfPeople.png',
                    'width': 650,
                    'height': 315,
                    'left': 280,
                    'top': 230
                },
                'da-shootah': {
                    'name': 'da-shootah',
                    'image': 'shooter.png',
                    'width': 128,
                    'height': 256,
                    'left': 460,
                    'top': 285
                }
            }
        }
    }
}