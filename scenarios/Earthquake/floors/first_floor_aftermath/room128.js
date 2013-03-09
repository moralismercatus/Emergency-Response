'room128': {
    'id': 'hall128', 
    'x': 1, 
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall128', 
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall128',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
            '_props' : {
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe.png',
                    'width': 50,
                    'height': 440,
                    'left': 405,
                    'top': 125,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A door frame'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall128',   
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            },
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'width': 400,
                    'height': 300,
                    'left': 380,
                    'top': 150,
                    'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'Hanging wires'
                        },
                    'barrier' : true
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 400,
                    'height': 300,
                    'left': 380,
                    'top': 150
                }
            }
        },
        's': {
            'name': 'SHall128', 
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            },
			'_props' : {
				'Luke2' : {
					'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 125,
                    'height': 250,
                    'left': 435,
                    'top': 250,
					'action': 'showConversation',
					'actionVariables': {
                        'conversationName': 'Luke'
                    }
				}
			}
		}
    }
}
