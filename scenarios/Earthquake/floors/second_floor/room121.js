'room121': {
    'id': 'hall121',
    'x': 1,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall121',
            'image': 'R121-east.jpg',
            'destination': {
                'x': 2,
                'z': 0
            }
        },
        'n': {
            'name': 'NHall121',
            'image': 'R121-north.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 280,
                    'height': 500,
                    'top': 142,
                    'left': 420,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        's': {
            'name': 'SHall121',
            'image': 'R121-south.jpg',
            'destination': {
                'y': 1
            }
        },
        'w': {
            'name': 'WHall121',
            'image': 'R121-west.jpg',
            '_props': {
                'aorSign': {
                    'name': 'aorSign',
                    'image': 'AreaRescueSign.png',
                    'width': 125,
                    'height': 75,
                    'top': 325,
                    'left': 280
                }
            }
        }
    }
}
