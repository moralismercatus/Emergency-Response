'room208': {
    'id': 'hall208', 
    'x': 2, 
    'y': 0,
    'annotation': 'AnnotationExit.png',
    '_walls': {
        'e': {
            'name': 'EHall208', 
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall208',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            },
			'_triggers' : ['aftershock'],
        },
        'n': {
            'name': 'NHall208',   
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall208', 
            'image': 'R200-south.jpg'
        }
    }
}
