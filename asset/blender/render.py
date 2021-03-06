import bpy
import sys
import re

g_cameras = []
g_groups = []
g_use_rgroups = False
g_render = None
g_path = '//camera'

def proc_args(args):
    global g_cameras, g_groups, g_use_rgroups, g_render, g_path
    for arg in args:
        if args == None:
            return
        sarg = arg.split('=')
        if args == None:
            break
        elif sarg[0] == 'groups':
            g_groups = sarg[1]
        elif sarg[0] == 'rgroups':
            if sarg[1] == 'true':
                g_use_rgroups = True
            elif sarg[1] == 'false':
                g_use_rgroups = False
            else:
                print('error: "rgroups" must equal "true" or "false"')
                return
        elif sarg[0] == 'cameras':
            g_cameras = sarg[1]
        elif sarg[0] == 'render':
            g_render = sarg[1]
        elif sarg[0] == 'path':
            g_path = sarg[1]
    if g_render == None:
        print('error: missing "render" argument')
        return
    elif g_render == 'all_groups':
        print('rendering all_groups')
        render_all_groups()
    elif g_render == 'all_cameras':
        print('rendering all_cameras')
        render_all_cameras()
    elif g_render == 'cameras':
        print('rendering cameras')
        render_cameras()
    elif g_render == 'groups':
        print('rendering groups')
        render_groups()
    else:
        print('error: bad render argument')

def render(cam):
    global g_path, g_use_rgroups
    if cam.type != 'CAMERA':
        return
    if cam.name.startswith('c_') == False:
        return
    if g_use_rgroups == True:
        apply_rgroup_status(cam)
    print('\t'+cam.name)
    scene = bpy.data.scenes[0]
    render = scene.render
    render.filepath = g_path + '\\' + cam.name.strip('c_')
    scene.camera = cam
    bpy.ops.render.render(write_still=True)
    #render.file_format = 'JPEG'...Just set it manually!

def render_all_groups():
    groups = bpy.data.groups
    for group in groups:
        if group.name.startswith('c_'):
            render_group(group)
            
def render_groups():
    global g_groups
    groups = bpy.data.groups
    for group in groups:
        if group.name.startswith('c_'):
            if group.name in g_groups:
                render_group(group)

def render_group(group):
    print('rendering group:' + group.name)
    for cam in group.objects:
        render(cam)
       
def render_all_cameras():
    objs = bpy.data.objects
    for obj in objs:
        render(obj)
    
def render_cameras():
    global g_cameras
    objs = bpy.data.objects
    for obj in objs:
        if obj.name in g_cameras:
            render(obj)

def apply_rgroup_status(cam):
    s = re.split(r"_", cam.name)
    g = re.split(r"-", s[1])[0]
    g = 'r_' + g
    # Turn off render on all objects
    for obj in bpy.data.objects:
        obj.hide_render = True
    # Turn on render for objects in correct render group
    for obj in bpy.data.groups[g].objects:
        obj.hide_render = False
'''def render_path(path):
    pl = path.split(',')
    groups = bpy.data.groups
    cgn = pl[0]
    pl = pl[1:]
    render_group(groups[cgn])
    for p in pl:
        cgn = cgn + re.split('[1-9]+', p)[0]
        cgc = int(re.split('[a-z]+', p)[1])
        for i in range(1, cgc+1):
            render_group(groups[cgn + str(i)])
        cgn = cgn + str(cgc)'''
            
if __name__ == '__main__':
    args = sys.argv
    proc_args(args)
    print('rendering: finished')
